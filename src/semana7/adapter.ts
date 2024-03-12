import { Arithmeticable } from "./arithmeticable.js";
import { Complex } from "./complex.js";
import { Rational } from "./rational.js";

/**
 * Clase Adapter que sirve para operar con complejos y racionales
 */
export class Adapter extends Complex {
  private rational: Rational;

  constructor(real: number, imaginary: number) {
    super(real, imaginary);
  }

  add(other: Adapter): Adapter {
    return new Adapter(
      this.getReal() + other.getReal(),
      this.getImaginary() + other.getImaginary(),
    );
  }

  subtract(other: Adapter): Adapter {
    return new Adapter(
      this.getReal() - other.getReal(),
      this.getImaginary() - other.getImaginary(),
    );
  }

  multiply(other: Adapter): Adapter {
    return new Adapter(
      this.getReal() * other.getReal() -
        this.getImaginary() * other.getImaginary(),
      this.getReal() * other.getImaginary() +
        this.getImaginary() * other.getReal(),
    );
  }

  divide(other: Adapter): Adapter {
    const denominator = other.getReal() ** 2 + other.getImaginary() ** 2;
    return new Adapter(
      (this.getReal() * other.getReal() +
        this.getImaginary() * other.getImaginary()) /
        denominator,
      (this.getImaginary() * other.getReal() -
        this.getReal() * other.getImaginary()) /
        denominator,
    );
  }
}
