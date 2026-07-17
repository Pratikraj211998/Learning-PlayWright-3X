//Ternary operator

// The ternary operator is a shorthand for an if-else statement. It takes three operands, hence the name "ternary".
// Syntax: condition ? expressionIfTrue : expressionIfFalse
// If the condition is truthy, the expression before the colon (:) runs, otherwise the expression after it runs.

// Example 1: basic usage instead of if-else
let age = 20;
let canVote = age >= 18 ? "Yes" : "No"; // condition ? true-case : false-case

console.log(canVote); // Yes
console.log(typeof canVote); // string

// Example 2: assigning a number based on a condition
let num = -5;
let sign = num >= 0 ? 1 : -1;

console.log(sign); // -1
console.log(typeof sign); // number

// Example 3: ternary operator with a boolean condition
let isLoggedIn = false;
let message = isLoggedIn ? "Welcome back!" : "Please log in.";

console.log(message); // Please log in.
console.log(typeof isLoggedIn); // boolean



