export class MonstruoMaterialDTO {
  id!: number;
  nombre!: string;
  probabilidad!: number;
  imagen!: string;
  nombreMonstruo!: string;

  // Si necesitas una referencia al monstruo relacionado
  idMonstruo?: number;
}
