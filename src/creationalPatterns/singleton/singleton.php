<?php

class Singleton {
    // La variable privada que almacenará la única instancia de la clase
    private static $instance;

    // Constructor privado para evitar la creación de instancias desde fuera de la clase
    private function __construct() {
        // Puedes realizar alguna inicialización aquí si es necesario
    }

    // Método estático para obtener la única instancia de la clase
    public static function getInstance() {
        if (!self::$instance) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    // Métodos de instancia
    public function someMethod() {
        echo "Método de instancia invocado.";
    }
}

// Uso del Singleton
$singleton1 = Singleton::getInstance();
$singleton2 = Singleton::getInstance();

// Comprobación de que ambas variables apuntan a la misma instancia
if ($singleton1 === $singleton2) {
    echo "Ambas variables apuntan a la misma instancia Singleton.";
}

// Llamando a un método de instancia
$singleton1->someMethod();
