var i;

function printCallback() {
	console.log("printCallback() " + i);
}

for (i = 0; i < 10; i++) {
	setTimeout(printCallback, 2000);
}

// Prints 10 (10 times)
// i gets incremented to 10 before the callbacks get a chance to run

// Can we pass i to the callback
// Yes, but by calling "printCallback2(j)" we actually run the callback function immediately.
// This prints 0-9, but doesn't do it asynchronously.
var j;

function printCallback2(index) {
	console.log("printCallback2() " + index);
}

for (j = 0; j < 10; j++) {
	setTimeout(printCallback2(j), 10000);
}

// Fix - use an IEFF function
// The IEFF function gets immediately executed, and so index will be assigned the correct/current value of k.
// Setting index in the inline callback function won't work because the callback function doesn't get immediately executed.

var k;

for (k = 0; k < 10; k++) {
	(function() {
		var index = k;
		setTimeout(function() {
			console.log("k = " + k); // Prints 10 (10 times) async
			console.log("index = " + index); // Prints 0-9 async
		}, 5000);
	})();
}

// You can also pass parameters to IEFF functions
// EG (function (param) {...})(value);

var l;

for (l = 0; l < 10; l++) {
	(function(index) {
		setTimeout(function() {
			console.log("l = " + l); // Prints 10 (10 times) async
			console.log("index = " + index); // Prints 0-9 async
		}, 5000);
	})(l);
}

// Our fix works because a function gets it own copy of local variables when it is run.
// For example

var m = 0;

function copyGlobalVariable() {
	var n = m; 	// var makes a new copy of m
				// Primitives are passed by value. Including Number, String, Boolean, Null and Undefined
				// Objects are passed by reference. Including Arrays, Functions and other Objects
	n = 1;
	console.log("Inside function m = " + m); // Still 0
	console.log("Inside function n = " + n); // 1
}

copyGlobalVariable();

console.log("m = " + m); // 0
