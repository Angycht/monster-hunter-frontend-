import { Component } from '@angular/core';
import { FamiliaService } from '../../services/familia.service';

@Component({
  selector: 'app-familia-form',
  standalone:false,
  templateUrl: './familia-form.component.html',
  styleUrl: './familia-form.component.css'
})
export class FamiliaFormComponent {
  familia: any = {};

  constructor(private familiaService: FamiliaService) {}

  crearFamilia() {
    this.familiaService.create(this.familia).subscribe(resp => {
      alert('Familia creada');
      this.familia = {};
    });
  }

  actualizarFamilia() {
    this.familiaService.save( this.familia).subscribe(resp => {
      alert('Familia actualizada');
      this.familia = {};
    });
  }

  eliminarFamilia() {
    this.familiaService.borrarId(this.familia.id).subscribe(resp => {
      alert('Familia eliminada');
      this.familia = {};
    });
  }
}
