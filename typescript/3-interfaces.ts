interface Person {
  firstName : string;
  lastName : string;
  getFullName() : String;
}

class Programmer implements Person {
  firstName : string;
  lastName : string;
  constructor(firstName : string, lastName : string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName() : string {
    return `${this.firstName} ${this.lastName}`
  }
}

var programmer : Programmer = new Programmer("Joe", "Bloggs");
var programmer2 : Person = new Programmer("Anne", "Smith");
console.log(programmer);
console.log(programmer2);

// TS also supports duck typing -> If it looks like a duck ...
var randomObj = {
  firstName : "test",
  lastName : "test",
  getFullName : function() {
    return "test";
  },
  getFullName2 : () => "test"
};
programmer2 = randomObj;
console.log(programmer2);