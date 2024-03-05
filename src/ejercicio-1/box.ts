import { Enser } from "./enser";

/**
 * Interfaz de la caja que contiene los enseres y los métodos
 */
export interface Box<T extends Enser> {
  enseres: T[];
  addEnser(enser: T): void;
  removeEnser(nombre: string): void;
  listEnseres(): void;
  searchEnser(nombre: string): T | undefined;
}
