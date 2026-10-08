// Vehículo

const prompt = require('prompt-sync')();

function Vehiculo(marca, modelo, yearStream, precio, disponibilidad){
    this.marca = marca,
    this.modelo = modelo,
    this.yearStream = yearStream,
    this.precio = precio,
    this.disponibilidad = disponibilidad,

    this.disponible = function(){
        if (this.disponibilidad === true){
            return true
        }
        return false;
    }

    this.estrato = function(){
        if (this.precio >= 300000000){
            return `${this.marca} | ${this.modelo}, estratos: 4 - 5 - 6`;
        }
        return `${this.marca} | ${this.modelo}, estratos: 1 - 2 - 3`;
    }

    this.isOldOrNot = function(){
        if (this.yearStream >= 2024){
            return `El vehículo es nuevo`;
        }
        return `El vehículo es antiguo`
    }

    this.dataVehiculos = function(){
        return `${this.marca}  |  ${this.modelo}  |  ${this.yearStream} - ${this.isOldOrNot()}  |  ${this.precio} - ${this.estrato()}  |  ${this.disponible()}`
    }

}

function converBool(condicion){
    if (condicion === "false"){
        return false
    } else if (condicion === "true"){
        return true
    }
    return undefined
}

const vehiculo1 = new Vehiculo(prompt("marca: "),prompt("modelo: "),Number(prompt("año de stream: ")),Number(prompt("precio: ")),converBool(prompt("disponible: ")));
const vehiculo2 = new Vehiculo(prompt("marca: "),prompt("modelo: "),Number(prompt("año de stream: ")),Number(prompt("precio: ")),converBool(prompt("disponible: ")));
const vehiculo3 = new Vehiculo(prompt("marca: "),prompt("modelo: "),Number(prompt("año de stream: ")),Number(prompt("precio: ")),converBool(prompt("disponible: ")));

console.log(vehiculo2.dataVehiculos());
console.log(vehiculo3.dataVehiculos());


