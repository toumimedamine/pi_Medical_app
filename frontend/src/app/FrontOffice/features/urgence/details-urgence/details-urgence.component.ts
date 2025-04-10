import {Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UrgenceService } from '../../../../services/urgence.service';
import { Urgence } from '../../../../models/urgence';

@Component({
  selector: 'app-details-urgence',
  templateUrl: './details-urgence.component.html',
  styleUrls: ['./details-urgence.component.css']
})
export class DetailsUrgenceComponent implements OnInit{
  urgence!: Urgence;

  constructor(
    private us: UrgenceService,
    private rt: Router,
    private act: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const idUrgence = this.act.snapshot.params['idUrgence'];
    this.us.getUrgenceById(idUrgence).subscribe(
      (data) => {
        console.log('Données récupérées:', data);
        console.log('Consultation Urgente:', data.consultationUrgente);
        console.log('aSuivre:', data.consultationUrgente?.asuivre);
        this.urgence = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des détails :', error);
        alert('Une erreur est survenue lors de la récupération des détails.');
      }
    );

  }

  // Redirection vers la liste des urgences
  backToList(): void {
    this.rt.navigateByUrl('/listUrgences');
  }

}
