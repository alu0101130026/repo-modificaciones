import { Event } from "./event.js";

/**
 * Interfaz genérica Observer
 */
export interface Observer<T> {
  update(event: Event<T>): void;
}
