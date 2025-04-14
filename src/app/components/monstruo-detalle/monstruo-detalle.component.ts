import { MonstruoService } from './../../services/monstruo.service';
import { Component } from '@angular/core';
import { Monstruo } from '../../models/Monstruo';

@Component({
  selector: 'app-monstruo-detalle',
  standalone: false,
  templateUrl: './monstruo-detalle.component.html',
  styleUrl: './monstruo-detalle.component.css'
})
export class MonstruoDetalleComponent {
  monstruos: Monstruo[] = [];
  monstruoSeleccionado: Monstruo | null = null;

  constructor(private MonstruoService: MonstruoService) {}

  ngOnInit(): void {
    this.cargarMonstruos();
  }

  cargarMonstruos(): void {
    this.MonstruoService.findAll().subscribe({
      next: (data) => this.monstruos = data,
      error: (err) => console.error('Error al cargar los monstruos:', err)
    });
  }

  mostrarDetalles(idMonstruo: number): void {
    this.MonstruoService.findById(idMonstruo).subscribe({
      next: (data) => this.monstruoSeleccionado = data,
      error: (err) => console.error('Error al obtener detalles del monstruo:', err)
    });
  }

  cerrarDetalles(): void {
    this.monstruoSeleccionado = null;
  }
}
