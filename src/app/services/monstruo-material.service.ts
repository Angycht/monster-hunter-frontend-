import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MonstruoMaterial } from '../models/MonstruoMaterial';

@Injectable({
  providedIn: 'root'
})
export class MonstruoMaterialService {

  private apiUrl = 'http://localhost:8080/monster_hunter/api/monstruoMaterial';

  constructor(private http: HttpClient) { }

  findAll(): Observable<MonstruoMaterial[]> {
    return this.http.get<MonstruoMaterial[]>(this.apiUrl);
  }

  findById(idMonstruoMaterial: number): Observable<MonstruoMaterial> {
    return this.http.get<MonstruoMaterial>(`${this.apiUrl}/${idMonstruoMaterial}`);
  }

  existsById(idMonstruoMaterial: number): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/exists/${idMonstruoMaterial}`);
  }

  create(monstruoMaterial: MonstruoMaterial): Observable<MonstruoMaterial> {
    return this.http.post<MonstruoMaterial>(this.apiUrl, monstruoMaterial);
  }

  save(monstruoMaterial: MonstruoMaterial): Observable<MonstruoMaterial> {
  return this.http.put<MonstruoMaterial>(
    `${this.apiUrl}/${monstruoMaterial.id}`,
    monstruoMaterial
  );
}

  borrarId(idMonstruoMaterial: number): Observable<boolean> {
    return this.http.delete<boolean>(`${this.apiUrl}/${idMonstruoMaterial}`);
  }
}
