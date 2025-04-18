import { CommonModule } from '@angular/common';
import { Habitat } from '../../models/Habitat';
import { HabitatService } from './../../services/habitat.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MonstruoDTO } from '../../models/MonstruoDTO';
import { MonstruoService } from '../../services/monstruo.service';

@Component({
  selector: 'app-habitat-detalle',
  standalone: false,
  templateUrl: './habitat-detalle.component.html',
  styleUrl: './habitat-detalle.component.css'
})
export class HabitatDetalleComponent implements OnInit {
  habitat: Habitat | null = null;
  cargando = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private habitatService: HabitatService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.cargarHabitat(id);
    } else {
      this.error = 'ID de hábitat no válido';
      this.cargando = false;
    }
  }

  cargarHabitat(id: number): void {
    this.habitatService.findById(id).subscribe({
      next: (data) => {
        this.habitat = data;
        this.cargando = false;
      },
      error: () => {
        this.error = 'Error al cargar el hábitat';
        this.cargando = false;
      }
    });
  }
}
