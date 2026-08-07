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

## 🔒 Function Scope

Scope determines **where** a variable is visible/accessible. In JavaScript, scope is **lexical** — determined by where functions and blocks are physically written in the code, not by how/where they're called.

### 📏 Rules

- A function can access variables from its **own scope** and any **enclosing (outer) scope** — but not the reverse.
- An outer function **cannot** access variables declared inside an inner function.
- Nested functions form a **scope chain**: the engine looks for a variable in the current scope first, then walks outward through each enclosing scope, up to global.
- Global-scope variables are accessible everywhere, including deeply nested functions.

### ⚠️ Exceptions & Gotchas

- **Trying to access an inner function's variable from outside it throws a `ReferenceError`** — scope only flows outward-to-inward for *reading*, never inward-to-outward:
  ```js
  function outer() {
    let x = 10;
    function inner() {
      let y = 20;
      console.log(x); // ✅ inner can read outer's x
    }
    inner();
    // console.log(y); // ❌ ReferenceError — outer cannot read inner's y
  }
  ```
- Variables with the **same name at different scope levels** don't conflict — the innermost one simply shadows the outer one within its own scope, without altering the outer variable.

### 🔍 Walkthrough

```js
let env = "staging"; // global scope

function setupConfig() {
  let timeout = 3000; // local (function) scope
  console.log(env);     // ✅ can access global
  console.log(timeout);  // ✅ can access local
}

setupConfig();
console.log(env); // ✅ still accessible globally
// console.log(timeout); // ❌ ReferenceError — not accessible outside the function
```

---

## 🔒 Closures

A **closure** is a function that "remembers" the variables from its outer (enclosing) function's scope, even after that outer function has already finished running.

### 📏 Rules

- A closure is created whenever an **inner function is returned (or otherwise escapes) from an outer function** — the inner function keeps a live reference to the outer function's variables.
- The outer function's variables are **not** re-created on each call to the inner function — they persist in memory as long as the closure exists, forming private, per-instance state.
- Multiple calls to the outer function create **completely independent closures**, each with its own separate copy of the "remembered" variables.
- Closures are the mechanism behind private state in JS (before `class` private fields existed) — counters, rate limiters, memoization, retry trackers, etc.

### ⚠️ Exceptions & Gotchas

- **The outer function only runs once** — the closure keeps the *variables*, not the ability to re-run the outer function's setup code every call:
  ```js
  function startBrowser() {
    let name = "edge"; // set up once
    function installBrowser() {
      console.log(name); // remembered, even after startBrowser() has returned
    }
    return installBrowser;
  }
  const runTc = startBrowser(); // startBrowser() runs and finishes here
  runTc(); // "edge" — installBrowser still has access to `name`
  ```
- **Each call to the outer function creates a brand-new, independent closure** — calling `makeCounter()` twice gives two counters with separate state, not a shared one.
- **Returning multiple functions that close over the same variables lets them share state with each other** (like `increment`/`decrement`/`get` all sharing one `count`), which is how closures simulate private instance variables.
- A common bug: if a closure is expected to reset each call but the outer function was only called once, the "remembered" variable keeps accumulating instead of resetting — this is a feature, not a bug, but surprises people who expect fresh state every call.

### 🔍 Walkthrough

```js
// Classic counter — private state via closure
function makeCounter(start = 0) {
  let count = start; // "remembered" by all three returned methods
  return {
    increment() { count++; },
    decrement() { count--; },
    get() { return count; },
  };
}

let counter = makeCounter(0);
counter.increment();
counter.increment();
counter.increment();
console.log(counter.get()); // 3
counter.decrement();
console.log(counter.get()); // 2

// Retry tracker — closure persists `attempts` across calls
function maxRetryTracker(max) {
  let attempts = 0;
  function tryAgain(testName) {
    attempts++;
    if (attempts > max) {
      return `${testName} exceeded max retries (${max})`;
    }
    return `Attempt ${attempts}/${max} for ${testName}`;
  }
  return tryAgain;
}

let runTCRetry = maxRetryTracker(3);
console.log(runTCRetry("Login")); // "Attempt 1/3 for Login"
console.log(runTCRetry("Login")); // "Attempt 2/3 for Login"
console.log(runTCRetry("Login")); // "Attempt 3/3 for Login"
console.log(runTCRetry("Login")); // "Login exceeded max retries (3)"

// Rate limiter — same closure pattern, different use case
function makeRateLimiter(limit) {
  let calls = 0;
  function check() {
    calls++;
    return calls <= limit;
  }
  return check;
}

let limiter = makeRateLimiter(3);
console.log(limiter()); // true  (call 1)
console.log(limiter()); // true  (call 2)
console.log(limiter()); // true  (call 3)
console.log(limiter()); // false (call 4 — over the limit)
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

**Q10. What is lexical scope?**
Scope determined by where code is physically written in the source, not by how or where a function is called. An inner function can always see its outer function's variables because of where it's *defined*, regardless of where it's later invoked from.

**Q11. What is a closure, in simple terms?**
A function that "remembers" the variables from the scope it was created in, even after that outer scope has finished executing — created whenever an inner function is returned from (or otherwise escapes) an outer function.

**Q12. If you call `makeCounter()` twice, do both counters share the same count?**
No — each call to `makeCounter()` creates a brand-new, independent closure with its own separate `count` variable. The two counters are completely isolated from each other.

**Q13. Why does `installBrowser()` still work after `startBrowser()` has already finished running?**
Because `installBrowser` is a closure — it holds a live reference to `startBrowser`'s variables (like `name`), which stay in memory as long as the closure itself exists, regardless of whether the outer function has already returned.

**Q14. How do closures let you simulate "private" variables in JavaScript?**
A variable declared inside an outer function is never directly accessible from outside it — the only way to read or modify it is through inner functions that close over it and are deliberately exposed (like `increment`/`get` in a counter). This mimics private instance state without needing `class` private fields.

---

## ⚡ TL;DR

- Every function returns `undefined` unless it has an explicit `return` — logging is not returning.
- **Function declarations** are fully hoisted (callable before definition); **function expressions** and **arrow functions** are not.
- **Arrow functions** have no own `this`/`arguments` — they inherit from the enclosing scope, which makes them wrong for object methods but great for callbacks that need the outer `this`.
- **Rest** (`...args` in the definition) collects arguments into an array; **spread** (`...array` at the call site) expands an array into arguments — same syntax, opposite direction.
- **IIFE** — `(function(){...})()` — defines and runs a function once, immediately, in an isolated scope.
- A **named function expression** can reference itself internally (for recursion) via a name that isn't visible outside the expression.
- **Scope** flows outward-to-inward only — inner functions can read outer variables, never the reverse.
- **Closures** let an inner function keep "remembering" its outer function's variables after the outer function has already returned — each outer call creates its own independent closure, which is how counters, rate limiters, and retry trackers hold private, per-instance state.
