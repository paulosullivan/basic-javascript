class Person {
  firstName : string;
  lastName : string;
  constructor(firstName : string, lastName : string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() : string {
    return `${this.firstName} ${this.lastName}`
  }
  sayHello() {
    console.log("Hello World");
  }
}

var person1 : Person = new Person("Joe", "Bloggs");
console.log(person1.getFullName());

class Programmer extends Person {
  sayHello() {
    super.sayHello();
    console.log("I am a programmer");
  }
  writeCode() {
    // ...
  }
}

var programmer : Programmer = new Programmer("Mike", "Jones");
programmer.sayHello();

// TS supports polyphorphism
var programmer2 : Person = new Programmer("Anne", "Smith");
programmer2.sayHello();
// programmer2.writeCode(); Would throw an error



