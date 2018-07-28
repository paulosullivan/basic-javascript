// TS uses postfix declarations
var a : string;
var b : number;
var c : boolean;

a = "string";
b = 10;
c = true;

// Array of number
var numArray : number[];
var numArray2 : number[] = [1, 2, 3, 4, 5];

// Tuple
var tupleArray : [string, number] = ["One", 1];

// Function Params
function addFunc(a : number, b : number) {
  return a + b;
}

// TS, by default, also puts constraints on the # of params being passed
// How do we overcome this limit
function addFunc2(a : number, b : number, c = 0, d? : number) {
  // ...
}

// Return Values
function addFunc3(a : number, b : number) : number{
  return a + b;
}

// Implicit Typing (For both variables and return types (if the return type is obvious)
var d; // TS assigns the any type to d
d = 10;
d = true;
var e = 10; // TS is more strict when the declaration and definition is on the same line
// e = true; would lead to an error

// Union Types
var f : number | boolean;
f = 10;
f = true;
