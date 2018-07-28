export var a : string = "exported variable";
var b : string = "not exported";
console.log(b);

export class Vehicle {
  reg : string;
  make : string;
  model : string;
  constructor(reg : string, make : string, model : string) {
    this.reg = reg;
    this.make = make;
    this.model = model;
  }
  printProps() {
    console.log(`${this.reg} : ${this.make} : ${this.model}`);
  }
}