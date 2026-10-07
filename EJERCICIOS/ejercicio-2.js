// Mascota : nombre, especie, edad, peso

function Mascota(nombre, especie, edad, peso){
    this.nombre = nombre,
    this.especie = especie,
    this.edad = edad,
    this.peso = peso,
    this.presentacion = function() {
        return `${this.nombre}  |  ${this.especie}  |  ${this.edad} meses  |  ${this.peso} lb`;
    }
}

const pet1 = new Mascota("Perlina", "Chiguagua", 29, 6);
const pet2 = new Mascota("Tino", "Pitbull", 48, 20);
const pet3 = new Mascota("Koffy", "Chandoberman", 36, 22);

console.log(pet1.presentacion());
console.log(pet2.presentacion());
console.log(pet3.presentacion());
 
