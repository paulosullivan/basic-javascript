"use strict";
var Programmer2 = /** @class */ (function () {
    function Programmer2(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Programmer2.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Programmer2;
}());
var prog1 = new Programmer2("Joe", "Bloggs");
var prog2 = new Programmer2("Anne", "Smith");
console.log(programmer);
console.log(programmer2);
// TS also supports duck typing -> If it looks like a duck ...
var randomObj = {
    firstName: "test",
    lastName: "test",
    getFullName: function () {
        return "test";
    },
    getFullName2: function () { return "test"; }
};
prog2 = randomObj;
console.log(prog2);
