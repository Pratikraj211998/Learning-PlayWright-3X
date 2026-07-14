//Logical Operators

// Logical operators are used to combine or invert boolean values. They are commonly used in conditional statements and loops to control the flow of a program based on certain conditions.

// The main logical operators in JavaScript are:
// 1. AND (&&): Returns true if both operands are true, otherwise returns false.
// 2. OR (||): Returns true if at least one of the operands is true, otherwise returns false.
// 3. NOT (!): Inverts the boolean value of the operand. If the operand is true, it returns false, and vice versa.

//truth table for logical operators in JavaScript
// AND (&&) operator
// A     B     A && B
// true  true   true
// true  false  false
// false true   false
// false false  false

// OR (||) operator
// A     B     A || B
// true  true   true
// true  false  true
// false true   true
// false false  false

// NOT (!) operator
// A     !A
// true  false
// false true           


// Example of logical operators
let a = true;
let b = false;

console.log(a && b); // false
console.log(a && a); // true
console.log(a || b); // true
console.log(b || b); // false   
console.log(!a); // false 
console.log(!b); // true
      

// Note: Logical operators can be used with non-boolean values as well. In such cases, JavaScript will perform type coercion to convert the values to boolean before applying the logical operation. For example, the value 0 is considered false, while any non-zero number is considered true. Similarly, an empty string is considered false, while a non-empty string is considered true.
