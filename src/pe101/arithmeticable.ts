/**
 * Interfaz genérica que define los métodos de las operaciones
 */
export interface Arithmeticable<T> {
  add(other: T): T;
  subtract(other: T): T;
  multiply(other: T): T;
  divide(other: T): T;
}
