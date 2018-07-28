// public - everywhere
// private - inside class
// protected - inside class or inside subclass
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person.prototype.getLastName = function () {
        return this.lastName;
    };
    Person.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    return Person;
}());
// Shorthand for attributes and constructor
var Person2 = /** @class */ (function () {
    // private firstName : string;
    // private lastName : string;
    function Person2(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // this.firstName = firstName;
        // this.lastName = lastName;
    }
    Person2.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person2.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person2.prototype.getLastName = function () {
        return this.lastName;
    };
    Person2.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    return Person2;
}());
// ReadOnly
// Can be defined in two places. A constructor or when it is being declared and defined at the same time
var Person3 = /** @class */ (function () {
    function Person3(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
    Person3.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person3.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person3.prototype.getLastName = function () {
        return this.lastName;
    };
    Person3.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person3.prototype.getdob = function () {
        return this.dob;
    };
    return Person3;
}());
