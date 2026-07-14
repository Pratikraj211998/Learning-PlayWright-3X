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
//example of logical operators with non-boolean values
console.log(0 && 1); // 0 (false)
console.log(1 && 2); // 2 (true)
console.log(0 || 1); // 1 (true)
console.log(1 || 0); // 1 (true)
console.log(!0); // true
console.log(!1); // false   

// Note: Logical operators can also be used in combination with comparison operators to create more complex conditions. For example, you can use the AND operator to check if a number is within a certain range, or use the OR operator to check if a string matches one of several possible values.
//example of logical operators with comparison operators
let x = 10;
let y = 20;

console.log(x > 5 && y < 30); // true (both conditions are true)
console.log(x < 5 || y > 30); // false (both conditions are false)
console.log(!(x === 10)); // false (x is equal to 10, so the NOT operator inverts it to false)
console.log(x > 5 && y < 30 || x === 10); // true (the first condition is true, so the OR operator returns true)
console.log(x > 5 && (y < 30 || x === 10)); // true (the second condition is true, so the AND operator returns true)    
console.log((x > 5 && y < 30) || x === 10); // true (the first condition is true, so the OR operator returns true)  
