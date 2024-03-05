/**
 * Clase de la factura, con constructor y métodos para añadir y obtener items
 */
export class Bill {
  private items: string[];

  constructor() {
    this.items = [];
  }

  agregarItem(item: string): void {
    this.items.push(item);
  }

  obtenerItems(): string[] {
    return this.items;
  }
}
