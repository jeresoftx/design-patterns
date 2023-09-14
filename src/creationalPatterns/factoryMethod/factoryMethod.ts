// Interface for Factory Method
interface Product {
  operation(): string;
}

// Concrete class implementing Product
class ConcreteProductA implements Product {
  operation(): string {
    return 'Product A';
  }
}

// Another concrete class implementing Product
class ConcreteProductB implements Product {
  operation(): string {
    return 'Product B';
  }
}

// Interface defining the factory method
interface Creator {
  factoryMethod(): Product;
}

// Concrete class implementing Creator and creating ConcreteProductA
class ConcreteCreatorA implements Creator {
  factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

// Another concrete class implementing Creator and creating ConcreteProductB
class ConcreteCreatorB implements Creator {
  factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

// Using the Factory Method pattern
function clientCode(creator: Creator) {
  const product = creator.factoryMethod();
  console.log(product.operation());
}

// Example of usage
console.log('Client: Using ConcreteCreatorA');
clientCode(new ConcreteCreatorA());

console.log('Client: Using ConcreteCreatorB');
clientCode(new ConcreteCreatorB());
