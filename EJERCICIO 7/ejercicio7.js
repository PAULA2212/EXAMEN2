/* A traves de una funcion constructura de prototipos crea una cuenta bancaria. atributos: nombre, dni, edad, y saldo. Con dos metodos, ingresar y retirar de la cuenta */

function CuentaBancaria(nombre, dni, edad, saldo){
    this.nombre = nombre;
    this.dni = dni;
    this.edad = edad;
    this.saldo = saldo;

    this.retirar = function(cantidad){
        console.log(`En tu cuenta tenias disponible ${this.saldo}.`);
        this.saldo -= cantidad;
        console.log(`Despues de retirar, te queda ${this.saldo} saldo.`);
    }
}

CuentaBancaria.prototype.ingresar = function(cantidad){
    console.log(`En tu cuenta tenias disponible ${this.saldo}.`);
        this.saldo += cantidad;
        console.log(`Despues de ingresar, te queda ${this.saldo} saldo.`);
};

let miCuenta = new CuentaBancaria('paula', '03154567G', 25, 100);
miCuenta.retirar(120);
miCuenta.ingresar(150);
