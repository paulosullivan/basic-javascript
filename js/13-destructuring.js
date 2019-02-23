// **** Objects **** //
console.log('Object Destructuring');

{
    const person = {firstName: 'Joe', lastName: 'Bloggs', age: 25};

    // Norm
    const {firstName, lastName} = person;
    console.log(firstName);
    console.log(lastName);

    // Alias
    const {firstName:first, lastName:last, age} = person;
    console.log(first);
    console.log(last);
    console.log(age);

    // Function Parameters
    // Old way
    function printPerson(person) {
        console.log(`${person.firstName} ${person.lastName}`);
    }
    printPerson(person);
    // New way
    function printPerson2({firstName, lastName}) {
        console.log(`${firstName} ${lastName}`);
    }
    printPerson2(person); // age is ignored, which means we can pass any object to this method (as long as it has a firstName and lastName property)

    // Object Creation
    const x = 1, y = 2, z = 3;
    const obj = {x, y, z};
    console.log(obj); // prints Object {x: 1, y: 2, z: 3}
}



// **** Arrays **** //
// Use [] instead of {}
console.log('[] Destructuring');

{
    // Norm
    const arr1 = [1, 2];
    const [x, y] = arr1;
    console.log(x, y);

    // Skip Index
    const arr2 = [1, 2, 3, 4, 5, 6];
    const [a,,,,,b] = arr2;
    console.log(a, b); // Prints 1 and 6

    // Rest operator (condenses objects to array)
    const [c, d, ...e] = arr2;
    console.log(c, d, e); // 1 and 2 and [3, 4, 5, 6]

}

// **** Aside: Arrays - Spread Operator **** //
// There is also a spread operator that looks like the rest operator.
// However, the spread operator does the opposite, and takes elements out of the source array (exposing them as individual elements).
console.log('Spread Operator');

{
    // Sample problem: Merge 2 arrays
    const arr1 = [3, 4, 5];
    const arr2 = [1, 2, arr1, 6]; // No good. Gives us a nested array [1, 2, [3, 4, 5], 6]
    const arr3 = [1, 2, ...arr1, 6] // [1, 2, 3, 4, 5, 6]
    console.log(`arr3 = ${arr3}`);

    // Pass array or part of an array to a function
    function add3Nums(x, y, z) {
        return x + y + z;
    }
    const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(`add3Nums = ${add3Nums(...arr4)}`);
}