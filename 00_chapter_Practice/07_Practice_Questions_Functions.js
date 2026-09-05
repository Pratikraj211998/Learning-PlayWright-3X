// ==========================================
// Practice Questions — Set 4: Functions
// Ordered from simple to hard.
// Solve each question below its comment block.
// ==========================================

// ---------- Basic ----------

// Q1. Write a function declaration `square(n)` that returns the square of a
//     number. Call it with 3 different values.


// Q2. Write the SAME function as a function expression, then again as an
//     arrow function. Confirm all three give the same output.


// Q3. Write a function `greetUser(name, greeting)` where `greeting` has a
//     default value of "Hello" if not provided. Call it both with and
//     without the second argument.


// ---------- Intermediate ----------

// Q4. Write a function `sumAll(...nums)` using rest parameters that adds up
//     any number of arguments passed to it. Test it with 2, 4, and 6 numbers.


// Q5. Write a function `describeStatus(code)` that returns "success",
//     "client error", "server error", or "unknown" based on an HTTP status
//     code (200s, 400s, 500s).


// Q6. Write an IIFE that runs once and logs "Config loaded" immediately,
//     without ever being called by name.


// Q7. Write a function `applyDiscount(price, discountFn)` that takes a price
//     and a function, and returns the result of calling discountFn(price).
//     Pass in a couple of different arrow functions as discountFn to test it
//     (e.g. one that takes 10% off, one that takes a flat 50 off).


// ---------- Hard ----------

// Q8. Write a closure-based function `makeBankAccount(balance)` that returns
//     an object with `deposit(amount)`, `withdraw(amount)`, and
//     `getBalance()` methods — the balance should be private (not directly
//     accessible from outside).


// Q9. Write a recursive function `factorial(n)` that calculates n! (e.g.
//     factorial(5) = 120). Include the base case.


// Q10. Write a recursive function `fibonacci(n)` that returns the nth
//      Fibonacci number (0, 1, 1, 2, 3, 5, 8...).


// Q11. Write a memoization wrapper: a function `memoize(fn)` that takes any
//      function and returns a new version of it that caches results by
//      argument, so calling it twice with the same input runs the
//      calculation only once (hint: use a closure over an object/Map).


// Q12. Write a function `makeMultiplier(factor)` that returns a NEW function
//      which multiplies any number by `factor`. Create `double` and `triple`
//      from it, and show they behave independently.


// ---------- Interview Process (theory + predict-the-output) ----------
// Answer these in a comment under each one.

// Q13. What's the difference between a function DECLARATION and a function
//      EXPRESSION when it comes to hoisting?


// Q14. Predict the output, then explain why:
//      console.log(typeof myFunc);
//      var myFunc = "I am a string";
//      function myFunc() { return "I am a function"; }
//      console.log(typeof myFunc);


// Q15. Why don't arrow functions have their own `this`? What do they use
//      instead?


// Q16. What is a closure, in your own words? Write a one-line example that
//      shows a variable being "remembered" after its outer function returns.


// Q17. What's the difference between a parameter and an argument?


// Q18. Predict the output, then explain why:
//      (function () { console.log("IIFE ran"); })();
//      function () { console.log("this one"); }();
