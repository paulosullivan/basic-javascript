"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.a = "exported variable";
var b = "not exported";
console.log(b);
var Vehicle = /** @class */ (function () {
    function Vehicle(reg, make, model) {
        this.reg = reg;
        this.make = make;
        this.model = model;
    }
    Vehicle.prototype.printProps = function () {
        console.log(this.reg + " : " + this.make + " : " + this.model);
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
