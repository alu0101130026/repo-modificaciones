import { Arithmeticable } from "./arithmeticable";

/**
 * Clase que trata los números racionales que implementa la interfaz Arithmeticable
 */
export class Rational implements Arithmeticable<Rational> {
  constructor(
    private numerator: number,
    private denominator: number,
  ) {}

  add(other: Rational): Rational {
    const commonDenominator = this.denominator * other.denominator;
    const newNumerator =
      this.numerator * other.denominator + other.numerator * this.denominator;
    return new Rational(newNumerator, commonDenominator);
  }

  subtract(other: Rational): Rational {
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
