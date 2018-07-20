// Global objects can be accessed by functions.
// Objects declared inside functions, however, cannot be accessed outside of the declaring function
// This is why JS is referred to as a function-scoped language. Java, on the other hand, is block scoped.
var outerA = 10;
if("test" === "test") {
    console.log("Inside if - outerA = " + outerA)
    var blockA = 20;
}
console.log("Outside if - outerA = " + outerA); // Works as expected
console.log("Outside if - blockA = " + blockA); // Also works

function myFunc() {
    var functionA = 30;
    functionB = 40; // Undeclared variable. Will get added to the global scope. Added by the interpreter (not at the compilation stage).
    console.log("Inside function - functionA = " + functionA); // Works as expected
    console.log("Inside function - functionB = " + functionB); // Works as expected.
}
// console.log("Outside function - functionA = " + functionA); // functionA is not defined
// console.log("Outside function - functionB = " + functionB); // Will fail until we call the function, and the interpretation stage adds a new global var
myFunc();
console.log("Outside function - functionB = " + functionB); // Now it works

// What is the global container?
// When running in a browser. Adding global variables and functions is akin to attaching these objects to the window object
// EG 1
var a = 10;
console.log("a = " + a);
console.log("window.a = " + window.a); // Same as above
// EG 2
function test() {
    console.log("test");
}
test();
window.test();

// Global variables and functions are available to all scripts running on a page (i.e. they all get attached to the window object)
// How to declare a function and execute it (without creating a global function)
// ( function() {...} )();
(function () {
    console.log("Executing anonymous function using the IIFE strategy");
})();
