import { Format } from "./format";
import { Bill } from "./bill";

/**
 * Clase de las facturas en HTML, implementa Format
 */
export class HTMLBill implements Format {
  generarFactura(factura: Bill): string {
    const contenido = `<h1>Factura en formato HTML:</h1><ul>${factura
      .obtenerItems()
      .map((item) => `<li>${item}</li>`)
      .join("")}</ul>`;
    return contenido;
  }
}
