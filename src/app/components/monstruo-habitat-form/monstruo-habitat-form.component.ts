import { Component, OnInit } from '@angular/core';
import { MonstruoHabitatService } from '../../services/monstruo-habitat.service';
import { MonstruoService } from '../../services/monstruo.service';
import { HabitatService } from '../../services/habitat.service';

@Component({
  selector: 'app-monstruo-habitat-form',
  standalone: false,
  templateUrl: './monstruo-habitat-form.component.html',
  styleUrl: './monstruo-habitat-form.component.css'
})
export class MonstruoHabitatFormComponent implements OnInit {
  monstruoHabitat: any = {};
  monstruos: any[] = [];
  habitats: any[] = [];

  constructor(
    private monstruoHabitatService: MonstruoHabitatService,
    private monstruoService: MonstruoService,
    private habitatService: HabitatService
  ) {}

  ngOnInit() {
    this.monstruoService.findAll().subscribe(data => this.monstruos = data);
    this.habitatService.findAll().subscribe(data => this.habitats = data);
  }

  crearMonstruoHabitat() {
    if (!this.monstruoHabitat.idMonstruo || !this.monstruoHabitat.idHabitat) {
    alert('Debes seleccionar un monstruo y un hábitat');
    return;
  }
  this.monstruoHabitatService.create(this.monstruoHabitat).subscribe({
    next: resp => {
      alert('Monstruo-Hábitat creado');
      this.monstruoHabitat = { idMonstruo: null, idHabitat: null };
    },
    error: err => {
      alert('Error al asociar: ' + (err.error?.message || err.statusText || err.message));
    }
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
