// Libro : está prestado o no

function Libro(nombre, ubicacionBibl, categoria, prestado){ //+ prestado
    this.nombre = nombre,
    this.ubicacionBibl = ubicacionBibl,
    this.categoria = categoria,
    this.prestado = prestado,
    prestado = false

    this.prestar = function(){
        if (this.prestado == false){
            return true
        }
        return `${this.nombre} no está disponible por el momento`;
    }

    this.devolver = function(){
        if (this.prestado == false){
            return "Está disponible"
        }
        return "Está pendiente por devolver"
    }

    this.libroDisponible = function(){
        return `Nombre: ${this.nombre}  |  Sesion: ${this.ubicacionBibl}  |  Categotia: ${this.categoria}  |  Disponible: ${this.prestar()} | ${this.devolver()}`;
    }

}

const book1 = new Libro("Cien años de soledad", "A", "Literatura Colombiana", false);
const book2 = new Libro("La María", "C", "Novelas colombianas", true);
const book3 = new Libro("El diario de Ana", "B", "Literatura Europea", false);

console.log(book1.libroDisponible());
console.log(book2.libroDisponible());
console.log(book3.libroDisponible());


