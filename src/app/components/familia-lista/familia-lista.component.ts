import { FamiliaService } from './../../services/familia.service';

import { Familia } from '../../models/Familia';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-familia-lista',
  standalone: false,
  templateUrl: './familia-lista.component.html',
  styleUrl: './familia-lista.component.css'
})
export class FamiliaListaComponent {
  familias: Familia[] = [];
  familiaSeleccionada: Familia | null = null;
  busqueda = '';

  constructor(private FamiliaService: FamiliaService) {}

  ngOnInit(): void {
    this.cargarFamilias();
  }
  cargarFamilias(): void {
    this.FamiliaService.findAll().subscribe({
      next: (data) => {
        console.log('Familias cargadas:', data);
        this.familias = data;
      },
      error: (err) => console.error('Error cargando familias:', err)
    });
  }

  buscarFamilias(): void {
    this.FamiliaService.empiezaPor(this.busqueda).subscribe({
      next: (data) => this.familias = data,
      error: (err) => console.error('Error en búsqueda:', err)
    });
  }

  verDetalles(id: number): void {
    console.log('ID recibido en verDetalles:', id); // <--- Agrega esto
    if (id === undefined || id === null) {
      console.error('ID de familia no válido:', id);
      return;
    }
    this.FamiliaService.findById(id).subscribe({
      next: (data) => this.familiaSeleccionada = data,
      error: (err) => console.error('Error obteniendo detalles:', err)
    });
  }
  eliminarFamilia(id: number): void {
    if(confirm('¿Estás seguro de eliminar esta familia?')) {
      this.FamiliaService.borrarId(id).subscribe({
        next: () => {
          this.familias = this.familias.filter(f => f.id!== id);
          this.familiaSeleccionada = null;
        },
        error: (err) => console.error('Error eliminando:', err)
      });
    }
  }
}
