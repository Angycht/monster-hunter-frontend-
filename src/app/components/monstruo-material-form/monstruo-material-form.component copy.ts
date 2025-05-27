import { Component, OnInit } from '@angular/core';
import { MonstruoMaterialService } from '../../services/monstruo-material.service';
import { MonstruoService } from '../../services/monstruo.service';
import { MaterialService } from '../../services/material.service';
import { MonstruoMaterial } from '../../models/MonstruoMaterial';

@Component({
  selector: 'app-monstruo-material-form',
   standalone: false,
  templateUrl: './monstruo-material-form.component.html',
  styleUrl: './monstruo-material-form.component.css'
})
export class MonstruoMaterialFormComponent implements OnInit {
monstruoMaterial: MonstruoMaterial = { idMonstruo: 0, idMaterial: 0 };
  monstruos: any[] = [];
  materiales: any[] = [];

  constructor(
    private monstruoMaterialService: MonstruoMaterialService,
    private monstruoService: MonstruoService,
    private materialService: MaterialService
  ) {}

  ngOnInit() {
    this.monstruoService.findAll().subscribe(data => this.monstruos = data);
    this.materialService.findAll().subscribe(data => this.materiales = data);
  }

crearMonstruoMaterial() {
  if (!this.monstruoMaterial.idMonstruo || !this.monstruoMaterial.idMaterial) {
    alert('Selecciona monstruo y material');
    return;
  }
  this.monstruoMaterialService.create({
    idMonstruo: this.monstruoMaterial.idMonstruo,
    idMaterial: this.monstruoMaterial.idMaterial
  }).subscribe({
    next: () => {
      alert('¡Asociación creada!');
      this.monstruoMaterial = { idMonstruo: 0, idMaterial: 0 };
    },
    error: err => {
      alert('Error al asociar: ' + (err.error?.message || err.statusText));
    }
  });
}
  actualizarMonstruoMaterial() {
  if (
    !this.monstruoMaterial.id ||
    !this.monstruoMaterial.idMonstruo ||
    !this.monstruoMaterial.idMaterial
  ) {
    alert('Completa todos los campos');
    return;
  }
  this.monstruoMaterialService.save(this.monstruoMaterial).subscribe({
    next: () => {
      alert('¡Asociación actualizada!');
      this.monstruoMaterial = { idMonstruo: 0, idMaterial: 0 };
    },
    error: err => {
      alert('Error al actualizar: ' + (err.error?.message || err.statusText));
    }
  });
}

  eliminarMonstruoMaterial() {
  if (!this.monstruoMaterial.id) {
    alert('Indica el ID de la relación');
    return;
  }
  this.monstruoMaterialService.borrarId(this.monstruoMaterial.id).subscribe({
    next: () => {
      alert('¡Asociación eliminada!');
      this.monstruoMaterial = { idMonstruo: 0, idMaterial: 0 };
    },
    error: err => {
      alert('Error al eliminar: ' + (err.error?.message || err.statusText));
    }
  });
}
}
