import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../models/Material';
import { MonstruoMaterialDTO } from '../models/MonstruoMaterialDTO';

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private apiUrl = 'http://localhost:8080/monster_hunter/api/materiales'; 

  constructor(private http: HttpClient) { }

  findAll(): Observable<Material[]> {
    return this.http.get<Material[]>(this.apiUrl);
  }

  findById(idMaterial: number): Observable<Material> {
    return this.http.get<Material>(`${this.apiUrl}/${idMaterial}`);
  }

  existsById(idMaterial: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exists/${idMaterial}`);
  }

  create(material: Material): Observable<Material> {
    return this.http.post<Material>(this.apiUrl, material);
  }

  save(material: Material): Observable<Material> {
    return this.http.put<Material>(this.apiUrl, material);
  }

  borrarId(idMaterial: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${idMaterial}`);
  }

  empiezaPor(nombre: string): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.apiUrl}/search?nombre=${nombre}`);
  }

}
