import { Component } from '@angular/core';
import { FamiliaDetalleDTO } from '../../models/FamiliaDetalleDTO';
import { ActivatedRoute } from '@angular/router';
import { FamiliaService } from '../../services/familia.service';

@Component({
  selector: 'app-familia-detalle',
  standalone: false,
  templateUrl: './familia-detalle.component.html',
  styleUrl: './familia-detalle.component.css'
})
export class FamiliaDetalleComponent {
  familia: FamiliaDetalleDTO | null = null;
  cargando = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private familiaService: FamiliaService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id)) {
      this.familiaService.getFamiliaDetalle(id).subscribe({
        next: (data) => {
          this.familia = data;
          this.cargando = false;
        },
        error: () => {
          this.error = 'No se pudo cargar la familia';
          this.cargando = false;
        }
      });
    } else {
      this.error = 'ID de familia no válido';
      this.cargando = false;
    }
  }
}
