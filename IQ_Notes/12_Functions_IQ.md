# 🧠 Functions in JavaScript

A **function** is a reusable block of code that takes input (parameters), does something, and optionally returns a value — the core tool for avoiding repeated logic.

---

## 📊 The 4 Basic Function Shapes

| Type | Has Parameters? | Has Return? | Example | Result of calling it |
|---|---|---|---|---|
| **Type 1 — void** | ❌ No | ❌ No | `function greet(){ console.log("Hi"); }` | Returns `undefined` — logging isn't the same as returning |
| **Type 2 — param, no return** | ✅ Yes | ❌ No | `function greetByName(name){ console.log("Hi", name); }` | Assigning the call to a variable gives `undefined` |
| **Type 3 — no param, with return** | ❌ No | ✅ Yes | `function sayHello(){ return "hello"; }` | The returned value can be stored/used |
| **Type 4 — param + return** | ✅ Yes | ✅ Yes | `function sum(a,b){ return a+b; }` | The most common, most reusable shape |

> Every function returns **something** — if there's no explicit `return`, it implicitly returns `undefined`. `console.log(...)` inside a function is just a side effect; it does **not** make the function "return" anything.

---

## 📊 Declaration vs Expression vs Arrow Function

| Aspect | Function Declaration | Function Expression | Arrow Function |
|---|---|---|---|
| **Syntax** | `function greet(name) { return ...; }` | `const greet = function(name) { return ...; }` | `const greet = (name) => ...;` |
| **Hoisting** | Fully hoisted — name **and** body available before the line runs | Not hoisted the same way — the variable (`var`/`let`/`const`) is hoisted, but its value is `undefined`/TDZ until the assignment line runs | Same as expression — hoisted only as an uninitialized `let`/`const` binding (TDZ) |
| **Can call before defined?** | ✅ Yes | ❌ No — `TypeError`/`ReferenceError` depending on `var`/`let`/`const` | ❌ No — `ReferenceError` (TDZ) |
| **Has its own `this`?** | ✅ Yes | ✅ Yes | ❌ No — inherits `this` from the enclosing scope |
| **Has its own `arguments`?** | ✅ Yes | ✅ Yes | ❌ No — uses the enclosing scope's `arguments` (or none) |
| **Can be named anonymously?** | ❌ No — always needs a name | ✅ Yes — can be anonymous or named | ✅ Yes — always effectively anonymous |
| **Typical use** | Reusable, hoisting-dependent utilities | Passing functions as values, conditional definitions | Short callbacks, one-liners, preserving outer `this` |

---

## 📏 Rules

- **Parameters** are the named placeholders in the function definition (`function f(a, b)`); **arguments** are the actual values passed when calling it (`f(1, 2)`).
- A function with no `return` statement — or a bare `return;` — implicitly returns `undefined`.
- **Template literals** (`` `Hello, ${name}` ``) are commonly used inside `return` to build formatted strings from parameters.
- **Rest parameters** (`function f(...args)`) collect any number of arguments into a real array — used when a function should accept a variable number of inputs.
- **Spread** (`f(...array)`) expands an array into individual arguments at the **call site** — the opposite direction from rest, same `...` syntax.
- **IIFE (Immediately Invoked Function Expression)** — `(function(){ ... })()` — defines and calls a function in one step; it never needs to be called again, commonly used to create an isolated scope.
- Converting a regular function to an **arrow function**: remove the `function` keyword, and if the body is a single expression, remove `{ }`/`return` and add `=>`.

---

## ⚠️ Exceptions & Gotchas

- **Function declarations are fully hoisted — expressions and arrow functions are not**:
  ```js
  sayHello(); // ✅ works — "Hello, World!"
  function sayHello() { console.log("Hello, World!"); }

  greet(); // ❌ TypeError: greet is not a function
  var greet = function () { console.log("Hi"); };
  ```
- **A function declaration wins over a `var` of the same name during hoisting**, but a later assignment still overwrites it:
  ```js
  console.log(typeof myFunc); // "function" — declaration hoisted fully
  var myFunc = "I am a string";
  function myFunc() { return "I am a function"; }
  console.log(typeof myFunc); // "string" — the var assignment ran during execution and overwrote it
  ```
- **Arrow functions have no `this` of their own** — they capture `this` from wherever they're defined, which is why they break when used as object methods that need their own `this`.
- **Calling a function without an argument it expects doesn't throw** — the missing parameter is simply `undefined` inside the function body; JS doesn't enforce arity.
- **IIFEs need the wrapping parentheses** — `function(){ ... }()` is a syntax error on its own; wrapping it as `(function(){ ... })()` turns it into an expression that can be immediately invoked.
- **Named function expressions** can reference their own name internally for recursion, but that name isn't accessible outside the expression:
  ```js
  const factorial = function fact(n) {
    if (n <= 1) return 1;
    return n * fact(n - 1); // "fact" works here
  };
  console.log(factorial(5)); // 120
  // fact(5); // ❌ ReferenceError — "fact" only exists inside the expression
  ```
- **Declaring a function inside an `if` block is inconsistent** across engines/modes — prefer assigning a function expression to a variable declared outside the block instead.

