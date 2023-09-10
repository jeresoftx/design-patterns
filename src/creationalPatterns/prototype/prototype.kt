// define the Prototype interface
interface PrototypeReport {
    fun clone(): PrototypeReport
}

// create a class implementing the Prototype interface
class Report: PrototypeReport {
    var data: String

    constructor (report: Report) {
      this.data = report.data
    }

    constructor (message: String) {
      this.data = message
    }

    override fun clone(): PrototypeReport {
        //make a deep copy
        return Report(this)
    }
}

fun main() {
    // Create a prototype
    val prototype = Report("Original Data")

    // clone the porptotype for create new objects
    val clone1 = prototype.clone()
    val clone2 = prototype.clone()

    // change the data value for clones
    clone1 as Report

    clone2 as Report

    // print the data values in the diference instances
    println("Original: ${prototype.data}")
    println("Clone 1: ${clone1.data}")
    println("Clone 2: ${clone2.data}")
    clone1.data = "Modified Data 1"
    println("Clone 1 modified: ${clone1.data}")
    clone2.data = "Modified Data 2"
    println("Clone 2 modified: ${clone2.data}")
}
