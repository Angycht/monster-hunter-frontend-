import { Component } from '@angular/core';
import { HabitatService } from '../../services/habitat.service';

@Component({
  selector: 'app-habitat-form',
  standalone:false,
  templateUrl: './habitat-form.component.html',
  styleUrl: './habitat-form.component.css'
})
export class HabitatFormComponent {
  habitat: any = {};

  constructor(private habitatService: HabitatService) {}

  crearHabitat() {
    this.habitatService.create(this.habitat).subscribe(resp => {
      alert('Hábitat creado');
      this.habitat = {};
    });
  }

  actualizarHabitat() {
    this.habitatService.save( this.habitat).subscribe(resp => {
      alert('Hábitat actualizado');
      this.habitat = {};
    });
  }

  eliminarHabitat() {
    this.habitatService.borrarId(this.habitat.id).subscribe(resp => {
      alert('Hábitat eliminado');
      this.habitat = {};
    });
  }
}
