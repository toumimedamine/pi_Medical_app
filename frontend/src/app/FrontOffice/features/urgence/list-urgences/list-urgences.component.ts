import { Component, OnInit } from '@angular/core';
import { StatutUrgence, Urgence } from "../../../../models/urgence";
import { UrgenceService } from "../../../../services/urgence.service";
import { HttpErrorResponse } from "@angular/common/http";
import { ConsultationUrgenteService } from "../../../../services/consultation-urgente.service";
import { ConsultationUrgente } from "../../../../models/consultationUrgente";
import { Utilisateur } from "../../../../models/utilisateur";

@Component({
  selector: 'app-list-urgences',
  templateUrl: './list-urgences.component.html',
  styleUrls: ['./list-urgences.component.css']
})
export class ListUrgencesComponent implements OnInit {
  public listUrgences: Urgence[] = []; // Liste complète des urgences
  public filteredUrgences: Urgence[] = []; // Liste filtrée des urgences (non traitées)
  activeId: number | null = null;
  public searchQuery: string = '';
  public selectedDate: string | null = null;
  public selectedStatus: string = ''; // Nouvelle propriété pour le statut sélectionné
  public selectedType: string = ''; // Nouvelle propriété pour le type sélectionné

  constructor(private us: UrgenceService, private cus: ConsultationUrgenteService) {}

  ngOnInit() {
    this.us.getUrgences().subscribe(
      (response: Urgence[]) => {
        console.log('Urgences:', response); // Debug statement
        this.listUrgences = response;
        this.filterUrgences(); // Filtrer les urgences après leur chargement
      },
      (error: HttpErrorResponse) => {
        console.error('Error:', error); // Debug statement
        alert(error.message);
      }
    );
  }

  // Méthode pour filtrer les urgences non traitées
  filterUrgences(): void {
    this.filteredUrgences = this.listUrgences.filter(u =>
      ['En_Attente', 'En_Cours'].includes(u.statutUrgence)
    );
  }

  // Méthode appelée lors de la saisie dans le champ de recherche
  onSearch(): void {
    this.applySearchFilter();
  }
  // Méthode pour appliquer le filtre de recherche
  applySearchFilter(): void {
    if (this.searchQuery.trim() === '') {
      // Si la recherche est vide, réinitialiser la liste filtrée
      this.filterUrgences();
    } else {
      const query = this.searchQuery.toLowerCase();
      this.filteredUrgences = this.listUrgences.filter(u =>
        ['En_Attente', 'En_Cours'].includes(u.statutUrgence) &&
        (
          (u.patient?.nom?.toLowerCase()?.includes(query)) || // Recherche par nom du patient
          (u.addressePatient?.toLowerCase()?.includes(query)) // Recherche par adresse
        )
      );
    }
  }

  // Méthode appelée lors du changement de date
  onDateChange(): void {
    this.applySearchAndDateFilters();
  }

  // Méthode pour appliquer les filtres de recherche et de date
  applySearchAndDateFilters(): void {
    let filteredBySearch = this.listUrgences;

    // Filtre par recherche (nom du patient ou adresse)
    if (this.searchQuery.trim() !== '') {
      const query = this.searchQuery.toLowerCase();
      filteredBySearch = this.listUrgences.filter(u =>
        ['En_Attente', 'En_Cours'].includes(u.statutUrgence) &&
        (
          (u.patient && u.patient.nom && u.patient.nom.toLowerCase().includes(query)) || // Recherche par nom du patient
          (u.addressePatient && u.addressePatient.toLowerCase().includes(query)) // Recherche par adresse
        )
      );
    } else {
      filteredBySearch = this.listUrgences.filter(u =>
        ['En_Attente', 'En_Cours'].includes(u.statutUrgence)
      );
    }

    // Filtre par date
    if (this.selectedDate) {
      const selectedDate = new Date(this.selectedDate).toISOString().split('T')[0]; // Format YYYY-MM-DD
      this.filteredUrgences = filteredBySearch.filter(u =>
        u.date && new Date(u.date).toISOString().split('T')[0] === selectedDate
      );
    } else {
      this.filteredUrgences = filteredBySearch;
    }
  }


  // Méthode appelée lors du changement de statut ou de type
  onFilterChange(): void {
    this.applyAllFilters();
  }

  // Méthode pour appliquer tous les filtres (recherche, date, statut, type)
  applyAllFilters(): void {
    let filteredBySearch = this.listUrgences;

    // Filtre par recherche (nom du patient ou adresse)
    if (this.searchQuery.trim() !== '') {
      const query = this.searchQuery.toLowerCase();
      filteredBySearch = this.listUrgences.filter(u =>
        (u.patient && u.patient.nom && u.patient.nom.toLowerCase().includes(query)) || // Recherche par nom du patient
        (u.addressePatient && u.addressePatient.toLowerCase().includes(query)) // Recherche par adresse
      );
    }

    // Filtre par date
    if (this.selectedDate) {
      const selectedDate = new Date(this.selectedDate).toISOString().split('T')[0]; // Format YYYY-MM-DD
      filteredBySearch = filteredBySearch.filter(u =>
        u.date && new Date(u.date).toISOString().split('T')[0] === selectedDate
      );
    }

    // Filtre par statut
    if (this.selectedStatus) {
      filteredBySearch = filteredBySearch.filter(u =>
        u.statutUrgence === this.selectedStatus
      );
    }

    // Filtre par type
    if (this.selectedType) {
      filteredBySearch = filteredBySearch.filter(u =>
        u.typeUrgence === this.selectedType
      );
    }

    // Mettre à jour la liste filtrée
    this.filteredUrgences = filteredBySearch;
  }


