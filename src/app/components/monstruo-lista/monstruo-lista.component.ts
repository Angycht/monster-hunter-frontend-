import { Component, OnInit } from '@angular/core';
import { MonstruoService } from '../../services/monstruo.service';
import { Monstruo } from '../../models/Monstruo';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { MonstruoDTO } from '../../models/MonstruoDTO';

@Component({
  selector: 'app-monstruo-lista',
  imports: [CommonModule,RouterLink],
  standalone: true,
  templateUrl: './monstruo-lista.component.html',
  styleUrls: ['./monstruo-lista.component.css']
})
export class MonstruoListaComponent implements OnInit {
  monstruos: Monstruo[] = [];
  monstruoSeleccionado: MonstruoDTO | null = null;

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

  mostrarDetalles(idMonstruo: string | number) {
    console.log('ID recibido:', idMonstruo);
    const id = Number(idMonstruo);
    if (isNaN(id)) {
      console.error('ID no es un número válido:', idMonstruo);
      return;
    }
    this.MonstruoService.findById(id).subscribe({
      next: (data) => this.monstruoSeleccionado = data,
      error: (err) => console.error('Error obteniendo detalles:', err)
    });
  }

  cerrarDetalles(): void {
    this.monstruoSeleccionado = null;
  }
}
