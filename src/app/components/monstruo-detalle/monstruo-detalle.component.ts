import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MonstruoService } from './../../services/monstruo.service';
import { Monstruo } from '../../models/Monstruo';
import { MonstruoDTO } from '../../models/MonstruoDTO';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-monstruo-detalle',
  standalone: true,
  imports: [RouterLink,CommonModule],

  templateUrl: './monstruo-detalle.component.html',
  styleUrls: ['./monstruo-detalle.component.css']
})
export class MonstruoDetalleComponent implements OnInit {
  monstruo: MonstruoDTO | null = null;
  cargando = true;
  error: string | null = null;

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
}
