//Comparsion Operator (will always return boolean value , true or false)

// = , == , === , != , !== , > , < , >= , <=    

// = (assignment operator) is used to assign a value to a variable
// == losse comparsion
// === strict comparsion
// != not equal
// !== not equal (strict)
// > greater than
// < less than
// >= greater than or equal to
// <= less than or equal to

// expample of comparsion operator
let a = 10;
let b = 20;

console.log(a == b); // false
console.log(a === b); // false
console.log(a != b); // true
console.log(a !== b); // true
console.log(a > b); // false
console.log(a < b); // true
console.log(a >= b); // false
console.log(a <= b); // true

// tricky example of comparsion operator
// console.log(5 == "5"); // lose couple comparsion , value ..output true
// console.log(5 === "5"); // strict comparsion , value and type..output false
// console.log(5 != "5"); // lose couple comparsion , value ..output false
// console.log(5 !== "5"); // strict comparsion , value and type..output true

// === Strict check we will check for both the datatype and value
// == Lose check we will check either value or data type.


//note: In JavaScript, the comparison operators are used to compare values and return a boolean result (true or false). The equality operators (== and ===) are used to compare values for equality, while the inequality operators (!= and !==) are used to compare values for inequality. The relational operators (>, <, >=, <=) are used to compare values based on their relative order. It is important to understand the difference between loose and strict comparison to avoid unexpected results in your code.    
// cheet sheet for comparsion operator in JavaScript
// 1. == (Equal to): Compares two values for equality, performing type coercion if necessary. Returns true if the values are equal, false otherwise.
// 2. === (Strict equal to): Compares two values for equality without performing type coercion. Returns true if the values are equal and of the same type, false otherwise.
// 3. != (Not equal to): Compares two values for inequality, performing type coercion if necessary. Returns true if the values are not equal, false otherwise.
// 4. !== (Strict not equal to): Compares two values for inequality without performing type coercion. Returns true if the values are not equal or of different types, false otherwise.
// 5. > (Greater than): Compares two values and returns true if the left value is greater than the right value, false otherwise.
// 6. < (Less than): Compares two values and returns true if the left value is less than the right value, false otherwise.
// 7. >= (Greater than or equal to): Compares two values and returns true if the left value is greater than or equal to the right value, false otherwise.
// 8. <= (Less than or equal to): Compares two values and returns true if the left value is less than or equal to the right value, false otherwise. 

