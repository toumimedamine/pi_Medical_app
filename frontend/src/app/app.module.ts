import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListUrgencesComponent } from './FrontOffice/features/urgence/list-urgences/list-urgences.component';
import { CreateUrgenceComponent } from './FrontOffice/features/urgence/create-urgence/create-urgence.component';
import { DetailsUrgenceComponent } from './FrontOffice/features/urgence/details-urgence/details-urgence.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { NotFoundComponent } from './FrontOffice/core/not-found/not-found.component';
import { MeetingUrgenceComponent } from './FrontOffice/features/urgence/meeting-urgence/meeting-urgence.component';
import { NavbarComponent } from './FrontOffice/core/navbar/navbar.component';
import { HomeComponent } from './FrontOffice/core/home/home.component';
import { MapTrackingComponent } from './FrontOffice/features/urgence/map-tracking/map-tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    ListUrgencesComponent,
    CreateUrgenceComponent,
    DetailsUrgenceComponent,
    NotFoundComponent,
    MeetingUrgenceComponent,
    NavbarComponent,
    HomeComponent,
    MapTrackingComponent
  ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
