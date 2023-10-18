# Step 1: Define an interface or base component
class Coffee:
    def cost(self):
        pass

    def description(self):
        pass

# Step 2: Implement a concrete component (base class)
class SimpleCoffee(Coffee):
    def cost(self):
        return 5  # Base price for a simple coffee

    def description(self):
        return "Simple Coffee"

# Step 3: Create decorator classes that extend the base component
class CoffeeDecorator(Coffee):
    def __init__(self, coffee):
        self._coffee = coffee

    def cost(self):
        return self._coffee.cost()

    def description(self):
        return self._coffee.description()

# Step 4: Implement concrete decorators
class MilkDecorator(CoffeeDecorator):
    def cost(self):
        return self._coffee.cost() + 2  # Add cost of milk

    def description(self):
        return self._coffee.description() + ", Milk"

class SugarDecorator(CoffeeDecorator):
    def cost(self):
        return self._coffee.cost() + 1  # Add cost of sugar

    def description(self):
        return self._coffee.description() + ", Sugar"

# Step 5: Usage
simple_coffee = SimpleCoffee()
print(f"Simple Coffee: {simple_coffee.description()}, Cost: ${simple_coffee.cost()}")

coffee_with_milk = MilkDecorator(simple_coffee)
print(f"Coffee with Milk: {coffee_with_milk.description()}, Cost: ${coffee_with_milk.cost()}")

coffee_with_sugar = SugarDecorator(simple_coffee)
print(f"Coffee with Sugar: {coffee_with_sugar.description()}, Cost: ${coffee_with_sugar.cost()}")

coffee_with_milk_and_sugar = SugarDecorator(MilkDecorator(simple_coffee))
print(f"Coffee with Milk and Sugar: {coffee_with_milk_and_sugar.description()}, Cost: ${coffee_with_milk_and_sugar.cost()}")
