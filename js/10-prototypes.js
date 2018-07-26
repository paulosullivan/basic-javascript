// Similar to classes
// Adding functions or variables to an object normally results in each object getting it's own copy of the function or variable in memory
// Variables normally change between objects, and so we generally use this technique with methods (unless you have a static value)
// This can be avoided thru the use of prototypes.
// Prototypes can only be used in conjunction with constructor functions

function Person(name, age) {
    this.name = name;
    this.age = age;
}

// Normally we would add our methods to the Person function
// This time we will add the method to the prototype for the Person function
// Remember a function is also an object, and so can have properties (one of these being prototype).
Person.prototype.printName = function () {
    console.log(this.name); // the "this" keyword is required
}

var person1 = new Person("Joe Bloggs", 30);
person1.printName();
var person2 = new Person("Anne Smith", 25);
person2.printName();
console.log(person1.__proto__); // Prints Person { printName: [Function] }
console.log(person2.__proto__); // Prints Person { printName: [Function] }

// Prototypes allow us to add functionality at runtime (unlike classes in Java) even after we have created our person objects
Person.prototype.printAge = function () {
    console.log(this.age); // the "this" keyword is required
}
person1.printAge();
person2.printAge();
console.log(person1.__proto__); // Person { printName: [Function], printAge: [Function] }
console.log(person2.__proto__); // Person { printName: [Function], printAge: [Function] }