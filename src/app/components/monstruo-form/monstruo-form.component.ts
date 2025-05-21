import { FamiliaService } from '../../services/familia.service';
import { MonstruoService } from './../../services/monstruo.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-monstruo-form',
  standalone: false,
  templateUrl: './monstruo-form.component.html',
  styleUrls: ['./monstruo-form.component.css'],
})
export class MonstruoFormComponent implements OnInit {
  monstruo: any = {};
  familias: any[] = [];

  constructor(
    private monstruoService: MonstruoService,
    private familiaService: FamiliaService
  ) {}

  ngOnInit() {
    this.familiaService
      .findAll()
      .subscribe((familias) => (this.familias = familias));
  }

  crearMonstruo() {
  console.log(this.monstruo); // <-- Aquí debe aparecer
  this.monstruoService.create(this.monstruo).subscribe(resp => {
    alert('Monstruo creado');
    this.monstruo = {};
  });
}

  actualizarMonstruo() {
    this.monstruoService.save(this.monstruo).subscribe((resp) => {
      alert('Monstruo actualizado');
      this.monstruo = {};
    });
  }

  eliminarMonstruo() {
    this.monstruoService.borrarId(this.monstruo.id).subscribe((resp) => {
      alert('Monstruo eliminado');
      this.monstruo = {};
    });
  }
}
