import { Component } from '@angular/core';
import { MonstruoHabitatService } from '../../services/monstruo-habitat.service';

@Component({
  selector: 'app-monstruo-habitat-form',
  standalone: false,
  templateUrl: './monstruo-habitat-form.component.html',
  styleUrl: './monstruo-habitat-form.component.css'
})
export class MonstruoHabitatFormComponent {
  monstruoHabitat: any = {};

  constructor(private monstruoHabitatService: MonstruoHabitatService) {}

  crearMonstruoHabitat() {
    this.monstruoHabitatService.create(this.monstruoHabitat).subscribe(resp => {
      alert('Monstruo-Hábitat creado');
      this.monstruoHabitat = {};
    });
  }

  actualizarMonstruoHabitat() {
    this.monstruoHabitatService.save( this.monstruoHabitat).subscribe(resp => {
      alert('Monstruo-Hábitat actualizado');
      this.monstruoHabitat = {};
    });
  }

  eliminarMonstruoHabitat() {
    this.monstruoHabitatService.borrarId(this.monstruoHabitat.id).subscribe(resp => {
      alert('Monstruo-Hábitat eliminado');
      this.monstruoHabitat = {};
    });
  }
}
