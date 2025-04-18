import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Familia } from '../models/Familia';
import { FamiliaDetalleDTO } from '../models/FamiliaDetalleDTO';

@Injectable({
  providedIn: 'root'
})
export class FamiliaService {

  private apiUrl = 'http://localhost:8080/monster_hunter/api/familias'; // Ajusta la URL

  constructor(private http: HttpClient) { }

  findAll(): Observable<Familia[]> {
    return this.http.get<Familia[]>(this.apiUrl);
  }

  findById(idFamilia: number): Observable<Familia> {
    return this.http.get<Familia>(`${this.apiUrl}/${idFamilia}`);
  }

  existsById(idFamilia: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exists/${idFamilia}`);
  }

  create(familia: Familia): Observable<Familia> {
    return this.http.post<Familia>(this.apiUrl, familia);
  }

  save(familia: Familia): Observable<Familia> {
    return this.http.put<Familia>(this.apiUrl, familia);
  }

  borrarId(idFamilia: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${idFamilia}`);
  }

  empiezaPor(nombre: string): Observable<Familia[]> {
    return this.http.get<Familia[]>(`${this.apiUrl}/search?nombre=${nombre}`);
  }
  getFamiliaDetalle(id: number): Observable<FamiliaDetalleDTO> {
    return this.http.get<FamiliaDetalleDTO>(`${this.apiUrl}/${id}/monstruos`);
  }
}
