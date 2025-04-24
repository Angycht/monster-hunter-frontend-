import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  message: string = '';

  constructor(private userService: UsuarioService, private router: Router) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.message = 'Las contraseñas no coinciden';
      return;
    }
    const user = { email: this.email, password: this.password };
    this.userService.register(user).subscribe({
      next: () => {
        this.message = 'Usuario registrado correctamente';
        setTimeout(() => this.router.navigate(['/login']), 1500);
      },
      error: err => {
        this.message = 'Error en el registro';
      }
    });
  }
}
