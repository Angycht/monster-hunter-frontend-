import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Habitat } from '../models/Habitat';

@Injectable({
  providedIn: 'root'
})
export class HabitatService {

  private apiUrl = 'http://localhost:8080/monster_hunter/api/habitats'; // Ajusta la URL

  constructor(private http: HttpClient) { }

  findAll(): Observable<Habitat[]> {
    return this.http.get<Habitat[]>(this.apiUrl);
  }

  findById(idHabitat: number): Observable<Habitat> {
    return this.http.get<Habitat>(`${this.apiUrl}/${idHabitat}`);
  }

  existsById(idHabitat: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exists/${idHabitat}`);
  }

  create(habitat: Habitat): Observable<Habitat> {
    return this.http.post<Habitat>(this.apiUrl, habitat);
  }


  save(habitat: Habitat): Observable<Habitat> {
   return this.http.put<Habitat>(`${this.apiUrl}/${habitat.id}`, habitat);
 }

  borrarId(idHabitat: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${idHabitat}`);
  }

  empiezaPor(nombre: string): Observable<Habitat[]> {
    return this.http.get<Habitat[]>(`${this.apiUrl}/search?nombre=${nombre}`);
  }
}
