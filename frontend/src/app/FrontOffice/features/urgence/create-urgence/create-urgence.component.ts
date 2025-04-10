import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UrgenceService } from '../../../../services/urgence.service';
import { TypeUrgence, StatutUrgence, Urgence } from '../../../../models/urgence';
import { Utilisateur } from '../../../../models/utilisateur';

@Component({
  selector: 'app-create-urgence',
  templateUrl: './create-urgence.component.html',
  styleUrls: ['./create-urgence.component.css']
})
export class CreateUrgenceComponent implements OnInit {

  urgenceForm!: FormGroup;
  idUrgence!: number;
  urgence!: Urgence;
  typeUrgenceOptions = Object.values(TypeUrgence);
  statutUrgenceOptions = Object.values(StatutUrgence);

  constructor(
    private us: UrgenceService,
    private rt: Router,
    private act: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Initialisation du formulaire
    this.urgenceForm = new FormGroup({
      description: new FormControl('', [Validators.required, Validators.minLength(10)]),
      addressePatient: new FormControl(''),
      typeUrgence: new FormControl('', [Validators.required]),
      statutUrgence: new FormControl(StatutUrgence.En_Attente) // Par défaut "En attente"
    });

    // Vérifier si un ID d'urgence est passé dans l'URL (mise à jour)
    this.idUrgence = this.act.snapshot.params['idUrgence'];
    if (this.idUrgence) {
      this.us.getUrgenceById(this.idUrgence).subscribe(
        (data) => {
          this.urgence = data;
          console.log(this.urgence);
          // Remplir le formulaire avec les données existantes
          this.urgenceForm.patchValue(this.urgence);
        },
        (error) => {
          console.error('Erreur lors de la récupération des données :', error);
        }
      );
    }
  }

  // Fonction appelée lors de la soumission du formulaire
// Fonction appelée lors de la soumission du formulaire
  save(): void {
    if (this.urgenceForm.invalid) {
      alert('Veuillez remplir tous les champs requis.');
      return;
    }

    // Créer un objet Urgence avec les valeurs du formulaire
    const urgenceData: Partial<Urgence> = {
      description: this.urgenceForm.value.description,
      addressePatient: this.urgenceForm.value.addressePatient,
      typeUrgence: this.urgenceForm.value.typeUrgence
    };

    if (this.idUrgence) {
      // Mise à jour d'une urgence existante avec les champs spécifiques
      this.us.updateUrgence(urgenceData, this.idUrgence).subscribe(
        () => {
          alert('Urgence mise à jour avec succès !');
          this.navigateToUrgenceList();
        },
        (error) => {
          console.error('Erreur lors de la mise à jour :', error);
          alert('Une erreur est survenue lors de la mise à jour.');
        }
      );
    } else {
      // Ajout d'une nouvelle urgence
      const newUrgence: Urgence = {
        ...this.urgenceForm.value,
        patient: { idUtilisateur: 1 } as Utilisateur, // Utilisateur temporaire (id = 1)
        date: new Date(), // Date système
        statutUrgence: StatutUrgence.En_Attente // Par défaut "En attente"
      };

      this.us.addUrgence(newUrgence).subscribe(
        () => {
          alert('Urgence ajoutée avec succès !');
          this.navigateToUrgenceList();
        },
        (error) => {
          console.error('Erreur lors de l\'ajout :', error);
          alert('Une erreur est survenue lors de l\'ajout.');
        }
      );
    }
  }

  // Méthode publique pour la redirection vers la liste des urgences
  navigateToUrgenceList(): void {
    this.rt.navigateByUrl('/listUrgences');
  }
}
