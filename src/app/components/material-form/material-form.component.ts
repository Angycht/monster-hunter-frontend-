import { Component } from '@angular/core';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-material-form',
  standalone: false,
  templateUrl: './material-form.component.html',
  styleUrl: './material-form.component.css'
})
export class MaterialFormComponent {
  material: any = {};

  constructor(private materialService: MaterialService) {}

  crearMaterial() {
    this.materialService.create(this.material).subscribe(resp => {
      alert('Material creado');
      this.material = {};
    });
  }

  actualizarMaterial() {
    this.materialService.save( this.material).subscribe(resp => {
      alert('Material actualizado');
      this.material = {};
    });
  }

  eliminarMaterial() {
    this.materialService.borrarId(this.material.id).subscribe(resp => {
      alert('Material eliminado');
      this.material = {};
    });
  }
}
