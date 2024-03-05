import { Enser } from "./enser";
import { Box } from "./box";

/**
 * Clase que maneja la caja con la definición de sus métodos
 */
export class BoxManager<T extends Enser> implements Box<T> {
  enseres: T[];

  /**
   * Constructor
   */
  constructor() {
    this.enseres = [];
  }

  /**
   *
   * @param enser Enser a añadir
   */
  addEnser(enser: T): void {
    this.enseres.push(enser);
  }

  /**
   *
   * @param nombre Enser a quitar
   */
  removeEnser(nombre: string): void {
    this.enseres = this.enseres.filter((enser) => enser.nombre !== nombre);
  }

  /**
   * Lista los enseres de la caja
   */
  listEnseres(): void {
    console.log("Enseres en la caja:");
    this.enseres.forEach((enser) => console.log(enser.nombre));
  }

  /**
   *
   * @param nombre Nombre del enser
   * @returns El nombre encontrado si es que está
   */
  searchEnser(nombre: string): T | undefined {
    return this.enseres.find((enser) => enser.nombre === nombre);
  }
}
