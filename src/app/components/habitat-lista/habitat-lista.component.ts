import { Habitat } from '../../models/Habitat';
import { HabitatService } from './../../services/habitat.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-habitat-lista',
  standalone: false,
  templateUrl: './habitat-lista.component.html',
  styleUrl: './habitat-lista.component.css'
})
export class HabitatListaComponent {
  habitats: Habitat[] = [];
  habitatSeleccionado: Habitat | null = null;
  busqueda = '';

  constructor(private HabitatService: HabitatService) {}

  ngOnInit(): void {
    this.cargarHabitats();
  }

  cargarHabitats(): void {
    this.HabitatService.findAll().subscribe({
      next: (data) => this.habitats = data,

      error: (err) => console.error('Error cargando hábitats:', err)
      
    });
  }

  buscarHabitats(): void {
    this.HabitatService.empiezaPor(this.busqueda).subscribe({
      next: (data) => this.habitats = data,
      error: (err) => console.error('Error en búsqueda:', err)
    });
  }
  verDetalles(idHabitat: any) {
    const id = Number(idHabitat);
    if (isNaN(id)) {
      console.error('ID no es un número válido:', idHabitat);
      return;
    }
    this.HabitatService.findById(id).subscribe({
      next: data => this.habitatSeleccionado = data,
      error: err => console.error('Error obteniendo detalles:', err)
    });
  }

  eliminarHabitat(id: number): void {
    if(confirm('¿Estás seguro de eliminar este hábitat?')) {
      this.HabitatService.borrarId(id).subscribe({
        next: () => {
          this.habitats = this.habitats.filter(h => h.idHabitat !== id);
          this.habitatSeleccionado = null;
        },
        error: (err) => console.error('Error eliminando:', err)
      });
    }
  }
}
