# Dessing Pattern Prototype

## Description

The Prototype Pattern is a creational design pattern used to create new objects by duplicating an existing object, known as a prototype. Essentially, this pattern allows objects to be cloned instead of creating them from scratch. The primary goal of the Prototype Pattern is to avoid the repeated creation of costly objects, especially when the construction of an object is complex or resource-intensive.

Below are the key concepts and an explanation of how the Prototype Pattern works:

1. **Prototype:** It is the object used as a model for creating new objects. The prototype must be a fully initialized object, meaning it should be in the desired state.

2. **Cloning:** The process of creating new objects (clones) from the prototype is called cloning. Instead of creating objects from scratch, clones copy the state of the prototype.

3. **Interface (optional):** In some cases, a common interface or base class can be used to ensure that prototype objects and their clones have a consistent structure.

4. **Types of Cloning:** There are two common approaches to cloning in the Prototype Pattern:

   - **Shallow cloning:** In this approach, only the superficial structure of the object is copied. If the object has references to other objects, the references in the cloned object will still point to the same objects as in the prototype.
   - **Deep cloning:** In this approach, both the superficial structure and all referenced objects are copied recursively. Cloned objects are completely independent of the original objects.

5. **Advantages:**

   - Avoids costly object creation from scratch.
   - Allows the creation of new objects with customized configurations based on an existing prototype.
   - Reduces code duplication for initializing similar objects.

6. **Disadvantages:**
   - May require the implementation of custom cloning methods for complex objects.
   - Can increase complexity when dealing with cross-references between objects.

The Prototype Pattern is useful in situations where object creation is resource- or time-intensive, or when multiple similar objects with some configuration differences are needed. It is especially beneficial in programming languages lacking a native cloning mechanism, as it provides a structured approach to object cloning.

## Example code

<!-- tabs:start -->

#### **Typescript**

[prototype.py](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/creationalPatterns/prototype/prototype.ts ':include :type=code')

#### **Python**

[prototype.py](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/creationalPatterns/prototype/prototype.py ':include :type=code')

#### **Kotlin**

[prototype.py](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/creationalPatterns/prototype/prototype.kt ':include :type=code')

#### **Rust**

[prototype.rs](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/creationalPatterns/prototype/prototype.rs ':include :type=code')

<!-- tabs:end -->
