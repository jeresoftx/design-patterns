object Singleton {
    init {
        println("Singleton instance created")
    }

    fun showMessage() {
        println("Hello from Singleton!")
    }
}

fun main() {
    // Access the Singleton instance
    val singletonInstance1 = Singleton
    val singletonInstance2 = Singleton

    // The Singleton instance is created only once, so these instances are the same
    println(singletonInstance1 === singletonInstance2) // Should print true

    // Call a method on the Singleton
    singletonInstance1.showMessage() // Should print "Hello from Singleton!"
    singletonInstance2.showMessage() // Should print "Hello from Singleton!"
}
