import { Arithmeticable } from "./arithmeticable";

/**
 * Clase que trata los números complejos que implementa la interfaz Arithmeticable
 */
export class Complex implements Arithmeticable<Complex> {
  constructor(
    private real: number,
    private imaginary: number,
  ) {}

  add(other: Complex): Complex {
    return new Complex(
      this.real + other.real,
      this.imaginary + other.imaginary,
    );
  }

  subtract(other: Complex): Complex {
    return new Complex(
      this.real - other.real,
      this.imaginary - other.imaginary,
    );
  }

  multiply(other: Complex): Complex {
    return new Complex(
      this.real * other.real - this.imaginary * other.imaginary,
      this.real * other.imaginary + this.imaginary * other.real,
    );
  }

  divide(other: Complex): Complex {
    const denominator = other.real ** 2 + other.imaginary ** 2;
    return new Complex(
      (this.real * other.real + this.imaginary * other.imaginary) / denominator,
      (this.imaginary * other.real - this.real * other.imaginary) / denominator,
    );
  }
}
