function Computador(marca, procesador, ram_en_GB, precio){
    this.marca = marca,
    this.procesador = procesador,
    this.ram_en_GB = ram_en_GB,
    this.precio = precio

    console.log(`${this.marca} | ${this.procesador} | ${this.ram_en_GB} GB | COP $${this.precio}`);
    
}

const compu1 = new Computador("HP", "AMD Ryzen 7 9800X3D", 16,       3500000);
const compu2 = new Computador("Acer", "Intel Core Ultra 7 270K", 32, 4000000);
const compu3 = new Computador("Lenovo", "AMD Ryzen 5 7600", 8,       2500000);