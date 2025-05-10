import { Component } from '@angular/core';
import { MonstruoMaterialService } from '../../services/monstruo-material.service';

@Component({
  selector: 'app-monstruo-material-form',
  standalone: false,
  templateUrl: './monstruo-material-form.component.html',
  styleUrl: './monstruo-material-form.component.css'
})
export class MonstruoMaterialFormComponent {
  monstruoMaterial: any = {};

  constructor(private monstruoMaterialService: MonstruoMaterialService) {}

  crearMonstruoMaterial() {
    this.monstruoMaterialService.create(this.monstruoMaterial).subscribe(resp => {
      alert('Monstruo-Material creado');
      this.monstruoMaterial = {};
    });
  }

  actualizarMonstruoMaterial() {
    this.monstruoMaterialService.save( this.monstruoMaterial).subscribe(resp => {
      alert('Monstruo-Material actualizado');
      this.monstruoMaterial = {};
    });
  }

  eliminarMonstruoMaterial() {
    this.monstruoMaterialService.borrarId(this.monstruoMaterial.id).subscribe(resp => {
      alert('Monstruo-Material eliminado');
      this.monstruoMaterial = {};
    });
  }
}
