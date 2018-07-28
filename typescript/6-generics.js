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
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.sayHello = function () {
        console.log("Hello World");
    };
    return Person;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Programmer;
}(Person));
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Manager;
}(Person));
// This function would always return a reference to a Person
function echoPerson(person) {
    return person;
}
// This function returns a reference to a Person or one of its subclasses
function echoPerson2(person) {
    return person;
}
var person = new Person("Joe", "Bloggs");
var programmer = new Programmer("John", "Doe");
var manager = new Manager("Jane", "Doe");
person = echoPerson2(person);
programmer = echoPerson2(programmer);
manager = echoPerson2(manager);
// var str = echoPerson("string"); -> Argument of type '"string"' is not assignable to parameter of type 'Person'
