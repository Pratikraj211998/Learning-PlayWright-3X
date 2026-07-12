// all numbers types in JavaScript numbers expect bigint are represented as double-precision 64-bit binary format IEEE 754 values. This means that they can represent a wide range of values, but they also have some limitations in terms of precision and range.

// JavaScript has a single number type, which is a floating-point number. It can represent both integers and decimals. However, there is also a separate BigInt type for representing large integers that exceed the range of the Number type.

let integerNumber = 42; // an integer
let floatingPointNumber = 3.14; // a floating-point number

let decimalNumber = 3.14; // a decimal number
let negativeNumber = -10; // a negative number
let exponentialNumber = 1.5e6; // exponential notation (1.5 * 10^6)
let hexadecimalNumber = 0xFF; // hexadecimal notation (255 in decimal)
let binaryNumber = 0b1010; // binary notation (10 in decimal)
let octalNumber = 0o12; // octal notation (10 in decimal)
let bigIntNumber = 1234567890123456789012345678901234567890n; // BigInt for large integers

console.log(typeof integerNumber); // "number"
console.log(typeof decimalNumber); // "number"
console.log(typeof floatingPointNumber); // "number"
console.log(typeof negativeNumber); // "number"
console.log(typeof exponentialNumber); // "number"
console.log(typeof hexadecimalNumber); // "number"
console.log(typeof binaryNumber); // "number"
console.log(typeof octalNumber); // "number"
console.log(typeof bigIntNumber); // "bigint"

// Note: The Number type in JavaScript can represent values from -(2^53 - 1) to 2^53 - 1. For integers larger than this range, you should use the BigInt type.      


// infinity and -infinity are special numeric values in JavaScript that represent positive and negative infinity, respectively. They are used to represent values that exceed the maximum or minimum representable number in JavaScript.

let positiveInfinity = Infinity; // represents positive infinity
let negativeInfinity = -Infinity; // represents negative infinity

console.log(positiveInfinity); // "Infinity"
console.log(negativeInfinity); // "-Infinity"

console.log(typeof positiveInfinity); // "number"
console.log(typeof negativeInfinity); // "number"

// Note: Infinity and -Infinity are considered numbers in JavaScript, but they are not finite values. They can be used in mathematical operations, but they have some special behaviors. For example, any finite number divided by zero will result in Infinity or -Infinity, depending on the sign of the number.  

// nan (Not-a-Number) is a special numeric value in JavaScript that represents an undefined or unrepresentable value, especially in the context of mathematical operations. It is used to indicate that a value is not a valid number.

let notANumber = NaN; // represents Not-a-Number

console.log(notANumber); // "NaN"
console.log(typeof notANumber); // "number"

// Note: NaN is considered a number in JavaScript, but it is not equal to any other value, including itself. This means that you cannot use the equality operator (== or ===) to check if a value is NaN. Instead, you should use the isNaN() function or the Number.isNaN() method to check for NaN values.