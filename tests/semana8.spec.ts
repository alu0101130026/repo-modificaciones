import { expect } from 'chai';
import "mocha";
import { Observable } from "../src/semana8/interfaces/observable.js"
import { Observer } from "../src/semana8/interfaces/observer.js"
import { Event } from "../src/semana8/interfaces/event.js"
import { ConcreteObservable } from "../src/semana8/classes/concreteobservable.js"
import { ConcreteObserver } from "../src/semana8/classes/concreteobserver.js"


describe('Observable', () => {
    it('should notify observers with correct data', () => {
        const observable: Observable<number> = new ConcreteObservable<number>();
        const observer1: Observer<number> = new ConcreteObserver<number>();
        const observer2: Observer<number> = new ConcreteObserver<number>();

        observable.subscribe(observer1);
        observable.subscribe(observer2);

        let receivedData1: number | undefined;
        let receivedData2: number | undefined;

        observer1.update = (event: Event<number>) => {
            receivedData1 = event.data;
        };

        observer2.update = (event: Event<number>) => {
            receivedData2 = event.data;
        };

        observable.notifyObservers({ id:"1", data: 42 });

        expect(receivedData1).to.equal(42);
        expect(receivedData2).to.equal(42);
    });

    it('should not notify removed observer', () => {
        const observable: Observable<number> = new ConcreteObservable<number>();
        const observer1: Observer<number> = new ConcreteObserver<number>();
        const observer2: Observer<number> = new ConcreteObserver<number>();

        observable.subscribe(observer1);
        observable.subscribe(observer2);

        let receivedData1: number | undefined;
        let receivedData2: number | undefined;

        observer1.update = (event: Event<number>) => {
            receivedData1 = event.data;
        };

        observer2.update = (event: Event<number>) => {
            receivedData2 = event.data;
        };

        observable.unsubscribe(observer1);
        observable.notifyObservers({ id:"2", data: 99 });

        expect(receivedData1).to.be.undefined;
        expect(receivedData2).to.equal(99);
    });


      it('should throw error when observer is already subscribed', () => {
        const observable: Observable<number> = new ConcreteObservable<number>();
        const observer1: Observer<number> = new ConcreteObserver<number>();
        const observer2: Observer<number> = new ConcreteObserver<number>();

        observable.subscribe(observer1);
        expect(() => observable.subscribe(observer1)).to.throw('The observer had already been subscribed');
      });

  
      it('should throw error when observer is not subscribed', () => {
        const observable: Observable<number> = new ConcreteObservable<number>();
        const observer1: Observer<number> = new ConcreteObserver<number>();
        const observer2: Observer<number> = new ConcreteObserver<number>();
        expect(() => observable.unsubscribe(observer1)).to.throw('The observer has not been subscribed');
      });

      /*it('should throw the received event', () => {
        const observable: Observable<number> = new ConcreteObservable<number>();
        const observer1: Observer<number> = new ConcreteObserver<number>();
        const observer2: Observer<number> = new ConcreteObserver<number>();

        expect(() => observable.notifyObservers({ id:"1", data: 42 })).to.throw('Received event: 42');
      });
*/
    });
    


