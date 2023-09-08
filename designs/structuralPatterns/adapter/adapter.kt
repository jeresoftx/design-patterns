// Adaptee: The legacy class with an incompatible interface
class OldSystem {
    fun legacyRequest(): String {
        return "Data from the legacy system"
    }
}

// Target Interface: The expected interface for new systems
interface NewSystem {
    fun newRequest(): String
}

// Adapter: Adapts the OldSystem to the NewSystem interface
class Adapter(private val oldSystem: OldSystem) : NewSystem {
    override fun newRequest(): String {
        val legacyData = oldSystem.legacyRequest()
        // Perform any necessary adaptation
        val adaptedData = "$legacyData (adapted for the new system)"
        return adaptedData
    }
}

// Client: Uses the NewSystem interface
fun clientCode(system: NewSystem) {
    println(system.newRequest())
}

fun main() {
    val legacySystem = OldSystem() // Legacy system with an incompatible interface
    val adapter = Adapter(legacySystem) // Adapt the legacy system to the new interface
    clientCode(adapter) // Use the new system interface via the adapter
}
