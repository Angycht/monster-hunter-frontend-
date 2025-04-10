export class MonstruoHabitatDTO {
  id!: number;
  nombre!: string;
  descripcion!: string;
  imagen!: string;

  // Si necesitas una referencia al monstruo relacionado
  idMonstruo?: number;
}
