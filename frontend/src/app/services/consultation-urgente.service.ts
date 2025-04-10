import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ConsultationUrgente} from "../models/consultationUrgente";

@Injectable({
  providedIn: 'root'
})
export class ConsultationUrgenteService {
  private apiServerUrl = `http://localhost:8089/Back/consultationUrgente`;
  constructor(private http: HttpClient) {}
  getConsultationUrgentes(): Observable<ConsultationUrgente[]> {
    //return this.http.get<Urgence[]>('http://localhost:3000/urgence');
    return this.http.get<ConsultationUrgente[]>(`${this.apiServerUrl}/retrieve-all-consultationUrgentes`);
  }

  getConsultationUrgenteById(id: number): Observable<ConsultationUrgente> {
    //return this.http.get<Urgence>('http://localhost:3000/urgence'+id);
    return this.http.get<ConsultationUrgente>(`${this.apiServerUrl}/retrieve-consultationUrgente/${id}`);
  }

  addConsultationUrgente(u: ConsultationUrgente): Observable<ConsultationUrgente> {
    //return this.http.post<Urgence>('http://localhost:3000/urgence', u);
    return this.http.post<ConsultationUrgente>(`${this.apiServerUrl}/add-consultationUrgente`, u);
  }

  deleteConsultationUrgente(id: number): Observable<void> {
    //return this.http.delete<void>('http://localhost:3000/urgence'+id);
    return this.http.delete<void>(`${this.apiServerUrl}/remove-consultationUrgente/${id}`);
  }

  updateConsultationUrgente(cu: Partial<ConsultationUrgente>, id: number): Observable<ConsultationUrgente> {
    //return this.http.put<Urgence>('http://localhost:3000/urgence'+id,u);
    return this.http.put <ConsultationUrgente>(`${this.apiServerUrl}/modify-consultationUrgente/${id}`, cu);
  }

  prendreEnCharge(idUrgence: number): Observable<ConsultationUrgente> {
    return this.http.post<ConsultationUrgente>(`${this.apiServerUrl}/prendre-en-charge/${idUrgence}`,{});
  }


}
