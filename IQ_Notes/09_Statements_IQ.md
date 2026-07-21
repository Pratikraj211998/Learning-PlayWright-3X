# 🧠 Statements in JavaScript

A **statement** is an instruction that performs an action — declare, branch, loop, or control program flow. This file covers one statement type at a time; more sections will be added here as each statement type is studied.

---

## 1️⃣ if...else

The `if...else` statement branches execution based on whether a condition is truthy or falsy.

### 📏 Rules

- `if (condition)` accepts **any expression**, not just a boolean — the result is coerced using the same truthy/falsy rules as logical operators.
- `else` is optional — an `if` can stand alone with no fallback branch.
- `else if` is not a separate keyword — it's just an `if` statement nested inside the `else` block.
- Only the branch whose condition matches actually runs; all others are skipped entirely (no fall-through, unlike `switch`).
- `if`/`else` without `{ }` only binds to the **single next statement** — good practice is to always use braces to avoid ambiguity.

### ⚠️ Exceptions & Gotchas

- **No braces binds only one statement**:
  ```js
  if (true) console.log("a"); console.log("b"); // "b" always runs — it's not part of the if
  ```
- **Truthy/falsy coercion surprises**: values like `0`, `""`, `null`, `undefined`, `NaN`, and `false` are all falsy; everything else (including `"0"`, `[]`, `{}`) is truthy.
  ```js
  if ("0") console.log("runs"); // runs — non-empty string is truthy
  if ([]) console.log("runs");   // runs — empty array is truthy
  ```
- **Assignment vs comparison typo**: `if (x = 5)` assigns `5` to `x` and then evaluates it as truthy, instead of comparing — always double-check `=` vs `==`/`===`.
- **Dangling else**: when `if` statements are nested without braces, an `else` binds to the **nearest unmatched `if`**, which may not be the one visually intended.

### 🔍 Walkthrough

```js
let age = 27;

if (age > 18) {
  console.log("go goa");
} else {
  console.log("not goa");
}
// age = 27 -> "go goa"

// else if chain
let score = 75;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 50) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
// score = 75 -> "Grade B"

// if with no else
let isLoggedIn = true;
if (isLoggedIn) {
  console.log("Welcome back");
}

// truthy/falsy coercion in a condition
let input = "";
if (input) {
  console.log("has input");
} else {
  console.log("empty input"); // "" is falsy
}

// nested if
let hasAccount = true;
let isVerified = false;
if (hasAccount) {
  if (isVerified) {
    console.log("Access granted");
  } else {
    console.log("Please verify your account");
  }
} else {
  console.log("Please create an account");
}
```

### ❓ Important Interview Questions

**Q1. Does `if` require its condition to be a boolean?**
No — `if` accepts any expression and coerces the result to a boolean using truthy/falsy rules. `if ("hello")`, `if ([])`, and `if ({})` all run their block because non-empty strings, arrays, and objects are truthy.

**Q2. What values are falsy in JavaScript?**
`false`, `0`, `-0`, `""`, `null`, `undefined`, and `NaN`. Every other value — including `"0"`, `[]`, and `{}` — is truthy.

**Q3. Is `else if` a separate keyword in JavaScript?**
No — it's just an `if` statement placed inside the `else` block of the outer `if`. JavaScript has no dedicated `elseif` syntax; the chain is nested `if`s formatted to read as one construct.

**Q4. What happens if you omit braces around an `if` body?**
Only the very next single statement is considered part of the `if` (or `else`). Any statement after that runs unconditionally, which is a common source of bugs — always using `{ }` avoids this.

**Q5. What's the "dangling else" problem?**
When `if` statements are nested without braces, an `else` binds to the **nearest** unmatched `if`, not necessarily the one it looks like it belongs to visually. Braces remove the ambiguity.

**Q6. What's a common typo bug involving `if`?**
Writing `if (x = 5)` (assignment) instead of `if (x == 5)` or `if (x === 5)` (comparison). The assignment sets `x` to `5` and the condition becomes truthy, silently changing program state instead of comparing it.

### ⚡ TL;DR

- `if`/`else` branches on a **coerced boolean**, not a strict one — know your truthy/falsy values.
- `else if` is nested `if`s, not a distinct keyword.
- Always use `{ }`, even for single-line bodies, to avoid the dangling-else and no-brace bugs.
- Watch for `=` vs `==`/`===` typos inside the condition.

---

## 2️⃣ switch

The `switch` statement compares one expression against several fixed `case` values and runs the matching block — a cleaner alternative to a long `if/else if` chain when checking one variable against many exact values.

