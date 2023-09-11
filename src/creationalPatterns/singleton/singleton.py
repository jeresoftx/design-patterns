def singleton(class_):
    instances = {}
    def get_instance(*args, **kwargs):
        if class_ not in instances:
            instances[class_] = class_(*args, **kwargs)
        return instances[class_]
    return get_instance

@singleton
class MySingleton:
    def __init__(self):
        self.data = "Singleton Data"

# Uso del Singleton
singleton_instance_1 = MySingleton()
singleton_instance_2 = MySingleton()

print(singleton_instance_1 is singleton_instance_2)  # Debería imprimir True, indicando que son la misma instancia

print(singleton_instance_1.data)  # Debería imprimir "Singleton Data"
print(singleton_instance_2.data)  # Debería imprimir "Singleton Data"
