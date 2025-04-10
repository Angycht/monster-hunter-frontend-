import { MonstruoHabitat } from "./MonstruoHabitat";
import { MonstruoMaterial } from "./MonstruoMaterial";

export class MonstruoDTO {
  id!: number;
  nombre!: string;
  descripcion!: string;
  partesRompibles!: string;
  imagen!: string;
  familia!: string;

  monstruoHabitats?: MonstruoHabitat[];
  monstruoMateriales?: MonstruoMaterial[];
}
