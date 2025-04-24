import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  username = '';
  password = '';
  message = '';

  constructor(private auth: AuthService) {}

  onLogin() {
    this.auth.login(this.username, this.password).subscribe({
      next: () => {
        this.auth.setLoggedIn(true);
        this.message = 'Sesión iniciada correctamente';
        // Redirige a la página principal o dashboard
      },
      error: (err) => (this.message = 'Usuario o contraseña incorrectos'),
    });
  }
}
