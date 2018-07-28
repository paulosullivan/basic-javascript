"use strict";
// TS uses postfix declarations
var a;
var b;
var c;
a = "string";
b = 10;
c = true;
// Array of number
var numArray;
var numArray2 = [1, 2, 3, 4, 5];
// Tuple
var tupleArray = ["One", 1];
// Function Params
function addFunc(a, b) {
    return a + b;
}
// TS, by default, also puts constraints on the # of params being passed
// How do we overcome this limit
function addFunc2(a, b, c, d) {
    if (c === void 0) { c = 0; }
    // ...
}
// Return Values
function addFunc3(a, b) {
    return a + b;
}
// Implicit Typing (For both variables and return types (if the return type is obvious)
var d; // TS assigns the any type to d
d = 10;
d = true;
var e = 10; // TS is more strict when the declaration and definition is on the same line
// e = true; would lead to an error
// Union Types
var f;
f = 10;
f = true;
