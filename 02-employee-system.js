class Employee {
    constructor(name, age, baseSalary) {
        this.name = name;
        this.age = age;
        this.baseSalary = baseSalary;
    }

    calculateSalary() {
        return this.baseSalary;
    }
}

class Manager extends Employee {
    constructor(name, age, baseSalary, bonus) {
        super(name, age, baseSalary);
        this.bonus = bonus;
    }

    calculateSalary() {
        return this.baseSalary + this.bonus;
    }
}

class Developer extends Employee {
    constructor(name, age, baseSalary, language) {
        super(name, age, baseSalary);
        this.language = language;
    }
}

const manager = new Manager('Bruce Wayne', 38, 30000, 5000);
console.log(manager.calculateSalary());

const developer = new Developer('Helga Pataki', 23, 15000, 'Java');
console.log(developer.calculateSalary());