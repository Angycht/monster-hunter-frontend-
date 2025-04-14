import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MonstruoListaComponent } from './components/monstruo-lista/monstruo-lista.component';
import { MonstruoDetalleComponent } from './components/monstruo-detalle/monstruo-detalle.component';
import { MonstruoFormComponent } from './components/monstruo-form/monstruo-form.component';
import { HabitatListaComponent } from './components/habitat-lista/habitat-lista.component';
import { FamiliaListaComponent } from './components/familia-lista/familia-lista.component';

const routes: Routes = [


  { path: 'monstruos', component: MonstruoListaComponent },
  { path: 'monstruos/:id', component: MonstruoListaComponent },
  { path: 'monstruos/nuevo', component: MonstruoFormComponent },
  { path: 'monstruos/editar/:id', component: MonstruoFormComponent },
  { path: '', redirectTo: '/monstruos', pathMatch: 'full' },
  { path: 'habitats', component: HabitatListaComponent },
  { path: 'familias', component: FamiliaListaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
