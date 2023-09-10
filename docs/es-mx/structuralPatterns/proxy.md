# Patrón de Diseño Proxy

## Descripción

El Patrón de Diseño Proxy es un patrón de diseño estructural que proporciona un objeto que actúa como un marcador de posición para otro objeto con el fin de controlar el acceso a él. A menudo se utiliza para agregar un nivel adicional de control sobre la interacción con el objeto real. El Patrón de Diseño Proxy es parte de los patrones de diseño del Grupo de los Cuatro (GoF) y se utiliza comúnmente en varios sistemas de software.

## Aquí tienes una explicación de los componentes clave y el propósito del Patrón de Diseño Proxy:

1. **Sujeto Real** (o Objeto Real): Este es el objeto real que representa el proxy. El sujeto real suele ser costoso de crear o requiere algún control sobre su acceso.

1. **Proxy**: El proxy es una interfaz o una clase que proporciona la misma interfaz que el sujeto real. Actúa como un sustituto o marcador de posición para el sujeto real y controla el acceso a él. El proxy puede realizar varias tareas, como inicialización diferida, control de acceso, registro o almacenamiento en caché, antes de delegar las solicitudes al sujeto real.

1. **Cliente**: El cliente es el código o el componente que interactúa con el proxy. A menudo, el cliente no es consciente de que está comunicándose con un proxy en lugar del sujeto real.

## El Patrón de Diseño Proxy se puede utilizar para diversos fines, incluidos:

**Inicialización Diferida**: El sujeto real solo se crea cuando realmente se necesita, mejorando el rendimiento y la utilización de recursos.

**Control de Acceso**: El proxy puede controlar el acceso al sujeto real mediante la aplicación de verificaciones de seguridad o permisos.

**Registro**: El proxy puede registrar solicitudes y respuestas, proporcionando información sobre las interacciones con el sujeto real.

**Almacenamiento en Caché**: El proxy puede almacenar en caché resultados para evitar cálculos redundantes cuando se realiza la misma solicitud varias veces.

**Proxies Remotos**: En sistemas distribuidos, un proxy puede representar un objeto ubicado en un servidor remoto, lo que permite que los clientes locales interactúen con objetos remotos como si fueran locales.

## Ejempo de código

<!-- tabs:start -->

#### **Typescript**

[proxy.ts](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/structuralPatterns/proxy/proxy.ts ':include :type=code')

#### **Python**

[proxy.py](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/structuralPatterns/proxy/proxy.py ':include :type=code')

#### **Ruby**

[proxy.rb](https://raw.githubusercontent.com/jeresoftx/design-patterns/main/src/structuralPatterns/proxy/proxy.rb ':include :type=code')

<!-- tabs:end -->
