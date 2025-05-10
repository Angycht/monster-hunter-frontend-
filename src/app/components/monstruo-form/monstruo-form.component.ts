import { MonstruoService } from './../../services/monstruo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monstruo-form',
  templateUrl: './monstruo-form.component.html',
  styleUrls: ['./monstruo-form.component.css']
})
export class MonstruoFormComponent {
  monstruo: any = {};

  constructor(private monstruoService: MonstruoService) {}

  crearMonstruo() {
    this.monstruoService.create(this.monstruo).subscribe(resp => {
      alert('Monstruo creado');
      this.monstruo = {};
    });
  }

  actualizarMonstruo() {
    this.monstruoService.save( this.monstruo).subscribe(resp => {
      alert('Monstruo actualizado');
      this.monstruo = {};
    });
  }

  eliminarMonstruo() {
    this.monstruoService.borrarId(this.monstruo.id).subscribe(resp => {
      alert('Monstruo eliminado');
      this.monstruo = {};
    });
  }
}
