import { Observer } from "../interfaces/observer.js";
import { Event } from "../interfaces/event.js";

/**
 * Implementación concreta de la clase Observer
 */
export class ConcreteObserver<T> implements Observer<T> {
  /**
   * Método para actualizar un evento
   * @param event Instancia de la interfaz Event
   */
  update(event: Event<T>): void {
    console.log("Received event:", event.data);
  }
}
