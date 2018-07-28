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
var person1 = new Person("Joe", "Bloggs");
console.log(person1.getFullName());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.sayHello = function () {
        _super.prototype.sayHello.call(this);
        console.log("I am a programmer");
    };
    Programmer.prototype.writeCode = function () {
        // ...
    };
    return Programmer;
}(Person));
var programmer = new Programmer("Mike", "Jones");
programmer.sayHello();
// TS supports polyphorphism
var programmer2 = new Programmer("Anne", "Smith");
programmer2.sayHello();
// programmer2.writeCode(); Would throw an error
