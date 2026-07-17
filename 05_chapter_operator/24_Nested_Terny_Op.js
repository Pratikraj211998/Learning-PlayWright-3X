//Nested Ternary Operator

// A nested ternary is a ternary operator used inside another ternary's true or false branch.
// It lets you chain multiple conditions together like an if-else-if ladder, but as a single expression.
// Syntax: condition1 ? result1 : condition2 ? result2 : condition3 ? result3 : defaultResult
// Use with care — more than 2-3 levels of nesting quickly becomes hard to read.

// Example 1: grading system based on marks
// Parentheses added below purely to show HOW it groups (JS treats ? : as right-associative,
// so it is the same as the non-parenthesized version) — each ( ) is the "else, check the next condition" branch.
// Multiple Condition

let age1 = 26;
//   age > 18 -> he will goa, else not else
// drink > 25  yes, else no 
let is_pramod_enjoy = age1> 18 ? (age1 > 26 ? "Drink" : "No") : false;
console.log(`Can pramod Drink? : ${is_pramod_enjoy}`);

let marks = 75;
let grade = marks >= 90 ? "A" : (marks >= 75 ? "B" : (marks >= 50 ? "C" : "F"));
//                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                        if not >= 90, check the next condition (marks >= 75), and so on

console.log(grade); // B
console.log(typeof grade); // string

// Example 2: categorizing a number as negative, zero, or positive
let num = 0;
let category = num > 0 ? "Positive" : (num < 0 ? "Negative" : "Zero");
//                        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                        if not > 0, check the next condition (num < 0), else "Zero"

console.log(category); // Zero
console.log(typeof num); // number

// Example 3: nested ternary with boolean conditions (age-based ticket pricing)
let age = 65;
let isStudent = false;
let ticketPrice = age < 12 ? 5 : (age >= 60 ? 8 : (isStudent ? 10 : 15));
//                          ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
//                          if not < 12 (not a child), check the next condition (age >= 60, senior),
//                          then the next (isStudent), else the final fallback price

console.log(ticketPrice); // 8
console.log(typeof ticketPrice); // number

// Note: the same logic written with if-else-if for comparison — notice the ternary version is more compact
// but reads less clearly once conditions increase, since each ternary has to be mentally "unwrapped".
function getGradeWithIfElse(marks) {
  if (marks >= 90) return "A";
  else if (marks >= 75) return "B";
  else if (marks >= 50) return "C";
  else return "F";
}

console.log(getGradeWithIfElse(75)); // B

// Tip: when nesting gets deep, prefer if-else-if, a lookup object, or a switch statement for readability.
