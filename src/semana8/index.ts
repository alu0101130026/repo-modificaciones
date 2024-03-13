// Definir una interfaz genérica Event<T> {data:T, id:string}
// Observer y observable son genéricas y trabajan con event
// La que implementa observable es genérica
// El update del observer recibe un event
// Clase Notifier genérica
// Observador sí puede ser concreta

import { Event } from "./interfaces/event.js";
import { Observer } from "./interfaces/observer.js";
import { Observable } from "./interfaces/observable.js";
import { ConcreteObservable } from "./classes/concreteobservable.js";
import { ConcreteObserver } from "./classes/concreteobserver.js";

/**
 * Vamos a probar algunos ejemplos
 */
const observable = new ConcreteObservable<number>();
const observer1 = new ConcreteObserver<number>();
const observer2 = new ConcreteObserver<number>();

observable.subscribe(observer1);
observable.subscribe(observer2);

observable.notifyObservers({ id: "1", data: 435 });

observable.unsubscribe(observer1);
observable.notifyObservers({ id: "2", data: 76 });
