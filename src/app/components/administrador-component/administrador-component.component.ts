import { AuthService } from './../../services/auth.service';
import { FamiliaFormComponent } from '../familia-form/familia-form.component';
import { HabitatFormComponent } from '../habitat-form/habitat-form.component';
import { MaterialFormComponent } from '../material-form/material-form.component';
import { MonstruoFormComponent } from '../monstruo-form/monstruo-form.component';
import { MonstruoHabitatFormComponent } from '../monstruo-habitat-form/monstruo-habitat-form.component';
import { MonstruoMaterialFormComponent } from '../monstruo-material-form/monstruo-material-form.component';
import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administrador-component',
  standalone: false,
  templateUrl: './administrador-component.component.html',
  styleUrls: ['./administrador-component.component.css']
})
export class AdministradorComponentComponent implements OnInit {
  verbos = ['POST', 'PUT', 'DELETE'];
  entidades = [
    { label: 'Familia', component: FamiliaFormComponent },
    { label: 'Habitat', component: HabitatFormComponent },
    { label: 'Material', component: MaterialFormComponent },
    { label: 'Monstruo', component: MonstruoFormComponent },
    { label: 'MonstruoHabitat', component: MonstruoHabitatFormComponent },
    { label: 'MonstruoMaterial', component: MonstruoMaterialFormComponent }
  ];

  verboSeleccionado: string = '';
  entidadSeleccionada: any = null;

  constructor(
    public authService: AuthService,
    private router: Router,
    private injector: Injector
  ) {}

  ngOnInit() {
    if (!this.authService.isAdmin()) {
      this.router.navigate(['/acceso-denegado']);
    }
  }

  get componenteEntidad() {
    return this.entidadSeleccionada ? this.entidadSeleccionada.component : null;
  }
  createInjector() {
    if (!this.componenteEntidad) return this.injector;
    return Injector.create({
      providers: [
        { provide: 'verbo', useValue: this.verboSeleccionado }
      ],
      parent: this.injector
    });
}
}
