//***********//
// Variables //
//***********//

var x; // Simple declarations without a definition = undefined
console.log("x = " + x);

var y = null;
console.log("y = " + y);

var num = 1; // All numbers are treated as floating point numbers
console.log("num = " + num);

var string = "blah";
console.log("string = " + string);

var boolean = true;
console.log("boolean = " + boolean);

console.log("num is a type of " + typeof num);
num = "text" // This is allowed
console.log("num is now a type of " + typeof num);

//****************************//
// Type Coercion and Equality //
//****************************//

// == (equality)
// === (identity)
var a = 10
var b = 10
var c = "10"
console.log(a == b); // true
console.log(a === b); // true
console.log(a == c); // true
console.log(a === c); // false - no type coercion with triple equals

//*********//
// Objects //
//*********//

var myObj = {
    "prop1" : "value 1",
    "prop2" : 2,
    "prop3" : true,
    "prop4" : {
        "innerProp1" : "inner value 1"
    }
}

console.log("prop1 = " + myObj.prop1); // Dot Notation
console.log("prop1 = " + myObj["prop1"]); // Square Bracket Notation - More flexible, but less performant
console.log("innerProp1 = " + myObj.prop4.innerProp1); // Output nested value

console.log("prop3 = " + myObj.prop3);
delete myObj.prop3
console.log("prop3 = " + myObj.prop3); // Undefined

//********//
// Arrays //
//********//

// Arrays are also classed as objects. Even functions are objects in JS
// Uses zero index

var myArray = ["One", "Two", "Three"];
console.log("myArray[0] = " + myArray[0]);
console.log("myArray[1] = " + myArray[1]);
console.log("myArray[2] = " + myArray[2]);
console.log("myArray.length = " + myArray.length);
var myArray2 = myArray;
console.log("myArray2.length = " + myArray2.length);
console.log(myArray === myArray2); // Same object on the heap

myArray[3] = "Four"; // New element
console.log("myArray[3] = " + myArray[3]);
console.log("myArray.length = " + myArray.length); // 4
console.log("myArray2.length = " + myArray2.length); // 4 - same object on the heap
myArray[99] = "One Hundred";
console.log("myArray.length = " + myArray.length); // 100 - Weird

var myArray3 = ["One", "Two", "Three"];

// Add and remove from the end of the array
myArray3.push("Four");
console.log(myArray3.length) // 4
var four = myArray3.pop();
console.log(myArray3.length) // 3
console.log(four) // Four

// Add and remove from the start of the array
myArray3.unshift("Zero");
console.log(myArray3.length) // 4
var zero = myArray3.shift();
console.log(myArray3.length) // 3
console.log(zero) // Zero

// Wrapper Objects For Primitives //
// number has Number
// string has String
// boolean has Boolean

// Loop over an array (Can also use a normal for clause)
console.log("Logging each of the elements in myArray3");
var elementFunction = function (element) {
    console.log(element)
};
myArray3.forEach(elementFunction); // JS actually passes the following foreach(function(item, index, array))

// EG string is a primitive, but we can call a length property on strings?
// This works because JS automatically converts the string primitive to a String object
var someString = "blah";
console.log(someString.length);

//**********************//
// Other Useful Objects //
//**********************//

// Math

// Date
var now = new Date();
console.log(now.getDate());