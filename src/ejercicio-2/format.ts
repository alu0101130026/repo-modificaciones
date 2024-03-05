import { Bill } from "./bill";

/**
 * Interfaz que define el formato de una factura
 */
export interface Format {
  generarFactura(factura: Bill): string;
}
