import copy

class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def clone(self):
        # Utilizamos la función deepcopy de la biblioteca copy para realizar una clonación profunda
        return copy.deepcopy(self)

# Crear un prototipo de persona
person_prototype = Person("John", 30)

# Clonar el prototipo para crear objetos Employee y Customer personalizados
employee = person_prototype.clone()
employee.name = "Employee"
employee.age = 25

customer = person_prototype.clone()
customer.name = "Customer"
customer.age = 40

# Mostrar los objetos clonados
print("Objeto Employee:", employee.__dict__)
print("Objeto Customer:", customer.__dict__)
