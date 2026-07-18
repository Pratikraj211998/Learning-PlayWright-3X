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

<!-- More statement types (switch, loops, try/catch, etc.) will be added below as separate sections. -->
