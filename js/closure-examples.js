// A closure is a function having access to the parent scope, even after the parent function has closed
// Another way of saying this is that functions remember their scopes (when the function is being declared)
// The scope refers to any objects in the functions immediate scope and all of it's outer scopes.
// NB The closure maintains a reference to actual variables. It doesn't create it's own copies of variables in the outer scopes.

var a = 10;
function outer() {
	var b = 20;
	function inner() {
		console.log(a);
		console.log(b);
	}
	return inner;  // Aside: Notice that we don't return inner().
	               // We don't want to run the function and return it's result.
	               // We want to return the function itself.
}
var innerFn = outer();
innerFn(); // Prints 10 and 20. The closure for the inner function maintains references to a and b.

// What happens to a variable declared in a function when that function is run multiple times.
// Just like Java it creates a new instance. The closure has no affect on this behaviour.

var c = 0;
function outer2() {
	var d = 0;
	function inner2 () {
		c++;
		d++;
		console.log("c = " + c);
		console.log("d = " + d);
	}
	return inner2;
}
var innerFn2 = outer2(); 
var innerFn3 = outer2(); 
innerFn2(); // Prints 1 and 1 
innerFn3(); // Prints 2 and 1. d was redeclared when we ran outer2 for the second time.

// Closures are also important for callbacks

var e = 10;
console.log("Initial value of e = " + e);

function timeoutCallback() {
	console.log("Callback value of e = " + e);
}

e = 20;
console.log("Changed value of e = " + e);

setTimeout(timeoutCallback, 5000);

e = 30;
console.log("Final value of e = " + e);

console.log("Final statement");

// Prints the following
// Initial value of e = 10 
// Changed value of e = 20 
// Final value of e = 30 
// Final statement 
// Callback value of e = 30
// The closure is created when the function is run, which is approx. 5 seconds after the "Final statement" log message.
// At that stage e has been set to 30.

// Another use of the closures is the Module pattern (akin to having private fields and public access modifiers in Java)

// Issue
var person = {
	"firstName" : "Paul",
	"lastName" : "Jones",
	"getFirstName" : function() {
		return this.firstName;
	},
	"getLastName" : function() {
		return this.lastName;
	}
};
console.log(person.firstName); // Paul
console.log(person.lastName); // Jones

// Fix
function createPerson() {
	var firstName = "Paul";
	var lastName = "Jones";
	var person = {
		"getFirstName" : function() {
			return firstName;
		},
		"getLastName" : function() {
			return lastName;
		}
	}
	return person;
}

var person2 = createPerson();
console.log(person2.getFirstName()); // Paul
console.log(person2.getLastName()); // Jones
console.log(person2.firstName); // undefined
console.log(person2.lastName); // undefined

// More dynamic fix 1
function createPerson2(firstName, lastName) {
	var person = {
		"getFirstName" : function() {
			return firstName;
		},
		"getLastName" : function() {
			return lastName;
		}
	}
	return person;
}

var person3 = createPerson2("Paul", "Jones");
console.log(person3.getFirstName()); // Paul
console.log(person3.getLastName()); // Jones
console.log(person3.firstName); // undefined
console.log(person3.lastName); // undefined
var person4 = createPerson2("Mike", "Smith");
console.log(person4.getFirstName()); // Mike
console.log(person4.getLastName()); // Smith
console.log(person3.firstName); // undefined
console.log(person3.lastName); // undefined

//More dynamic fix 2
function createPerson3() {
	var firstName = "Paul"; // Default Value
	var lastName = "Jones"; // Default Value
	var person = {
		"getFirstName" : function() {
			return firstName;
		},
		"getLastName" : function() {
			return lastName;
		},
		"setFirstName" : function(first) {
			firstName = first;
		},
		"setLastName" : function(last) {
			lastName = last;
		}
	}
	return person;
}

var person4 = createPerson3();
person4.setFirstName("Anne");
person4.setLastName("Wright");
console.log(person4.getFirstName());
console.log(person4.getLastName());
var person5 = createPerson3();
person5.setFirstName("Julia");
person5.setLastName("Robson");
console.log(person5.getFirstName());
console.log(person5.getLastName());