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
    				// You can disable this and other quirks using strict mode.
    console.log("Inside function - functionA = " + functionA); // Works as expected
    console.log("Inside function - functionB = " + functionB); // Works as expected.
}
// console.log("Outside function - functionA = " + functionA); // functionA is not defined
// console.log("Outside function - functionB = " + functionB); // Will fail until we call the function, and the interpretation stage adds a new global var
myFunc();
console.log("Outside function - functionB = " + functionB); // Now it works

// Another side-effect of the two step process (compilation and interpretation)
function outer() {
    var x = 10;
    function inner() {
        var y = x;
        console.log("inner.y = " + y); // Undefined. The compiler adds x to the inner scope stack, but the interpreter never gets a chance to set x in the inner scope stack before this line executes.
        var x = 20;
    }
    inner(); // Hint: Don't forget to call inner
}
outer();

// What is the global container?
// When running in a browser. Adding global variables and functions is akin to attaching these objects to the window object
// EG 1
var a = 10;
console.log("a = " + a);
// console.log("window.a = " + window.a); // Same as above
// EG 2
function test() {
    console.log("test");
}
test();
// window.test();

// Global variables and functions are available to all scripts running on a page (i.e. they all get attached to the window object)
// How to declare a function and execute it (without creating a global function)
// ( function() {...} )();
(function () {
    console.log("Executing anonymous function using the IIFE strategy");
})();

//*******************//
// ES 6 Improvements //
//*******************//

// Block scope variables - no hoisting
{
    let blockScopedVar = 1;
}

// Block scope function
function test2() {
    console.log("Global test2 function");
}
test2(); // Prints Global
{
    function test2() {
        console.log("Outer block scoped test2 function");
    }
    {
        function test2() {
            console.log("Inner block scoped test2 function");
        }
        test2(); // Prints Inner ...
    }
    test2(); // Prints Outer ...
}
test2(); // !!! Prints Outer ... and not Global ...
