// Si aprobó o no el estudiante

function Estudiante(nombre, apellido, edad, grado, notaFinal){
    this.nombre = nombre,
    this.apellido = apellido,
    this.edad = edad,
    this.grado = grado,
    this.notaFinal = notaFinal,

    this.aprobado = function(){
        if (this.notaFinal > 4.5){
            return this.aprobado = "Congrats! Has aprobado el curso con un nivel superior."
        } else if (this.notaFinal >= 3.0){
            return this.aprobado = true
        } 
        return false
    }
    this.mostrarResultado = function(){
        return `${this.nombre} ${this.apellido}  |  ${this.edad} años  |  ${this.grado}°  |  ${this.notaFinal}  |  Aprobado: ${this.aprobado()}`;
    }
}

const student1 = new Estudiante("Andrés", "Ordoñez", 21, 11, 4.7);
const student2 = new Estudiante("Juana", "Perez", 19, 9, 3.5);
const student3 = new Estudiante("Perla", "Torrez", 18, 10, 2.9);

console.log(student1.mostrarResultado());
console.log(student2.mostrarResultado());
console.log(student3.mostrarResultado());


