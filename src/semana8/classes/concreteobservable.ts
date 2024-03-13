import { Observer } from "../interfaces/observer.js";
import { Observable } from "../interfaces/observable.js";
import { Event } from "../interfaces/event.js";

/**
 * Implementación concreta de la clase Observable
 */
export class ConcreteObservable<T> implements Observable<T> {
  private observers: Observer<T>[] = [];

  /**
   * Método para suscribirse
   * @param observer Instancia de la clase observer
   */
  subscribe(observer: Observer<T>): void {
    if (this.observers.includes(observer)) {
      throw new Error("The observer had already been subscribed");
    } else {
      this.observers.push(observer);
    }
  }

  /**
   * Método para anular la suscripción
   * @param observer Instancia de la clase observer
   */
  unsubscribe(observer: Observer<T>): void {
    const index = this.observers.indexOf(observer);
    if (index === -1) {
      throw new Error("The observer has not been subscribed");
    } else {
      this.observers.splice(index, 1);
    }
  }

  /**
   * Método para notificar a los Observer sobre un evento
   * @param event Instancia de la interfaz Event
   */
  notifyObservers(event: Event<T>): void {
    this.observers.forEach((observer) => {
      observer.update(event);
    });
  }
}
