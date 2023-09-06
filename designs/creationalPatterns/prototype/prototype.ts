class Person {
  constructor(public name: string, public age: number) {}

  clone(): this {
    // Clona el objeto actual
    const clone = Object.create(this);
    return clone;
  }
}

// Crear un prototipo de persona
const personPrototype = new Person('John', 30);

// Clonar el prototipo para crear objetos Employee y Customer
const employee = personPrototype.clone();
employee.name = 'Employee';
employee.age = 25;

const customer = personPrototype.clone();
customer.name = 'Customer';
customer.age = 40;

// Mostrar los objetos clonados
console.log(employee); // Output: Employee { name: 'Employee', age: 25 }
console.log(customer); // Output: Customer { name: 'Customer', age: 40 }
