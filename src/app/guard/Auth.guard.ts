import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(
    private authService: AuthService,
    private http: HttpClient,
    private router: Router
  ) {}

  canActivate(): boolean | UrlTree {
    if (this.authService.isLoggedIn()) {
      return true;
    } else {
      // Redirige al login si no está autenticado
      return this.router.parseUrl('/login');
    }
  }

  register(username: string, password: string): Observable<any> {
    return this.http.post(
      'http://localhost:8080/monster_hunter/api/auth/register',
      { username, password },
      { responseType: 'text' }
    );
  }
  logout() {
    this.authService.logout();
    alert('Has cerrado sesión correctamente.');
    // Redirige al login
    this.router.navigate(['/login']);
  }
  isAdmin(): boolean {
    if (this.authService.isAdmin()) {
      return true;
    }
    this.router.navigate(['/acceso-denegado']);
    return false;
  }
}
