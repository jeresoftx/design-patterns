# Patrón de diseño prototipo

## Descripción

El patrón de diseño Factory Method (Método de Fábrica) es un patrón creacional que proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases alterar el tipo de objetos que se crearán. En otras palabras, este patrón define una interfaz para crear un objeto, pero permite que las clases derivadas o subclases decidan qué clase concreta implementar y crear.

**Elementos clave del patrón Factory Method:**

1. **Producto (Product):** Es una interfaz o clase abstracta que define la estructura de los objetos que el Factory Method creará.

2. **Concrete Product:** Son las clases concretas que implementan la interfaz del Producto. Cada una de estas clases representa un tipo específico de producto.

3. **Creator (Creador):** Es una interfaz o clase abstracta que declara el Factory Method, que es un método para crear un objeto del Producto. También puede contener métodos para operar sobre los productos creados.

4. **Concrete Creator:** Son las clases concretas que implementan el Creator y, por lo tanto, el Factory Method. Cada Concrete Creator decide qué tipo específico de Concrete Product debe crear.

**Características y ventajas del patrón Factory Method:**

- **Flexibilidad:** El Factory Method permite a las clases derivadas elegir qué tipo de objeto crear. Esto hace que la creación de objetos sea más flexible y extensible.

- **Desacoplamiento:** Ayuda a reducir el acoplamiento entre las clases Creator y Concrete Product, ya que el Creator no necesita conocer las clases concretas exactas que va a crear.

- **Reutilización:** Facilita la reutilización del código, ya que el mismo Creator puede utilizarse con diferentes Concrete Products.

- **Extensibilidad:** Permite agregar nuevos tipos de Concrete Products sin modificar el código existente.

El patrón Factory Method se utiliza comúnmente en bibliotecas y frameworks donde se proporciona una interfaz para crear objetos, pero la implementación concreta se delega a las clases que utilizan la biblioteca o el framework.

En resumen, el Factory Method es una técnica poderosa para la creación de objetos que promueve la flexibilidad, el desacoplamiento y la extensibilidad en el diseño de software.

## Ejemplos de código

<!-- tabs:start -->

#### **Typescript**

[factoryMethod.py](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/creationalPatterns/factoryMethod/factoryMethod.ts ':include :type=code')

<!-- tabs:end -->
