import { MonstruoHabitat } from "./MonstruoHabitat";
import { MonstruoMaterial } from "./MonstruoMaterial";
import { MonstruoMaterialDTO } from "./MonstruoMaterialDTO";

export class MonstruoDTO {
  id!: number;
  nombre!: string;
  descripcion!: string;
  partesRompibles!: string;
  imagen!: string;
  familia!: string;

  monstruoHabitats?: MonstruoHabitat[];
  monstruoMaterialDto?: MonstruoMaterialDTO[];
}
