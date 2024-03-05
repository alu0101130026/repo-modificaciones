import { expect } from "chai";
import "mocha";
import { Bill } from "../src/ejercicio-2/bill";
import { Format } from "../src/ejercicio-2/format";
import { PDFBill } from "../src/ejercicio-2/pdfbill";
import { HTMLBill } from "../src/ejercicio-2/htmlbill";

describe("Bill", () => {
  it("debería agregar y obtener items correctamente", () => {
    const factura = new Bill();
    factura.agregarItem("Producto 1");
    factura.agregarItem("Producto 2");
    expect(factura.obtenerItems()).to.deep.equal(["Producto 1", "Producto 2"]);
  });
});

describe("PDFBill", () => {
  it("debería generar una factura en formato PDF correctamente", () => {
    const factura = new Bill();
    factura.agregarItem("Producto 1");
    factura.agregarItem("Producto 2");
    const pdfFactura = new PDFBill();
    const facturaPDF = pdfFactura.generarFactura(factura);
    expect(facturaPDF).to.contain("Factura en formato PDF:");
    expect(facturaPDF).to.contain("Producto 1");
    expect(facturaPDF).to.contain("Producto 2");
  });
});

describe("HTMLBill", () => {
  it("debería generar una factura en formato HTML correctamente", () => {
    const factura = new Bill();
    factura.agregarItem("Producto 1");
    factura.agregarItem("Producto 2");
    const htmlFactura = new HTMLBill();
    const facturaHTML = htmlFactura.generarFactura(factura);
    expect(facturaHTML).to.contain("<h1>Factura en formato HTML:</h1>");
    expect(facturaHTML).to.contain("<li>Producto 1</li>");
    expect(facturaHTML).to.contain("<li>Producto 2</li>");
  });
});
