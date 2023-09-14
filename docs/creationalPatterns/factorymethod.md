# Dessing Pattern Prototype

## Description

The Factory Method design pattern is a creational pattern that provides an interface for creating objects in a superclass but allows subclasses to alter the type of objects that will be created. In other words, this pattern defines an interface for creating an object but lets derived or subclassed classes decide which concrete class to implement and create.

**Key elements of the Factory Method pattern:**

1. **Product:** It is an interface or abstract class that defines the structure of the objects that the Factory Method will create.

2. **Concrete Product:** These are concrete classes that implement the Product interface. Each of these classes represents a specific type of product.

3. **Creator:** It is an interface or abstract class that declares the Factory Method, which is a method for creating an object of the Product. It may also contain methods to operate on the created products.

4. **Concrete Creator:** These are concrete classes that implement the Creator and thus the Factory Method. Each Concrete Creator decides which specific type of Concrete Product to create.

**Characteristics and advantages of the Factory Method pattern:**

- **Flexibility:** The Factory Method allows derived classes to choose what type of object to create. This makes object creation more flexible and extensible.

- **Decoupling:** It helps reduce coupling between the Creator and Concrete Product classes since the Creator doesn't need to know the exact concrete classes it will create.

- **Reusability:** It facilitates code reuse, as the same Creator can be used with different Concrete Products.

- **Extensibility:** It allows adding new types of Concrete Products without modifying existing code.

The Factory Method pattern is commonly used in libraries and frameworks where an interface for object creation is provided, but the concrete implementation is delegated to the classes using the library or framework.

In summary, the Factory Method is a powerful technique for object creation that promotes flexibility, decoupling, and extensibility in software design.

## Ejemplos de código

<!-- tabs:start -->

#### **Typescript**

[factoryMethod.py](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/creationalPatterns/factoryMethod/factoryMethod.ts ':include :type=code')

<!-- tabs:end -->
