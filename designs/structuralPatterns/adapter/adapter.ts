// Old system class
class OldSystem {
  legacyRequest(): string {
    return 'Datos del sistema antiguo';
  }
}

// new ystem interface with a new method
interface NewSystem {
  newRequest(): string;
}

// Adapter to connect the old class with the new one
class Adapter implements NewSystem {
  private oldSystem: OldSystem;

  constructor() {
    this.oldSystem = new OldSystem();
  }

  newRequest(): string {
    const legacyData = this.oldSystem.legacyRequest();
    // Make any change that you need
    const adaptedData = legacyData + ' (adatpter for the new system)';
    return adaptedData;
  }
}

// client using the NewSystem
function clientCode(system: NewSystem) {
  console.log(system.newRequest());
}

// using the adapter
const adapter = new Adapter();
clientCode(adapter);
