import { expect } from "chai";
import "mocha";
import { Arithmeticable } from "../src/pe101/arithmeticable";
import { ArithmeticableCollection } from "../src/pe101/arithcollection";
import { Complex } from "../src/pe101/complex";
import { Rational } from "../src/pe101/rational";

describe("Complex", () => {
  it("should perform addition correctly", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    const result = c1.add(c2);
    expect(result).to.deep.equal(new Complex(4, 6));
  });
});

describe("Complex", () => {
  it("should perform substraction correctly", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    const result = c1.subtract(c2);
    expect(result).to.deep.equal(new Complex(-2, -2));
  });
});

describe("Complex", () => {
  it("should perform multiplication correctly", () => {
    const c1 = new Complex(1, 2);
    const c2 = new Complex(3, 4);
    const result = c1.multiply(c2);
    expect(result).to.deep.equal(new Complex(-5, 10));
  });
});

describe("Complex", () => {
  it("should perform division correctly", () => {
    const c1 = new Complex(3, 2);
    const c2 = new Complex(-1, 2);
    const result = c1.divide(c2);
    expect(result).to.deep.equal(new Complex(0.2, -1.6));
  });
});

describe("Rational", () => {
  it("should perform addition correctly", () => {
    const r1 = new Rational(1, 2);
    const r2 = new Rational(3, 4);
    const result = r1.add(r2);
    expect(result).to.deep.equal(new Rational(10, 8));
  });
});

describe("Rational", () => {
  it("should perform substraction correctly", () => {
    const r1 = new Rational(1, 2);
    const r2 = new Rational(3, 4);
    const result = r1.subtract(r2);
    expect(result).to.deep.equal(new Rational(-2, 8));
  });
});

describe("Rational", () => {
  it("should perform multiplication correctly", () => {
    const r1 = new Rational(1, 2);
    const r2 = new Rational(3, 4);
    const result = r1.multiply(r2);
    expect(result).to.deep.equal(new Rational(3, 8));
  });
});

describe("Rational", () => {
  it("should perform division correctly", () => {
    const r1 = new Rational(1, 2);
    const r2 = new Rational(3, 4);
    const result = r1.divide(r2);
    expect(result).to.deep.equal(new Rational(4, 6));
  });
});

describe("ArithmeticableCollection", () => {
  it("should add elements correctly", () => {
    const collection = new ArithmeticableCollection<Complex>();
    collection.addArithmeticable(new Complex(1, 2));
    collection.addArithmeticable(new Complex(3, 4));
    expect(collection.getNumberOfArithmeticables()).to.equal(2);
  });

  it("should get elements correctly", () => {
    const collection = new ArithmeticableCollection<Rational>();
    const r1 = new Rational(1, 2);
    const r2 = new Rational(3, 4);
    collection.addArithmeticable(r1);
    collection.addArithmeticable(r2);
    expect(collection.getArithmeticable(0)).to.deep.equal(r1);
    expect(collection.getArithmeticable(1)).to.deep.equal(r2);
  });
});
