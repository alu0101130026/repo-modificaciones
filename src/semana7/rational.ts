import { Arithmeticable } from "./arithmeticable.js";

/**
 * Clase que trata los números racionales que implementa la interfaz Arithmeticable
 */
export class Rational implements Arithmeticable<Rational> {
  constructor(
    private numerator: number,
    private denominator: number,
  ) {}

  getNumerator() {
    return this.numerator;
  }

  getDenominator() {
    return this.denominator;
  }

  getRational() {
    return this.numerator / this.denominator;
  }

  add(other: Rational): Rational {
    const commonDenominator = this.denominator * other.denominator;
    const newNumerator =
      this.numerator * other.denominator + other.numerator * this.denominator;
    return new Rational(newNumerator, commonDenominator);
  }

  substract(other: Rational): Rational {
    const commonDenominator = this.denominator * other.denominator;
    const newNumerator =
      this.numerator * other.denominator - other.numerator * this.denominator;
    return new Rational(newNumerator, commonDenominator);
  }

  multiply(other: Rational): Rational {
    return new Rational(
      this.numerator * other.numerator,
      this.denominator * other.denominator,
    );
  }

  divide(other: Rational): Rational {
    return new Rational(
      this.numerator * other.denominator,
      this.denominator * other.numerator,
    );
  }
}
