// Define the Observer interface
interface Observer {
  update(message: string): void;
}

// Concrete Observer 1
class ConcreteObserver1 implements Observer {
  update(message: string): void {
    console.log(`Observer 1 received message: ${message}`);
  }
}

// Concrete Observer 2
class ConcreteObserver2 implements Observer {
  update(message: string): void {
    console.log(`Observer 2 received message: ${message}`);
  }
}

//define the subject interface
interface Subject {
  // Attach an observer to the subject.
  addObserver(observer: Observer): void;

  // Detach an observer from the subject.
  removeObserver(observer: Observer): void;

  // Notify all observers about an event.
  notifyObservers(message: string): void;
}

// Subject (or Observable)
class Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  notifyObservers(message: string): void {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }
}

// Usage
const subject = new Subject();
const observer1 = new ConcreteObserver1();
const observer2 = new ConcreteObserver2();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers('Hello, observers!');

// Output:
// Observer 1 received message: Hello, observers!
// Observer 2 received message: Hello, observers!
