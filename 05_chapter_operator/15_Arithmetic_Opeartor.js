// Arithmetic_Opeartor
// +, -, *, /, %, ++, --    

let a = 10;
let b = 3;

let sum = a + b; // Addition
console.log("Sum: " + sum); // Output: Sum: 13

let difference = a - b; // Subtraction
console.log("Difference: " + difference); // Output: Difference: 7

let product = a * b; // Multiplication
console.log("Product: " + product); // Output: Product: 30

let quotient = a / b; // Division
console.log("Quotient: " + quotient); // Output: Quotient: 3.3333333333333335

let remainder = a % b; // Modulus (Remainder)
console.log("Remainder: " + remainder); // Output: Remainder: 1

let exponentiation = a ** b; // Exponentiation
console.log("Exponentiation: " + exponentiation); // Output: Exponentiation: 1000

let modulus = a % b; // Modulus (Remainder)
console.log("Modulus: " + modulus); // Output: Modulus: 1   


a++; // Increment (Postfix)
console.log("Incremented a (Postfix): " + a); // Output: Incremented a (Postfix): 11
// what is the increment (postfix) operator= it increases the value of a variable by 1, but it returns the original value before the increment. In this case, a was 10, and after the increment, it becomes 11.
// output: Incremented a (Postfix): 11 

b--; // Decrement (Postfix)
console.log("Decremented b (Postfix): " + b); // Output: Decremented b (Postfix): 2
// what is the decrement (postfix) operator= it decreases the value of a variable by 1, but it returns the original value before the decrement. In this case, b was 3, and after the decrement, it becomes 2.
// output: Decremented b (Postfix): 2

++a; // Increment (Prefix)
console.log("Incremented a (Prefix): " + a); // Output: Incremented a (Prefix): 12
// what is the increment (prefix) operator= it increases the value of a variable by 1, and it returns the new value after the increment. In this case, a was 11, and after the increment, it becomes 12.
// output: Incremented a (Prefix): 12

--b; // Decrement (Prefix)
console.log("Decremented b (Prefix): " + b); // Output: Decremented b (Prefix): 1
// what is the decrement (prefix) operator= it decreases the value of a variable by 1, and it returns the new value after the decrement. In this case, b was 2, and after the decrement, it becomes 1.
// output: Decremented b (Prefix): 1    


// other arithmetic operators in JavaScript include the following:
// 1. Unary plus (+): Converts a value to a number. For example, +true returns 1, and +false returns 0.
// 2. Unary negation (-): Negates a number. For example, -5 returns -5, and -(-5) returns 5.
// 3. Bitwise operators: Perform bit-level operations on numbers, such as AND (&), OR (|), XOR (^), NOT (~), left shift (<<), right shift (>>), and unsigned right shift (>>>).
// 4. Math object methods: JavaScript provides a Math object with various methods for performing mathematical operations, such as Math.sqrt(), Math.pow(), Math.abs(), Math.floor(), Math.ceil(), Math.round(), and more.       

// Note: When performing arithmetic operations in JavaScript, it's important to be aware of the data types involved. If you perform arithmetic operations on non-numeric values, JavaScript will attempt to convert them to numbers, which can lead to unexpected results. For example, adding a number and a string will result in string concatenation rather than numeric addition.

// Note: JavaScript follows the order of operations (PEMDAS/BODMAS) when evaluating arithmetic expressions. Parentheses have the highest precedence, followed by exponentiation, multiplication/division/modulus, and finally addition/subtraction. 
// Note: JavaScript also supports operator overloading for certain operators, such as the + operator for string concatenation. When used with strings, the + operator concatenates them instead of performing numeric addition. 
// Note: JavaScript has a special behavior for the division operator when dividing by zero. Dividing a positive number by zero results in Infinity, while dividing a negative number by zero results in -Infinity. Dividing zero by zero results in NaN (Not-a-Number). 
// Note: JavaScript has a special behavior for the modulus operator when dealing with negative numbers. The result of the modulus operation will have the same sign as the dividend (the number being divided). For example, -10 % 3 results in -1, while 10 % -3 results in 1.

// program to check the arithmetic operators in JavaScript
let x = 5;
let y = 2;

console.log("x + y = " + (x + y)); // Output: x + y = 7
console.log("x - y = " + (x - y)); // Output: x - y = 3
console.log("x * y = " + (x * y)); // Output: x * y = 10
console.log("x / y = " + (x / y)); // Output: x / y = 2.5
console.log("x % y = " + (x % y)); // Output: x % y = 1
console.log("++x = " + (++x)); // Output: ++x = 6
console.log("--y = " + (--y)); // Output: --y = 1       
console.log("x ** y = " + (x ** y)); // Output: x ** y = 36 
console.log("x + '5' = " + (x + '5')); // Output: x + '5' = 65 (string concatenation)   
console.log("'5' + x = " + ('5' + x)); // Output: '5' + x = 56 (string concatenation)
console.log("x + true = " + (x + true)); // Output: x + true = 6 (true is converted to 1)
console.log("x + false = " + (x + false)); // Output: x + false = 5 (false is converted to 0)
console.log("x + null = " + (x + null)); // Output: x + null = 5 (null is converted to 0)
console.log("x + undefined = " + (x + undefined)); // Output: x + undefined = NaN (undefined is converted to NaN)
