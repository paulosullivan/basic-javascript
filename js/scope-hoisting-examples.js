// The concept of hoisting was created by developers to explain what happens during the compilation phase 
// when variables and function declarations are moved — or hoisted — to the top of their containing scope.
// NB We are just talking declarations and not definitions.

// var a = 10;
// b = 20;
// var b;
// becomes
// var a;
// var b;
// a = 10;
// b = 20;

// Same for function decalarations, which allows us to call a function before it is declared.
// The compiler adds the function to the gloabal scope before the interpreter runs the code
myFunc();
function myFunc() {
	console.log("Calling myFunc() before it is declared still works due to hoisting");
}

// The following doesn't work. Prints undefined.
console.log(a);
var a = 10;
// becomes
// var a;
// console.log(a);
// a = 10

