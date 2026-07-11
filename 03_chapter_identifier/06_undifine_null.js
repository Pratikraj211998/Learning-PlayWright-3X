// Topic = null and undefined in JavaScript

/* simple definition 
undefined: A variable exists but has not been assigned a value. It is the default value of uninitialized variables.
null: A variable has been explicitly assigned a value of null, indicating the absence of any object value.
*/

var x; // x is declared but not assigned a value, so it is undefined
console.log(x); // Output: undefined

var y = null; // y is explicitly assigned a value of null
console.log(y); // Output: null

// Checking types using typeof operator
console.log(typeof x); // Output: "undefined"
console.log(typeof y); // Output: "object" (this is a known quirk in JavaScript)

// comparing undefined and null
console.log(x == y); // Output: true (they are considered equal in value)
console.log(x === y); // Output: false (they are not the same type)

// Example of using null and undefined in functions
function exampleFunction(param) {


}

console.log(exampleFunction(
    // no return statement, so it returns undefined
)); // Output: undefined (no argument passed, so param is undefined)
/* 
  feature            !undefined                                                                 ! null
    meaning         variable exists but has not been assigned a value                        variable has been explicitly assigned a value of null, indicating the absence of any object value
    who sets it     JavaScript automatically assigns undefined to uninitialized variables    Developers explicitly assign null to indicate the absence of a value
    type             undefined is a primitive type                                           null is an object type   
    comparison==     undefined == null is true                                               undefined === null is false
    comarison===     undefined === null is false                                             undefined == null is true

*/
