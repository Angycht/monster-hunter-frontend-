import { Familia } from './../../models/Familia';
import { Monstruo } from '../../models/Monstruo';
import { FamiliaService } from '../../services/familia.service';
import { MonstruoService } from './../../services/monstruo.service';
import { Component, OnInit } from '@angular/core';
import { MonstruoDTO } from '../../models/MonstruoDTO';

@Component({
  selector: 'app-monstruo-form',
  standalone: false,
  templateUrl: './monstruo-form.component.html',
  styleUrls: ['./monstruo-form.component.css'],
})
export class MonstruoFormComponent implements OnInit {
  nuevoMonstruo: Monstruo= {
    id: 0,
    nombre: '',
    descripcion: '',
    imagen: '',
    partesRompibles: '',
     familiaId:0
  };
  monstruoAEditar: Monstruo= {
    id: 0,
    nombre: '',
    descripcion: '',
    imagen: '',
    partesRompibles: '',
    familiaId:0
  };
  monstruoAEliminar: Monstruo= {
    id: 0,
    nombre: '',
    descripcion: '',
    imagen: '',
    partesRompibles: '',
     familiaId:0
  };

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
    console.log(this.nuevoMonstruo);
    this.monstruoService.create(this.nuevoMonstruo).subscribe((resp) => {
      alert('Monstruo creado');
    });
  }

  actualizarMonstruo() {
    this.monstruoService.save(this.monstruoAEditar).subscribe((resp) => {
      alert('Monstruo actualizado');
    });
  }

  eliminarMonstruo() {
    this.monstruoService.borrarId(this.monstruoAEliminar.id).subscribe((resp) => {
      alert('Monstruo eliminado');
    });
  }
}
