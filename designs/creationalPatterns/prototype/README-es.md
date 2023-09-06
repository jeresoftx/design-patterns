# Patrón de diseño prototipo

[Incio](../../../README-es.md)

El patrón de diseño Prototipo (Prototype Pattern) es un patrón creacional que se utiliza para crear nuevos objetos duplicando un objeto existente, conocido como prototipo. En esencia, este patrón permite clonar objetos en lugar de crearlos desde cero. El objetivo principal del patrón Prototipo es evitar la creación repetida de objetos costosos, especialmente cuando la construcción de un objeto es complicada o requiere muchos recursos.

A continuación, se presentan los conceptos clave y una explicación de cómo funciona el patrón de diseño Prototipo:

1. **Prototipo:** Es el objeto que se utiliza como modelo para la creación de nuevos objetos. El prototipo debe ser un objeto completamente inicializado, es decir, debe estar en el estado deseado.

2. **Clonación:** El proceso de crear nuevos objetos (clones) a partir del prototipo se llama clonación. En lugar de crear objetos desde cero, los clones copian el estado del prototipo.

3. **Interfaz (opcional):** En algunos casos, se puede utilizar una interfaz o una clase base común para garantizar que los objetos prototipo y sus clones tengan una estructura coherente.

4. **Tipos de clonación:** Hay dos enfoques comunes para la clonación en el patrón Prototipo:

   - **Clonación superficial:** En este enfoque, se copia solo la estructura superficial del objeto. Si el objeto tiene referencias a otros objetos, las referencias en el objeto clonado seguirán apuntando a los mismos objetos que en el prototipo.
   - **Clonación profunda:** En este enfoque, se copia tanto la estructura superficial como todos los objetos referenciados de manera recursiva. Los objetos clonados son completamente independientes de los objetos originales.

5. **Ventajas:**

   - Evita la creación costosa de objetos desde cero.
   - Permite la creación de nuevos objetos con configuraciones personalizadas basadas en un prototipo existente.
   - Reduce la duplicación de código para la inicialización de objetos similares.

6. **Desventajas:**
   - Puede requerir la implementación de métodos de clonación personalizados para objetos complejos.
   - Puede aumentar la complejidad si se manejan referencias cruzadas entre objetos.

El patrón Prototipo es útil en situaciones donde la creación de objetos es costosa en términos de recursos o tiempo, o cuando se necesitan múltiples objetos similares con algunas diferencias en su configuración. Es especialmente beneficioso en lenguajes de programación que carecen de un mecanismo nativo de clonación, ya que proporciona un enfoque estructurado para la creación de clones de objetos.

1. [Typescript](prototype.ts)
1. [Python](prototype.py)
1. [Kotlin](kotlin.kt)
