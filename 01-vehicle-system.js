class Vehicle {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    getDetails() {
        return `
            Marca => ${this.brand}
            Modelo => ${this.model}
            Año => ${this.year}
        `
    }
}

class Car extends Vehicle {
    constructor(brand, model, year, doors) {
        super(brand, model, year);
        this.doors = doors;
    }

    getDoors() {
        return `
            Puertas => ${this.doors}`
    }
}

class Motorcycle extends Vehicle {
    constructor(brand, model, year, horsepower) {
        super(brand, model, year);
        this.horsepower = horsepower;
    }

    getHorsepower() {
        return `
            HP => ${this.horsepower}`
    }
} 

const car = new Car('Chevrolet', 'Tahoe', 2025, 5);
console.log(car.getDetails());
console.log(car.getDoors());

const motorcycle = new Motorcycle('Harley Davidson', 'Nightster', 2026, 91);
console.log(motorcycle.getDetails());
console.log(motorcycle.getHorsepower());