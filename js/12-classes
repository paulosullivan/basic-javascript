//***********//
// ES 6 Only //
//***********//

class Vehicle {

    constructor (reg, make, model) {
        this.reg = reg;
        this.make = make;
        this.model = model;
    }

    printProps() {
        console.log("Printing properties");
        console.log(`Reg : ${this.reg}`);
        console.log(`Make : ${this.model}`);
        console.log(`Model : ${this.model}`);
    }

}

var veh = new Vehicle("12345", "Opel", "Astra");
console.log(veh.reg);
console.log(veh.make);
console.log(veh.model);
veh.printProps();

class Car extends Vehicle {

    constructor (reg, make, model, type) {
        super(reg, make, model);
        this.type = type;
    }

    printProps() {
        super.printProps();
        console.log(`Type : ${this.type}`);
    }

    static getDefaultCar() {
        return new Car("XXXXX", "Make", "Model", "Type");
    }

}

var car = new Car("12345", "Opel", "Astra", "Hatchback");
console.log(car.reg);
console.log(car.make);
console.log(car.model);
console.log(car.type);
car.printProps();

var car2 = Car.getDefaultCar();
console.log(car2.reg);
console.log(car2.make);
console.log(car2.model);
console.log(car2.type);
car2.printProps();