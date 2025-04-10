import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundComponent} from "./FrontOffice/core/not-found/not-found.component";
import {DetailsUrgenceComponent} from "./FrontOffice/features/urgence/details-urgence/details-urgence.component";
import {CreateUrgenceComponent} from "./FrontOffice/features/urgence/create-urgence/create-urgence.component";
import {ListUrgencesComponent} from "./FrontOffice/features/urgence/list-urgences/list-urgences.component";
import {MeetingUrgenceComponent} from "./FrontOffice/features/urgence/meeting-urgence/meeting-urgence.component";
import {HomeComponent} from "./FrontOffice/core/home/home.component";
import {MapTrackingComponent} from "./FrontOffice/features/urgence/map-tracking/map-tracking.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'listUrgences', component: ListUrgencesComponent },
  { path: 'addUrgence', component: CreateUrgenceComponent },
  { path: 'addUrgence/:idUrgence', component: CreateUrgenceComponent },
  { path: 'urgenceDetails/:idUrgence', component: DetailsUrgenceComponent },
  { path: 'meetingUrgence', component: MeetingUrgenceComponent },
  { path: 'mapTracking', component: MapTrackingComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
