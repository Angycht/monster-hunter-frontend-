import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MonstruoHabitat } from '../models/MonstruoHabitat';

@Injectable({
  providedIn: 'root'
})
export class MonstruoHabitatService {

  private apiUrl = 'http://localhost:8080/monster_hunter/api/habitats'; // Ajusta la URL

  constructor(private http: HttpClient) { }

  findAll(): Observable<MonstruoHabitat[]> {
    return this.http.get<MonstruoHabitat[]>(this.apiUrl);
  }

  findById(idMonstruoHabitat: number): Observable<MonstruoHabitat> {
    return this.http.get<MonstruoHabitat>(`${this.apiUrl}/${idMonstruoHabitat}`);
  }

  existsById(idMonstruoHabitat: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exists/${idMonstruoHabitat}`);
  }

  create(monstruoHabitat: MonstruoHabitat): Observable<MonstruoHabitat> {
    return this.http.post<MonstruoHabitat>(this.apiUrl, monstruoHabitat);
  }

  save(monstruoHabitat: MonstruoHabitat): Observable<MonstruoHabitat> {
    return this.http.put<MonstruoHabitat>(this.apiUrl, monstruoHabitat);
  }

  borrarId(idMonstruoHabitat: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${idMonstruoHabitat}`);
  }
}
