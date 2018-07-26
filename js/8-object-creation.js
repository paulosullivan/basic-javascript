// Lets create two objects representing the same thing.

// Basic Approaches

var person1 = {
	"first" : "Joe",
	"last" : "Bloggs"
};

var person2 = {
	"first" : "Anne",
	"last" : "Smith"
};

var person3 = {};
person3.first = "Joe";
person3.last = "Bloggs";

var person4 = {};
person4.first = "Anne";
person4.last = "Smith";

// Constructor Functions - Remove duplicate code

function createPerson(first, last) {
	var returnObj = {};
	returnObj.first = first;
	returnObj.last = last;
	return returnObj;
}

var person5 = createPerson("Joe", "Bloggs");
var person6 = createPerson("Anne", "Smith");

// Constructor Functions + the new keyword
// Allows us to remove the first and last line from the createPerson function

function createPerson2(first, last) {
	// var this = {};
	this.first = first;
	this.last = last;
	// return this;
}

var person7 = new createPerson2("Joe", "Bloggs");
var person8 = new createPerson2("Anne", "Smith");

console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);
console.log(person6);
console.log(person7);
console.log(person8);

// Proper naming convention for Constructor Functions

function Person(first, last) {
	// Set fields
}
var person9 = new Person("Joe", "Bloggs");
console.log(person9);