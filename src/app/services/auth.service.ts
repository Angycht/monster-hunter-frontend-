import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:8080/monster_hunter/api/auth';

  constructor(private http: HttpClient) {}

  // Login: guarda el token en localStorage
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password }, { responseType: 'text' })
      .pipe(
        tap(token => localStorage.setItem('token', token))
      );
  }

  // Registro de usuario
  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password }, { responseType: 'text' });
  }

  // Elimina el token (logout)
  logout(): void {
    localStorage.removeItem('token');
  }

  // ¿Está autenticado?
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Obtener el token
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  isAdmin(): boolean {
    const token = this.getToken();
    if (!token) return false;

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role === 'ADMIN'; // Asegúrate que coincida con el nombre del rol en tu BD
    } catch (e) {
      return false;
    }
  }
}
