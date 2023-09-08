# Adaptee: The legacy class with an incompatible interface
class OldSystem:
    def legacy_request(self):
        return "Data from the legacy system"

# Target Interface: The expected interface for new systems
class NewSystem:
    def new_request(self):
        pass

# Adapter: Adapts the OldSystem to the NewSystem interface
class Adapter(NewSystem):
    def __init__(self, old_system):
        self.old_system = old_system

    def new_request(self):
        legacy_data = self.old_system.legacy_request()
        # Perform any necessary adaptation
        adapted_data = f"{legacy_data} (adapted for the new system)"
        return adapted_data

# Client: Uses the NewSystem interface
def client_code(system):
    print(system.new_request())

# Usage of the Adapter pattern
legacy_system = OldSystem()  # Legacy system with an incompatible interface
adapter = Adapter(legacy_system)  # Adapt the legacy system to the new interface
client_code(adapter)  # Use the new system interface via the adapter