---

## 🔍 Walkthrough

```js
// Type 1 — no param, no return (void)
function greet() { console.log("Hi"); }
let output = greet();
console.log(output); // undefined

// Type 2 — param, no return
function greetByName(name) { console.log("Hi", name); }
let name1 = greetByName("Sumit"); // logs "Hi Sumit"
console.log(name1); // undefined — nothing was returned

// Type 3 — no param, with return
function sayHello() {
  console.log("Hi");
  return "hello";
}
let call = sayHello();
console.log(call); // "hello"

// Type 4 — param + return
function sumOfTwoNumbers(a, b) { return a + b; }
console.log(sumOfTwoNumbers(4, 5)); // 9

// Template literals in a return
function greetTemplate(name) { return `Hello, ${name}`; }
console.log(greetTemplate("Alice")); // "Hello, Alice"

// Function expression
const greetExp = function (name) { return `Hello, ${name}`; };
console.log(greetExp("Bob"));

// Arrow function (progressively shortened)
const greetArrow1 = (name) => { return `Hello, ${name}!`; };
const greetArrow2 = (name) => `Hello, ${name}!`; // single-expression shorthand
console.log(greetArrow2("Pramod"));

// Multiline arrow function
const getResult = (score) => {
  if (score > 70) return "Pass";
  return "Fail";
};
console.log(getResult(78)); // "Pass"

// IIFE
(function () {
  console.log("Runs immediately, never called again");
})();
(() => {
  console.log("Arrow IIFE works too");
})();

// Rest parameters — collect arguments into an array
function hasError(...codes) {
  return codes.some((c) => c >= 400);
}
console.log(hasError(200, 201, 404)); // true

// Spread — expand an array into individual arguments
function add(a, b, c) { return a + b + c; }
let nums = [1, 2, 3];
console.log(add(...nums)); // 6

// Returning an array/object
function getCodes() { return [200, 404, 500]; }
console.log(getCodes());
```

---

## ❓ Important Interview Questions

**Q1. What's the difference between a parameter and an argument?**
A parameter is the placeholder name in the function's definition (`function f(a, b)`); an argument is the actual value passed in when the function is called (`f(1, 2)`).

**Q2. What does a function return if it has no `return` statement?**
`undefined` — every function call evaluates to something, and without an explicit `return`, that something defaults to `undefined`. `console.log()` inside the function does not count as returning a value.

**Q3. Can you call a function before it's defined in the file?**
Only if it's a **function declaration** — those are fully hoisted (name and body). Function expressions and arrow functions assigned to `var`/`let`/`const` are not hoisted the same way and will throw if called too early.

**Q4. Why does an arrow function break when used as an object method needing `this`?**
Arrow functions don't have their own `this` — they inherit it from the surrounding scope at the time they're defined, not from how they're called. A regular `function` keyword method binds `this` to whatever object called it.

**Q5. What's an IIFE and why use one?**
An Immediately Invoked Function Expression — `(function(){...})()` — defines and executes a function in a single step. It's used to create an isolated scope that runs once, without leaving named variables/functions in the outer scope.

**Q6. What's the difference between rest parameters and the spread operator? They both use `...`.**
Rest (`function f(...args)`) **collects** multiple passed arguments into a real array, used in a function's parameter list. Spread (`f(...array)`) **expands** an array into individual arguments, used at the function call site. Same syntax, opposite direction.

**Q7. Why does `console.log(typeof myFunc)` print `"function"` first and `"string"` later in the same file, given `var myFunc = "text"; function myFunc(){}`?**
During hoisting, the function declaration is hoisted fully (including its body), so `myFunc` is a function from the very top of the scope. The `var myFunc = "text"` hoists only the declaration (not the value) — its assignment still happens in order during execution, so once that line runs, it overwrites the function with the string.

**Q8. What is a named function expression, and why give a name to an otherwise-anonymous expression?**
`const factorial = function fact(n) { ... }` — the name `fact` is only accessible **inside** the function body itself, commonly used to let the function call itself recursively without depending on the outer variable name (`factorial`), which could later be reassigned.

**Q9. Does JavaScript enforce the number of arguments passed to a function?**
No — calling a function with fewer arguments than parameters simply leaves the missing ones as `undefined` inside the function body; calling with extra arguments just ignores the extras (unless you use `arguments` or rest parameters to access them).

---

## ⚡ TL;DR

- Every function returns `undefined` unless it has an explicit `return` — logging is not returning.
- **Function declarations** are fully hoisted (callable before definition); **function expressions** and **arrow functions** are not.
- **Arrow functions** have no own `this`/`arguments` — they inherit from the enclosing scope, which makes them wrong for object methods but great for callbacks that need the outer `this`.
- **Rest** (`...args` in the definition) collects arguments into an array; **spread** (`...array` at the call site) expands an array into arguments — same syntax, opposite direction.
- **IIFE** — `(function(){...})()` — defines and runs a function once, immediately, in an isolated scope.
- A **named function expression** can reference itself internally (for recursion) via a name that isn't visible outside the expression.
