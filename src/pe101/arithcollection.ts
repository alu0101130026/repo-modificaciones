import { Arithmeticable } from "./arithmeticable";

/**
 * Clase que define las colecciones de elementos, con métodos para añadir un elemento,
 * obtenerlo o saber el tamaño de la colección
 */
export class ArithmeticableCollection<T extends Arithmeticable<T>> {
  private elements: T[] = [];

  addArithmeticable(element: T): void {
    this.elements.push(element);
  }

  getArithmeticable(index: number): T {
    return this.elements[index];
  }

  getNumberOfArithmeticables(): number {
    return this.elements.length;
  }
}
