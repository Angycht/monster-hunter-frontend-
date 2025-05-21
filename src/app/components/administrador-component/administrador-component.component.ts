import { Component, OnInit } from '@angular/core';
import { FamiliaFormComponent } from '../familia-form/familia-form.component';
import { HabitatFormComponent } from '../habitat-form/habitat-form.component';
import { MaterialFormComponent } from '../material-form/material-form.component';
import { MonstruoFormComponent } from '../monstruo-form/monstruo-form.component';
import { MonstruoHabitatFormComponent } from '../monstruo-habitat-form/monstruo-habitat-form.component';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MonstruoMaterialFormComponent } from '../monstruo-material-form/monstruo-material-form.component copy';

@Component({
  selector: 'app-administrador-component',
  standalone:false,
  templateUrl: './administrador-component.component.html',
  styleUrl: './administrador-component.component.css'
})
export class AdministradorComponentComponent implements OnInit {
  entidades = [
    { label: 'Familia', component: FamiliaFormComponent },
    { label: 'Habitat', component: HabitatFormComponent },
    { label: 'Material', component: MaterialFormComponent },
    { label: 'Monstruo', component: MonstruoFormComponent },
    { label: 'MonstruoHabitat', component: MonstruoHabitatFormComponent },
    { label: 'MonstruoMaterial', component: MonstruoMaterialFormComponent }
  ];

  entidadSeleccionada: any = null;

  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    if (!this.authService.isAdmin()) {
      this.router.navigate(['/acceso-denegado']);
    }
  }

  get componenteEntidad() {
    return this.entidadSeleccionada ? this.entidadSeleccionada.component : null;
  }
}
