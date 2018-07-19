//***********//
// Functions //
//***********//

// NB Functions are objects

function sayHello() {
    console.log("Hello");
}
sayHello();

// No need to use var for params
function sayHello2(name) {
    console.log("Hello " + name);
}
sayHello2("Paul");

// JS is flexible when it comes to the # of params
function sayHello3(firstname, surname) {
    console.log("Hello " + firstname + " " + surname);
}
sayHello3("Paul", "Jones"); // Hello Paul Jones
sayHello3("Paul", "Jones", "Blah"); // Hello Paul Jones - Blah is just ignored
sayHello3("Paul"); // Hello Paul undefined
// All of this means you can't have overloaded functions

// Return Value
function sayHello4(firstname, surname) {
    return "Hello " + firstname + " " + surname;
}
console.log(sayHello4("Paul", "Jones"));

//**************************************************************//
// Function Expressions (as opposed to a function declarations) //
//**************************************************************//

var f = function sayHello5(name) {
    console.log("Hello " + name);
};
f("Paul Jones"); // Prints the name

// Anonymous Function Expression - no name
var f2 = function (name) {
    console.log("Hello " + name);
};
f2("Paul Jones"); // Prints the name

//***********************//
// Function As Arguments //
//***********************//

var f3 = function(name) {
    console.log("Hello " + name);
};

// The function is just another param
var executor = function(fn, name) {
    fn(name);
};

executor(f3, "Paul");

//**********************//
// Functions On Objects //
//**********************//

var obj = {
    "prop1" : "value 1"
};

// Just showing how we can assign new properties. We will reuse this technique for functions
obj.prop2 = "value 2";
console.log("obj.prop2 = " + obj.prop2);

obj.myFunc = function() {
    console.log("Hello from obj function");
}
obj.myFunc();

//******************//
// Functions & this //
//******************//

var person = {
    "firstName" : "John",
    "lastName" : "Doe",
    "address" : {
        "line1" : "15 Highfield Lawn",
        "line2" : "Highfield Park",
        "city" : "San Jose",
        "state" : "CA"
    },
    "getFullName" : function() {
        return this.firstName + " " + this.lastName
    },
    // Now lets add a function with a param
    "isFromState" : function(state) {
        return (this.address.state === state);
    }
}
console.log("person fullname = " + person.getFullName());
console.log("person fullname is from CA = " + person.isFromState("CA"));
console.log("person fullname is from MN = " + person.isFromState("MN"));

//*************************************//
// Default Implicit Function Arguments //
//*************************************//

var add = function(a, b) {
    console.log(arguments);
    console.log(this); // Window is this case when running these examples in Firefox's scratchpad. The Window object itself depends on what page is open in Firefox.
    return (a + b);
};
console.log("Adding two numbers. Result = " + add(10, 10));

var add2 = function() {
    var result = 0;
    for(var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};
console.log("Adding a random amount of numbers. Result = " + add2(10, 10, 10));