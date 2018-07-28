var Programmer = /** @class */ (function () {
    function Programmer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Programmer.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    return Programmer;
}());
var programmer = new Programmer("Joe", "Bloggs");
var programmer2 = new Programmer("Anne", "Smith");
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
programmer2 = randomObj;
console.log(programmer2);