### 📏 Rules

- `switch (expression)` compares the expression to each `case` value using **strict equality (`===`)** — no type coercion.
- Without a `break`, execution **falls through** into the next case(s) below, running their code too, until it hits a `break` or the end of the `switch`.
- `default` runs when no case matches. It's optional, and doesn't have to be the last case (though that's convention).
- Multiple `case` labels can be stacked with no code between them to intentionally share one block (grouping).
- All `case` blocks share **one scope** by default — declaring the same `let`/`const` name in two different cases throws a `SyntaxError` unless each case body is wrapped in its own `{ }`.
- `switch(true)` combined with conditions in each `case` mimics `if/else if` for range checks, since `switch` alone can't test ranges directly.

### ⚠️ Exceptions & Gotchas

- **Fall-through is easy to trigger by accident**:
  ```js
  switch ("apple") {
    case "apple": console.log("apple");   // no break!
    case "banana": console.log("banana"); break;
  }
  // logs both "apple" AND "banana" — the missing break lets it fall through
  ```
- **Strict comparison means type matters**: `switch ("5") { case 5: ... }` will **not** match `case 5`, because `"5" === 5` is `false`.
- **Shared block scope across cases**:
  ```js
  switch (type) {
    case "a":
      let result = "A"; // shared scope
      break;
    case "b":
      let result = "B"; // ❌ SyntaxError: 'result' has already been declared
      break;
  }
  ```
  Fix: wrap each case in `{ }` to give it its own block scope.
- **`switch` can't check ranges directly** — `case score >= 90:` inside a normal `switch (score)` doesn't work as expected; you need `switch (true)` with the conditions as the case values instead.

### 🔍 Walkthrough

```js
// Basic switch
let day = 3;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  default: console.log("Invalid day");
}
// "Wednesday"

// Grouping multiple cases into one block
let month = 4;
let season;
switch (month) {
  case 12: case 1: case 2: season = "Winter"; break;
  case 3: case 4: case 5: season = "Spring"; break;
  case 6: case 7: case 8: season = "Summer"; break;
  default: season = "Autumn";
}
console.log(season); // "Spring"

// Strict comparison proof
switch ("5") {
  case 5: console.log("number 5"); break;
  case "5": console.log("string '5'"); break;
}
// "string '5'" — proves switch uses === , not ==

// switch(true) pattern for ranges
let score = 82;
switch (true) {
  case score >= 90: console.log("Grade A"); break;
  case score >= 80: console.log("Grade B"); break;
  default: console.log("Grade F");
}
// "Grade B"
```

### ❓ Important Interview Questions

**Q1. Does `switch` use `==` or `===` to compare values?**
`===` (strict equality) — no type coercion happens, so `"5"` will never match `case 5`.

**Q2. What is fall-through, and why does it matter?**
When a `case` has no `break`, execution continues into the next case's code instead of exiting the `switch` — intentional when grouping cases, but a common bug when accidental.

**Q3. Is `default` required, and does it have to be last?**
No to both — `default` is optional (if omitted and nothing matches, the switch just does nothing), and it can technically be placed anywhere among the cases, though convention puts it last.

**Q4. Why would two `case` blocks declaring the same `let` variable throw an error?**
All cases in a `switch` share a single block scope by default, so redeclaring the same `let`/`const` name across cases is a duplicate declaration in that shared scope. Wrapping each case in `{ }` gives it an isolated scope, fixing it.

**Q5. How do you check ranges (like `score >= 90`) with a switch statement?**
Use the `switch(true)` pattern — switch on the literal `true`, and put the actual conditions as the `case` values. The first case that evaluates to `true` matches.

**Q6. When should you use `switch` instead of `if/else if`?**
When comparing one single variable against several distinct, exact values (e.g. day names, status codes, menu options) — it reads cleaner than a long `if/else if` chain. For ranges or multiple different variables, `if/else if` is usually clearer.

### ⚡ TL;DR

- `switch` compares one expression against several `case` values using **strict equality**.
- Missing `break` causes **fall-through** into the next case(s) — a top interview gotcha.
- `default` is optional and handles the no-match case.
- Stack empty `case` labels to group multiple values into one block.
- Wrap `case` bodies in `{ }` if you need block-scoped `let`/`const` per case.
- `switch(true)` lets you check ranges/conditions the way `if/else if` normally would.

---

<!-- More statement types (loops, try/catch, etc.) will be added below as separate sections. -->
