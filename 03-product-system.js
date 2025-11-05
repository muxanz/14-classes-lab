class Product {
    constructor(name, price, brand) {
        this.name = name;
        this.price = price;
        this.brand = brand;
    }

    description() {

    }
}

class Phone extends Product {
    constructor(name, price, brand, storage, ram) {
        super(name, price, brand);
        this.storage = storage;
        this.ram = ram;
    }

    description() {
        return `
            Nombre => ${this.name}
            Precio => ${this.price}
            Marca => ${this.brand}
            Almacenamiento => ${this.storage}GB
            RAM => ${this.ram}GB
        `;
    }
}

class Laptop extends Product {
    constructor(name, price, brand, processor, inches) {
        super(name, price, brand);
        this.processor = processor;
        this.inches = inches;
    }

    description() {
        return `
            Nombre => ${this.name}
            Precio => ${this.price}
            Marca => ${this.brand}
            Procesador => ${this.processor}
            Pantalla => ${this.inches} Pulgadas
        `;
    }
}

const phone = new Phone('G54', 1250, "Motorola", 128, 12);
console.log(phone.description());

const laptop = new Laptop('Surface Pro', 2420, 'Microsoft', 'Ryzen 7', 17);
console.log(laptop.description());