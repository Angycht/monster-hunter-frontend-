import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonstruoListaComponent } from './components/monstruo-lista/monstruo-lista.component';
import { MonstruoDetalleComponent } from './components/monstruo-detalle/monstruo-detalle.component';
import { MonstruoFormComponent } from './components/monstruo-form/monstruo-form.component';
import { HabitatListaComponent } from './components/habitat-lista/habitat-lista.component';
import { FamiliaListaComponent } from './components/familia-lista/familia-lista.component';
import { HabitatDetalleComponent } from './components/habitat-detalle/habitat-detalle.component';
import { FamiliaDetalleComponent } from './components/familia-detalle/familia-detalle.component';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './guard/Auth.guard';
import { AdministradorComponentComponent } from './components/administrador-component/administrador-component.component';
import { AccesoDenegadoComponent } from './components/acceso-denegado/acceso-denegado.component';

const routes: Routes = [


  { path: 'monstruos', component: MonstruoListaComponent },
  { path: 'monstruos/:id', component: MonstruoDetalleComponent },
  { path: 'monstruos/nuevo', component: MonstruoFormComponent },
  { path: 'monstruos/editar/:id', component: MonstruoFormComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: IndexComponent },
  { path: 'habitats', component: HabitatListaComponent },
  { path: 'habitats/:id', component: HabitatDetalleComponent },
  { path: 'familias/:id', component: FamiliaDetalleComponent },
  { path: 'familias', component: FamiliaListaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin',
    component: AdministradorComponentComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'acceso-denegado',
    component: AccesoDenegadoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
