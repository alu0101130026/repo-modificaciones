import { Format } from "./format";
import { Bill } from "./bill";

/**
 * Clase de las facturas en pdf, implementa Format
 */
export class PDFBill implements Format {
  generarFactura(factura: Bill): string {
    const content = `Factura en formato PDF:\n${factura.obtenerItems().join("\n")}`;
    return content;
  }
}
