import { Observer } from "./observer.js";
import { Event } from "./event.js";

/**
 * Interfaz genérica Observable
 */
export interface Observable<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  notifyObservers(event: Event<T>): void;
}
