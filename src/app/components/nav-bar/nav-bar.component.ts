import { AuthService } from './../../services/auth.service';

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: false,
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  constructor(private router: Router , public authService: AuthService) {}

  navegar(ruta: string): void {
    this.router.navigate([ruta]);
  }

  estaActivo(ruta: string): boolean {
    return this.router.isActive(ruta, {
      paths: 'exact',
      queryParams: 'exact',
      fragment: 'ignored',
      matrixParams: 'ignored'
    });
  }
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
