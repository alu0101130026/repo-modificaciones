import { expect } from "chai";
import "mocha";
import { Adapter } from "../src/semana7/adapter.js";
import { Complex } from "../src/semana7/complex.js";
import { Rational } from "../src/semana7/rational.js";

describe("Adapter", () => {
  it("should add two complex numbers", () => {
    const complex1 = new Adapter(2, 3);
    const complex2 = new Adapter(1, 4);
    const result = complex1.add(complex2);
    expect(result.getReal()).to.equal(3);
    expect(result.getImaginary()).to.equal(7);
  });

  it("should subtract two complex numbers", () => {
    const complex1 = new Adapter(5, 7);
    const complex2 = new Adapter(2, 3);
    const result = complex1.subtract(complex2);
    expect(result.getReal()).to.equal(3);
    expect(result.getImaginary()).to.equal(4);
  });

  it("should multiply two complex numbers", () => {
    const complex1 = new Adapter(2, 3);
    const complex2 = new Adapter(4, 5);
    const result = complex1.multiply(complex2);
    expect(result.getReal()).to.equal(-7);
    expect(result.getImaginary()).to.equal(22);
  });

  it("should divide two complex numbers", () => {
    const complex1 = new Adapter(3, 2);
    const complex2 = new Adapter(-1, 2);
    const result = complex1.divide(complex2);
    expect(result.getReal()).to.deep.equal(0.2);
    expect(result.getImaginary()).to.deep.equal(-1.6);
  });

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
      const result = c1.substract(c2);
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
});
