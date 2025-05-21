import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username = '';
  password = '';
  success = '';
  error = '';

  constructor(private auth: AuthService, private router: Router) {}

  register() {
    this.auth.register(this.username, this.password).subscribe({
      next: () => {
        this.success = 'Usuario registrado correctamente. Ahora puedes iniciar sesión.';
        this.error = '';
        setTimeout(() => this.router.navigate(['/']), 2000);
      },
      error: () => {
        this.error = 'No se pudo registrar el usuario';
        this.success = '';
      }
    });
  }
}
