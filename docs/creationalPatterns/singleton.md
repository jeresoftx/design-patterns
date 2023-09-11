# Dessing Pattern Prototype

## Description

The Singleton design pattern is a creational pattern used to ensure that a class has only one instance and provides a global point of access to that instance. In other words, the Singleton ensures that there is only one instance of a class throughout the program and provides a mechanism to access that instance from anywhere in the code.

Key characteristics of the Singleton pattern:

1. **Single Instance:** It ensures that there is only one instance of the Singleton class throughout the application.

1. **Global Access:** It provides a static method that allows access to the Singleton instance from anywhere in the code.

1. **Private Constructor:** The constructor of the Singleton class is declared as private to prevent instances from being created directly from outside the class.

1. **Lazy Initialization:** The Singleton instance is created only when it is first needed, improving efficiency and performance.

1. **Storage of Instance:** The Singleton instance is stored in a static variable within the class for global access.

The Singleton pattern is used in situations where a single instance of a class is required to coordinate actions across the entire system, such as managing global configurations, handling database connections, or controlling shared resources.

A common example of Singleton pattern usage includes managing event logs, configuration systems, database controllers, cache managers, and thread managers, among others.

The exact implementation of the Singleton pattern may vary depending on the programming language, but the key concepts mentioned above are universal across all implementations of the pattern.

## Example code

<!-- tabs:start -->

#### **Typescript**

[singleton.ts](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/creationalPatterns/singleton/singleton.ts ':include :type=code')

#### **Python**

[singleton.py](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/creationalPatterns/singleton/singleton.py ':include :type=code')

#### **Kotlin**

[singleton.kt](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/creationalPatterns/singleton/singleton.kt ':include :type=code')

#### **Ruby**

[singleton.rb](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/creationalPatterns/singleton/singleton.rb ':include :type=code')

#### **PHP**

[singleton.php](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/creationalPatterns/singleton/singleton.php ':include :type=code')

<!-- tabs:end -->
