// Illustrate the four ways to call a function, and their impacts on the this object
// Remember every function is implicitly passed a "this" object and an "arguments" object

// Normal function call
function method1() {
    console.log("Method 1");
    console.log(this); // Logs the global object (e.g. the windows object when running in a browser)
}
method1();

// Call a function on an object
var obj1 = { "name" : "obj1" };
obj1.method2 = function() {
    console.log("Method 2");
    console.log(this); // Logs obj1
}
obj1.method2();

// Constructor Function
function Person() {
    this.name = "Joe Bloggs";
    this.method3 = function() {
        console.log("Method 3");
        console.log(this); // Logs the object that gets return from Person constructor function
    }
}
var obj2 = new Person();
obj2.method3();

// Function Call Method
var obj3 = { "name" : "obj3" };
function method4() {
    console.log("Method 4");
    console.log(this);  // Logs the object that we will explicitly pass to the method.
                        // The function would normally have logged it's global object.
}
method4.call(obj3);
