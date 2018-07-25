// Similar to classes
// Adding functions to an object normally results in each object getting it's own copy of the function in memory
// This can be avoided thru the use of prototypes.
// Employee.prototype.someFunction = function() {...};
// var emp1 = new Employee(); emp1.someFunction();
// emp.__prototype__