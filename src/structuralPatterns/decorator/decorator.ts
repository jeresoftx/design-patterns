// Step 1: Define an interface that represents the base component.
interface Coffee {
  cost(): number;
  getDescription(): string;
}

// Step 2: Implement a concrete component (the base class).
class SimpleCoffee implements Coffee {
  cost() {
    return 5; // Base price for a simple coffee
  }

  getDescription() {
    return "Simple Coffee";
  }
}

// Step 3: Create decorator classes that extend the base component.
abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  cost() {
    return this.coffee.cost();
  }

  getDescription() {
    return this.coffee.getDescription();
  }
}

// Step 4: Implement concrete decorators.
class MilkDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 2; // Add cost of milk
  }

  getDescription() {
    return this.coffee.getDescription() + ", Milk";
  }
}

class SugarDecorator extends CoffeeDecorator {
  cost() {
    return this.coffee.cost() + 1; // Add cost of sugar
  }

  getDescription() {
    return this.coffee.getDescription() + ", Sugar";
  }
}

// Step 5: Usage
const simpleCoffee: Coffee = new SimpleCoffee();
console.log("Simple Coffee:", simpleCoffee.getDescription(), "Cost: $" + simpleCoffee.cost());

const coffeeWithMilk: Coffee = new MilkDecorator(simpleCoffee);
console.log("Coffee with Milk:", coffeeWithMilk.getDescription(), "Cost: $" + coffeeWithMilk.cost());

const coffeeWithSugar: Coffee = new SugarDecorator(simpleCoffee);
console.log("Coffee with Sugar:", coffeeWithSugar.getDescription(), "Cost: $" + coffeeWithSugar.cost());

const coffeeWithMilkAndSugar: Coffee = new SugarDecorator(new MilkDecorator(simpleCoffee));
console.log("Coffee with Milk and Sugar:", coffeeWithMilkAndSugar.getDescription(), "Cost: $" + coffeeWithMilkAndSugar.cost());
