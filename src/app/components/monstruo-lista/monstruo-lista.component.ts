import { Component, OnInit } from '@angular/core';
import { MonstruoService } from '../../services/monstruo.service';
import { Monstruo } from '../../models/Monstruo';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monstruo-lista',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './monstruo-lista.component.html',
  styleUrls: ['./monstruo-lista.component.css']
})
export class MonstruoListaComponent implements OnInit {
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

  mostrarDetalles(idMonstruo: string | number) {
    // Convertir a número si es string
    const id = Number(idMonstruo);

    if (isNaN(id)) {
      console.error('ID no es un número válido:', idMonstruo);
      return;
    }

    this.MonstruoService.findById(id).subscribe({
      next: (data) => { /* ... */ },
      error: (err) => { /* ... */ }
    });
  }

  cerrarDetalles(): void {
    this.monstruoSeleccionado = null;
  }
}
