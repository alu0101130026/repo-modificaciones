import { Arithmeticable } from "./arithmeticable";
import { Complex } from "./complex";
import { Rational } from "./rational";
import { ArithmeticableCollection } from "./arithcollection";

/**
 * Vamos a crear algunas instancias de ArithmeticableCollection
 */

const complexCollection = new ArithmeticableCollection<Complex>();
complexCollection.addArithmeticable(new Complex(1, 2));
complexCollection.addArithmeticable(new Complex(3, 4));
console.log(complexCollection.getNumberOfArithmeticables());

const rationalCollection = new ArithmeticableCollection<Rational>();
rationalCollection.addArithmeticable(new Rational(1, 2));
rationalCollection.addArithmeticable(new Rational(3, 4));
console.log(
  rationalCollection
    .getArithmeticable(0)
    .add(rationalCollection.getArithmeticable(1)),
);
