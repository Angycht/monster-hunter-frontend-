import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Monstruo } from '../models/Monstruo';

@Injectable({
  providedIn: 'root'
})
export class MonstruoService {

  private apiUrl = 'http://localhost:8080/monster_hunter/api/monstruos'; // Ajusta la URL

  constructor(private http: HttpClient) { }

  findAll(): Observable<Monstruo[]> {
    return this.http.get<Monstruo[]>(this.apiUrl);
  }

  findById(idMonstruo: number): Observable<Monstruo> {
    return this.http.get<Monstruo>(`${this.apiUrl}/${idMonstruo}`);
  }

  existsById(idMonstruo: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exists/${idMonstruo}`);
  }

  create(monstruo: Monstruo): Observable<Monstruo> {
    return this.http.post<Monstruo>(this.apiUrl, monstruo);
  }

  save(monstruo: Monstruo): Observable<Monstruo> {
    return this.http.put<Monstruo>(this.apiUrl, monstruo);
  }

  borrarId(idMonstruo: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${idMonstruo}`);
  }

  empiezaPor(nombre: string): Observable<Monstruo[]> {
    return this.http.get<Monstruo[]>(`${this.apiUrl}/search?nombre=${nombre}`);
  }
}
