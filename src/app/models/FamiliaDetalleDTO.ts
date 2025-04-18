import { MonstruoDTO } from "./MonstruoDTO";

export interface FamiliaDetalleDTO {
  id: number;
  nombre: string;
  descripcion: string;
  imagen: string;
  monstruos: MonstruoDTO[];
}
