import { Urgence } from '../models/urgence';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UrgenceService {
  private apiServerUrl = `http://localhost:8089/urgence`;
  constructor(private http: HttpClient) {}
  getUrgences(): Observable<Urgence[]> {
    //return this.http.get<Urgence[]>('http://localhost:3000/urgence');
    return this.http.get<Urgence[]>(`${this.apiServerUrl}/retrieve-all-urgences`);
  }

  getUrgenceById(id: number): Observable<Urgence> {
    //return this.http.get<Urgence>('http://localhost:3000/urgence'+id);
    return this.http.get<Urgence>(`${this.apiServerUrl}/retrieve-urgence/${id}`);
  }

  addUrgence(u: Urgence): Observable<Urgence> {
    //return this.http.post<Urgence>('http://localhost:3000/urgence', u);
    return this.http.post<Urgence>(`${this.apiServerUrl}/add-urgence`, u);
  }

  deleteUrgence(id: number): Observable<void> {
    //return this.http.delete<void>('http://localhost:3000/urgence'+id);
    return this.http.delete<void>(`${this.apiServerUrl}/remove-urgence/${id}`);
  }

  updateUrgence(u: Partial<Urgence>, id: number): Observable<Urgence> {
    //return this.http.put<Urgence>('http://localhost:3000/urgence'+id,u);
    return this.http.put <Urgence>(`${this.apiServerUrl}/modify-urgence/${id}`, u);
  }

  exportToExcel(): void {
    const url = `${this.apiServerUrl}/excel`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/octet-stream'
    });

    // Make the HTTP GET request to download the Excel file
    this.http.get(url, { responseType: 'blob', headers }).subscribe((response: Blob) => {
      // Create a link element to trigger the download
      const blob = new Blob([response], { type: 'application/vnd.ms-excel' });
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = 'Urgences.xls'; // Set the desired file name
      link.click();

      // Clean up the URL object after the download is initiated
      window.URL.revokeObjectURL(link.href);
    }, (error) => {
      console.error('Error downloading Excel file:', error);
    });
  }

  desaffecterUtilisateurFromUrgence(idUrgence: number): Observable<void> {
    return this.http.put<void>(`${this.apiServerUrl}/desaffercter-utilisateur-from-urgence/${idUrgence}`, {});
  }

}
