import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MonstruoService } from './../../services/monstruo.service';
import { Monstruo } from '../../models/Monstruo';
import { MonstruoDTO } from '../../models/MonstruoDTO';
import { CommonModule } from '@angular/common';
import { MonstruoMaterialDTO } from '../../models/MonstruoMaterialDTO';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-monstruo-detalle',
  standalone: true,
  imports: [RouterLink,CommonModule,FormsModule],

  templateUrl: './monstruo-detalle.component.html',
  styleUrls: ['./monstruo-detalle.component.css']
})
export class MonstruoDetalleComponent implements OnInit {
  monstruo: MonstruoDTO | null = null;
  cargando = true;
  error: string | null = null;
  materiales: MonstruoMaterialDTO[] = [];
  simulando = false;
  constructor(
    private route: ActivatedRoute,
    private monstruoService: MonstruoService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.cargarMonstruo(id);
    } else {
      this.error = 'ID de monstruo no válido';
      this.cargando = false;
    }
  }

  cargarMonstruo(id: number): void {
    this.monstruoService.findById(id).subscribe({
      next: (data) => {
        console.log('MonstruoDTO recibido:', data);
        this.monstruo = data;
        this.cargando = false;
      },
      error: () => {
        this.error = 'No se pudo cargar el monstruo';
        this.cargando = false;
      }
    });
  }

  simularCombate() {
    if (!this.monstruo?.id) {
      this.error = 'Introduce un ID de monstruo';
      return;
    }
    this.simulando = true;
    this.error = null;
    this.materiales = [];
    this.monstruoService.simularCombate(this.monstruo.id).subscribe({
      next: (data) => {
        this.materiales = data || [];
        this.simulando = false;
      },
      error: (err) => {
          console.error('Error en simularCombate:', err);
          if (err.status === 403) {
            this.error = "No tienes permisos para simular el combate.";
          } else if (err.status === 0) {
            this.error = "No se pudo conectar con el servidor. ¿Está corriendo el backend?";
          } else if (err.status === 404) {
            this.error = "El monstruo no existe o la ruta es incorrecta.";
          } else if (err.status === 500) {
            this.error = "Error interno del servidor.";
          } else {
            this.error = `Error al simular combate. Código: ${err.status}`;
          }
          this.simulando = false;
        }

    });
  }
}
