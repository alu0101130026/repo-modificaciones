import { expect } from "chai";
import "mocha";
import { Box } from "../src/ejercicio-1/box";
import { BoxManager } from "../src/ejercicio-1/boxmanager";
import { Enser } from "../src/ejercicio-1/enser";

describe("Caja", () => {
  let caja: Box<Enser>;

  beforeEach(() => {
    caja = new BoxManager();
  });

  it("debería añadir un enser a la caja", () => {
    caja.addEnser({ nombre: "Libro" });
    expect(caja.enseres.length).to.equal(1);
  });

  it("debería eliminar un enser de la caja", () => {
    caja.addEnser({ nombre: "Libro" });
    caja.removeEnser("Libro");
    expect(caja.enseres.length).to.equal(0);
  });

  it("debería listar los enseres de la caja", () => {
    caja.addEnser({ nombre: "Libro" });
    caja.addEnser({ nombre: "Ropa" });
    caja.addEnser({ nombre: "Platos" });
    caja.listEnseres();
  });

  it("debería buscar un enser en la caja", () => {
    caja.addEnser({ nombre: "Libro" });
    caja.addEnser({ nombre: "Ropa" });
    const enser = caja.searchEnser("Libro");
    expect(enser?.nombre).to.equal("Libro");
  });

  it("debería devolver undefined si no se encuentra un enser en la caja", () => {
    const enser = caja.searchEnser("Libro");
    expect(enser).to.be.undefined;
  });
});
