"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Allow anthing - non generic example
function myFunction(input) {
    return input;
}
// Allow anything - generic example
function myFunc2(input) {
    return input;
}
// More ellaborate example
var Person6 = /** @class */ (function () {
    function Person6(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person6.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person6.prototype.sayHello = function () {
        console.log("Hello World");
    };
    return Person6;
}());
var Programmer3 = /** @class */ (function (_super) {
    __extends(Programmer3, _super);
    function Programmer3() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Programmer3;
}(Person6));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Person6));
// This function would always return a reference to a Person
function echoPerson(person) {
    return person;
}
// This function returns a reference to a Person or one of its subclasses
function echoPerson2(person) {
    return person;
}
var person = new Person6("Joe", "Bloggs");
var prog = new Programmer3("John", "Doe");
var manager = new Manager("Jane", "Doe");
person = echoPerson2(person);
prog = echoPerson2(prog);
manager = echoPerson2(manager);
// var str = echoPerson("string"); -> Argument of type '"string"' is not assignable to parameter of type 'Person'
