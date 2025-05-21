import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './auth.interceptor';
import { ProfileComponent } from './components/profile/profile.component';
import { AccesoDenegadoComponent } from './components/acceso-denegado/acceso-denegado.component';
import { AdministradorComponentComponent } from './components/administrador-component/administrador-component.component';
import { MonstruoFormComponent } from './components/monstruo-form/monstruo-form.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { FamiliaListaComponent } from './components/familia-lista/familia-lista.component';
import { FamiliaDetalleComponent } from './components/familia-detalle/familia-detalle.component';
import { FamiliaFormComponent } from './components/familia-form/familia-form.component';
import { HabitatListaComponent } from './components/habitat-lista/habitat-lista.component';
import { HabitatDetalleComponent } from './components/habitat-detalle/habitat-detalle.component';
import { HabitatFormComponent } from './components/habitat-form/habitat-form.component';
import { MaterialListaComponent } from './components/material-lista/material-lista.component';
import { MaterialDetalleComponent } from './components/material-detalle/material-detalle.component';
import { MaterialFormComponent } from './components/material-form/material-form.component';
import { MonstruoHabitatListaComponent } from './components/monstruo-habitat-lista/monstruo-habitat-lista.component';
import { MonstruoHabitatFormComponent } from './components/monstruo-habitat-form/monstruo-habitat-form.component';
import { MonstruoMaterialListaComponent } from './components/monstruo-material-lista/monstruo-material-lista.component';
import { UsuarioListaComponent } from './components/usuario-lista/usuario-lista.component';
import { UsuarioDetalleComponent } from './components/usuario-detalle/usuario-detalle.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { RolListaComponent } from './components/rol-lista/rol-lista.component';
import { RolFormComponent } from './components/rol-form/rol-form.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { MonstruoMaterialFormComponent } from './components/monstruo-material-form/monstruo-material-form.component copy';
import { MonstruoListaComponent } from './components/monstruo-lista/monstruo-lista.component';

@NgModule({
  declarations: [
    AppComponent,
    FamiliaListaComponent,
    FamiliaDetalleComponent,
    FamiliaFormComponent,
    HabitatListaComponent,
    HabitatDetalleComponent,
    MaterialListaComponent,
    MaterialDetalleComponent,
    MaterialFormComponent,
    MonstruoHabitatListaComponent,
    MonstruoHabitatFormComponent,
    MonstruoMaterialListaComponent,
    UsuarioListaComponent,
    HabitatFormComponent,
    UsuarioDetalleComponent,
    UsuarioFormComponent,
    RolListaComponent,
    RolFormComponent,
    NavBarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    IndexComponent,
    ProfileComponent,
    AccesoDenegadoComponent,
    AdministradorComponentComponent,
    MonstruoFormComponent,
    MonstruoMaterialFormComponent,
    MonstruoHabitatFormComponent

  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MonstruoListaComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
