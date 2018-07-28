// Allow anthing - non generic example
function myFunction(input : any) : any {
	return input;
}

// Allow anything - generic example
function myFunc2<T>(input : T) : T {
  return input;
}

// More ellaborate example

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

class Programmer extends Person {
  
}

class Manager extends Person {
  
}

// This function would always return a reference to a Person
function echoPerson(person : Person) : Person {
  return person;
}

// This function returns a reference to a Person or one of its subclasses
function echoPerson2<T extends Person>(person : T) : T {
  return person;
}

var person : Person = new Person("Joe", "Bloggs");
var programmer : Programmer = new Programmer("John", "Doe");
var manager : Manager = new Manager("Jane", "Doe");
person = echoPerson2(person);
programmer = echoPerson2(programmer);
manager = echoPerson2(manager);
// var str = echoPerson("string"); -> Argument of type '"string"' is not assignable to parameter of type 'Person'

