import { MonstruoService } from './../../services/monstruo.service';
import { Component } from '@angular/core';
import { MonstruoMaterialDTO } from '../../models/MonstruoMaterialDTO';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-simulador',
  standalone: false,
  templateUrl: './simulador.component.html',
  styleUrl: './simulador.component.css'
})
export class SimuladorComponent {
  idMonstruo: number | null = null;
  materiales: MonstruoMaterialDTO[] = [];
  error: string | null = null;
  simulando = false;

  constructor(private MonstruoService: MonstruoService) {}

  simularCombate() {
    if (!this.idMonstruo) {
      this.error = 'Introduce un ID de monstruo';
      return;
    }
    this.simulando = true;
    this.error = null;
    this.materiales = [];
    this.MonstruoService.simularCombate(this.idMonstruo).subscribe({
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
