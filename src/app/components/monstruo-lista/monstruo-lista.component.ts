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

  constructor(private monstruoService: MonstruoService) { }

  ngOnInit(): void {
    this.getMonstruos();
  }

  getMonstruos(): void {
    this.monstruoService.findAll().subscribe(
      monstruos => this.monstruos = monstruos,
      error => console.error('Error al obtener los monstruos', error)
    );
  }

  deleteMonstruo(id: number): void {
    this.monstruoService.borrarId(id).subscribe(
      () => {
        this.monstruos = this.monstruos.filter(monstruo => monstruo.idMonstruo !== id);
      },
      error => console.error('Error al eliminar el monstruo', error)
    );
  }
}