  // Méthode pour basculer l'état de l'accordéon
  toggleAccordion(idUrgence: number): void {
    if (this.activeId === idUrgence) {
      this.activeId = null; // Fermer l'accordéon si déjà ouvert
    } else {
      this.activeId = idUrgence; // Ouvrir l'accordéon correspondant
    }
  }

  // Méthode pour formater le statut d'urgence
  formatStatut(statut: string): string {
    switch (statut) {
      case 'En_Attente':
        return 'EN ATTENTE';
      case 'En_Cours':
        return 'EN COURS';
      case 'Traite':
        return 'TRAITÉ';
      default:
        return statut;
    }
  }

  // Méthode pour formater le type d'urgence
  formatType(type: string): string {
    switch (type) {
      case 'A_Domicile':
        return 'À DOMICILE';
      case 'En_Ligne':
        return 'EN LIGNE';
      default:
        return type;
    }
  }

  // Supprimer une urgence
  deleteUrgence(id: number) {
    if (confirm('Are you sure you want to delete this urgency?')) {
      this.us.deleteUrgence(id).subscribe(
        () => {
          this.listUrgences = this.listUrgences.filter(u => u.idUrgence !== id);
          this.filterUrgences(); // Mettre à jour la liste filtrée après suppression
        },
        (error: HttpErrorResponse) => {
          console.error('Error deleting urgency:', error);
          alert(error.message);
        }
      );
    }
  }

  // Modifier une urgence (naviguer vers le formulaire de mise à jour)
  updateUrgence(id: number) {
    window.location.href = `/addUrgence/${id}`;
  }

  // Exporter en Excel
  exportExcel(): void {
    this.us.exportToExcel();
  }

  // Prendre en charge une urgence
  prendreEnCharge(idUrgence: number) {
    if (confirm("Voulez-vous prendre en charge cette urgence ?")) {
      const urgenceData: Partial<Urgence> = {
        medecin: { idUtilisateur: 2 } as Utilisateur,
        statutUrgence: StatutUrgence.En_Cours
      };

      this.us.updateUrgence(urgenceData, idUrgence).subscribe(
        () => {
          alert('Urgence mise à jour avec succès !');
          this.ngOnInit(); // Recharger les données après mise à jour
        },
        (error) => {
          console.error('Erreur lors de la mise à jour :', error);
          alert('Une erreur est survenue lors de la mise à jour.');
        }
      );

      this.cus.prendreEnCharge(idUrgence).subscribe(
        (response) => {
          alert("L'urgence a été prise en charge avec succès !");
          console.log(response);
        },
        (error) => {
          alert("Erreur : " + error.error);
        }
      );
    }
  }

  // Terminer une urgence
  seTerminer(idUrgence: number, idConsultationUrgente: number) {
    if (confirm("Voulez-vous vraiment terminer cette urgence ?")) {
      const urgenceData: Partial<Urgence> = {
        statutUrgence: StatutUrgence.Traite
      };

      this.us.updateUrgence(urgenceData, idUrgence).subscribe(
        () => {
          alert('Urgence mise à jour avec succès !');
          this.ngOnInit(); // Recharger les données après mise à jour
        },
        (error) => {
          console.error('Erreur lors de la mise à jour :', error);
          alert('Une erreur est survenue lors de la mise à jour.');
        }
      );

      this.cus.deleteConsultationUrgente(idConsultationUrgente).subscribe(
        () => {
          alert("Consultation urgente supprimée !");
        },
        (error) => {
          console.error("Erreur lors de la suppression de la consultation urgente :", error);
          alert("Une erreur est survenue lors de la suppression.");
        }
      );
    }
  }

  // Se décharger d'une urgence
  seDecharger(idUrgence: number, idConsultationUrgente: number) {
    if (confirm("Voulez-vous vraiment vous décharger de cette urgence ?")) {
      this.us.desaffecterUtilisateurFromUrgence(idUrgence).subscribe(
        () => {
          alert('Médecin retiré de l\'urgence avec succès !');
          this.ngOnInit(); // Recharger les données après mise à jour
        },
        (error) => {
          console.error('Erreur lors de la désaffectation du médecin :', error);
          alert('Une erreur est survenue lors de la désaffectation.');
        }
      );

      this.cus.deleteConsultationUrgente(idConsultationUrgente).subscribe(
        () => {
          alert("Consultation urgente supprimée !");
        },
        (error) => {
          console.error("Erreur lors de la suppression de la consultation urgente :", error);
          alert("Une erreur est survenue lors de la suppression.");
        }
      );
    }
  }
}
