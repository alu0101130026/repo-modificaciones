[![Coverage Status](https://coveralls.io/repos/github/alu0101130026/repo-modificaciones/badge.svg?branch=main)](https://coveralls.io/github/alu0101130026/repo-modificaciones?branch=main)

[![Tests](https://github.com/alu0101130026/repo-modificaciones/actions/workflows/node.js.yml/badge.svg?branch=main)](https://github.com/alu0101130026/repo-modificaciones/actions/workflows/node.js.yml)

### Ejercicio semana 7

El ejercicio de esta semana consta de escribir un adaptador que opere los racionales y los complejos.

export class Adapter implements Arithmeticable<Rational> {
private complex: Complex;

constructor(complex: Complex) {
this.complex = complex;
}

add(other: Rational): Rational {
const converted = this.toRational1();
return converted.add(other);
}

substract(other: Rational): Rational {
const converted = this.toRational1();
return converted.substract(other);
}

multiply(other: Rational): Rational {
const converted = this.toRational2();
return converted.multiply(other);
}

divide(other: Rational): Rational {
const converted = this.toRational2();
return converted.divide(other);
}

private toRational1(): Rational {
const real = Math.round(this.complex.getReal());
return new Rational(real, 1);
}

private toRational2(): Rational {
const real = Math.round(this.complex.getReal());
const imaginary = Math.round(this.complex.getImaginary());
return new Rational(real, imaginary);
}
}
