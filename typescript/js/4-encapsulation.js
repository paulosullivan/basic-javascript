"use strict";
// public - everywhere
// private - inside class
// protected - inside class or inside subclass
var Person3 = /** @class */ (function () {
    function Person3(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
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
    return Person3;
}());
// Shorthand for attributes and constructor
var Person4 = /** @class */ (function () {
    // private firstName : string;
    // private lastName : string;
    function Person4(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        // this.firstName = firstName;
        // this.lastName = lastName;
    }
    Person4.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person4.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person4.prototype.getLastName = function () {
        return this.lastName;
    };
    Person4.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    return Person4;
}());
// ReadOnly
// Can be defined in two places. A constructor or when it is being declared and defined at the same time
var Person5 = /** @class */ (function () {
    function Person5(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = dob;
    }
    Person5.prototype.getFirstName = function () {
        return this.firstName;
    };
    Person5.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Person5.prototype.getLastName = function () {
        return this.lastName;
    };
    Person5.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Person5.prototype.getdob = function () {
        return this.dob;
    };
    return Person5;
}());
