interface Person2 {
  firstName : string;
  lastName : string;
  getFullName() : String;
}

class Programmer2 implements Person2 {
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

var prog1 : Programmer2 = new Programmer2("Joe", "Bloggs");
var prog2 : Person2 = new Programmer2("Anne", "Smith");
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
prog2 = randomObj;
console.log(prog2);