import { MonstruoService } from './../../services/monstruo.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-monstruo-form',
  templateUrl: './monstruo-form.component.html',
  styleUrls: ['./monstruo-form.component.css']
})
export class MonstruoFormComponent implements OnInit {

  monstruoForm!: FormGroup;
  idMonstruo?: number;

  constructor(
    private fb: FormBuilder,
    private monstruoService: MonstruoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.monstruoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagen: ['', Validators.required],
      familia: ['']
    });

    this.idMonstruo = Number(this.route.snapshot.paramMap.get('id'));
    if (this.idMonstruo) {
      this.monstruoService.findById(this.idMonstruo).subscribe(
        monstruo => {
          this.monstruoForm.patchValue(monstruo);
        },
        error => console.error('Error al obtener el monstruo', error)
      );
    }
  }

  onSubmit(): void {
    if (this.monstruoForm.valid) {
      const monstruo = this.monstruoForm.value;
      if (this.idMonstruo) {
        this.monstruoService.save(monstruo).subscribe(
          () => this.router.navigate(['/monstruos']),
          error => console.error('Error al actualizar el monstruo', error)
        );
      } else {
        this.monstruoService.create(monstruo).subscribe(
          () => this.router.navigate(['/monstruos']),
          error => console.error('Error al crear el monstruo', error)
        );
      }
    }
  }
}
