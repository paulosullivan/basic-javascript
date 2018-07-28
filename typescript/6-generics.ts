// Allow anthing - non generic example
function myFunction(input : any) : any {
	return input;
}

// Allow anything - generic example
function myFunc2<T>(input : T) : T {
  return input;
}

// More ellaborate example

class Person6 {
  
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

class Programmer3 extends Person6 {
  
}

class Manager extends Person6 {
  
}

// This function would always return a reference to a Person
function echoPerson(person : Person6) : Person6 {
  return person;
}

// This function returns a reference to a Person or one of its subclasses
function echoPerson2<T extends Person6>(person : T) : T {
  return person;
}

var person : Person6 = new Person6("Joe", "Bloggs");
var prog : Programmer3 = new Programmer3("John", "Doe");
var manager : Manager = new Manager("Jane", "Doe");
person = echoPerson2(person);
prog = echoPerson2(prog);
manager = echoPerson2(manager);
// var str = echoPerson("string"); -> Argument of type '"string"' is not assignable to parameter of type 'Person'

