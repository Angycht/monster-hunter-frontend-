import { Component, OnInit } from '@angular/core';
import { MonstruoMaterialService } from '../../services/monstruo-material.service';
import { MonstruoService } from '../../services/monstruo.service';
import { MaterialService } from '../../services/material.service';

@Component({
  selector: 'app-monstruo-material-form',
   standalone: false,
  templateUrl: './monstruo-material-form.component.html',
  styleUrl: './monstruo-material-form.component.css'
})
export class MonstruoMaterialFormComponent implements OnInit {
  monstruoMaterial: any = {};
  monstruos: any[] = [];
  materiales: any[] = [];

  constructor(
    private monstruoMaterialService: MonstruoMaterialService,
    private monstruoService: MonstruoService,
    private materialService: MaterialService
  ) {}

  ngOnInit() {
    this.monstruoService.findAll().subscribe(data => this.monstruos = data);
    this.materialService.findAll().subscribe(data => this.materiales = data);
  }

  crearMonstruoMaterial() {
    this.monstruoMaterialService.create(this.monstruoMaterial).subscribe(resp => {
      alert('Monstruo-Material creado');
      this.monstruoMaterial = {};
    });
  }
  actualizarMonstruoMaterial() {
    this.monstruoMaterialService.save( this.monstruoMaterial).subscribe(resp => {
      alert('Monstruo-Material actualizado');
      this.monstruoMaterial = {};
    });
  }

  eliminarMonstruoMaterial() {
    this.monstruoMaterialService.borrarId(this.monstruoMaterial.id).subscribe(resp => {
      alert('Monstruo-Material eliminado');
      this.monstruoMaterial = {};
    });
  }
}
