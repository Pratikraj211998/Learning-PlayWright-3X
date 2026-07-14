# 🧠 `var` vs `let` vs `const` in JavaScript

The three variable declaration keywords — same job (naming a value), very different rules for scope, hoisting, and mutability. This is one of the most common JS interview topics.

---

## 📊 Breakdown Table

| Aspect | `var` | `let` | `const` |
|---|---|---|---|
| **Scope** | Function-scoped (ignores blocks like `if`/`for`) | Block-scoped (`{ }`) | Block-scoped (`{ }`) |
| **Hoisting** | Hoisted and auto-initialized to `undefined` | Hoisted but **not** initialized — stuck in the **Temporal Dead Zone (TDZ)** until the line runs | Hoisted but **not** initialized — also in the TDZ |
| **Access before declaration** | Returns `undefined` (no error) | Throws `ReferenceError: Cannot access before initialization` | Throws `ReferenceError: Cannot access before initialization` |
| **Redeclaration (same scope)** | ✅ Allowed — `var x = 1; var x = 2;` is legal | ❌ `SyntaxError: Identifier has already been declared` | ❌ `SyntaxError: Identifier has already been declared` |
| **Reassignment** | ✅ Allowed | ✅ Allowed | ❌ `TypeError: Assignment to constant variable` |
| **Must initialize at declaration** | ❌ No — `var x;` is fine | ❌ No — `let x;` is fine | ✅ Yes — `const x;` alone is a `SyntaxError` |
| **Attaches to global object (`window`/`globalThis`)** | ✅ Yes, when declared at top level | ❌ No | ❌ No |
| **Mutating object/array contents** | N/A (scope/binding rule, not about contents) | ✅ Contents mutable | ✅ Contents mutable — only the *binding* is locked, not the value inside |
| **Recommended usage** | Avoid in modern code (legacy only) | Use when the variable will be reassigned (loop counters, accumulators) | ✅ Default choice — use unless you specifically need reassignment |

---

## 🔍 Example Walkthrough

### 1. Scope — function vs block

```js
function scopeTest() {
  if (true) {
    var a = "var value";
    let b = "let value";
    const c = "const value";
  }
  console.log(a); // "var value"  ✅ leaks out of the `if` block
  console.log(b); // ❌ ReferenceError: b is not defined
  console.log(c); // ❌ ReferenceError: c is not defined
}
```
`var` only cares about the enclosing **function**, not the `if` block — it leaks out. `let`/`const` respect the `{ }` block boundary.

### 2. Hoisting & the Temporal Dead Zone (TDZ)

```js
console.log(x); // undefined (hoisted + auto-initialized)
var x = 5;

console.log(y); // ❌ ReferenceError: Cannot access 'y' before initialization
let y = 5;

console.log(z); // ❌ ReferenceError: Cannot access 'z' before initialization
const z = 5;
```
All three are technically "hoisted" to the top of their scope during compilation, but only `var` gets a default value (`undefined`) immediately. `let`/`const` exist in a **Temporal Dead Zone** — known to the engine, but inaccessible — until their declaration line actually executes.

### 3. Redeclaration & Reassignment

```js
var count = 1;
var count = 2;   // ✅ fine, silently overwrites

let total = 1;
// let total = 2; // ❌ SyntaxError: already declared
total = 2;         // ✅ reassignment is fine

const MAX = 100;
// MAX = 200;      // ❌ TypeError: Assignment to constant variable
```

### 4. `const` locks the binding, not the value

```js
const user = { name: "Pratik" };
user.name = "Raj";      // ✅ allowed — mutating the object's contents
// user = {};            // ❌ TypeError — reassigning the binding itself

const arr = [1, 2, 3];
arr.push(4);              // ✅ allowed
// arr = [];               // ❌ TypeError
```

### 5. The classic `var` + loop + closure bug

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0);
}
// logs: 3, 3, 3   ❌ — one shared `i`, all callbacks see the final value

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 0);
}
// logs: 0, 1, 2   ✅ — each iteration gets its own `j` binding
```
This is one of the most-asked JS interview questions — `let` creates a **new binding per loop iteration**, `var` shares one binding across the whole loop.

---

## 🔁 Pipeline Diagram — What Happens During the Creation Phase

```
   JS engine starts executing a scope (function/block)
                │
                ▼
   ┌────────────────────────────┐
   │   Creation Phase (hoisting) │
   └────────────────────────────┘
                │
     ┌──────────┼───────────────┐
     ▼          ▼               ▼
   var x      let y           const z
     │          │               │
     ▼          ▼               ▼
 allocated &  allocated,      allocated,
 set to       NOT initialized NOT initialized
 `undefined`  → in TDZ        → in TDZ
     │          │               │
     ▼          ▼               ▼
 usable        ❌ ReferenceError ❌ ReferenceError
 immediately   if accessed      if accessed
 (as undefined) before its line before its line
                │               │
                ▼               ▼
   ┌────────────────────────────┐
   │   Execution Phase           │  → line actually runs,
   │   (declaration line runs)   │     y/z exit the TDZ and
   └────────────────────────────┘     get their real value
```

---

## ❓ Important Interview Questions

**Q1. What is the main difference between `var`, `let`, and `const`?**
Scope (function vs block), hoisting behavior (auto-initialized vs Temporal Dead Zone), and mutability (redeclarable/reassignable vs not) — see the breakdown table above for the full comparison.

**Q2. What is hoisting?**
JavaScript's behavior of processing variable and function declarations during a "creation phase," before the code actually executes line by line — the declaration is known to the engine ahead of time, even if not yet usable.

**Q3. What is the Temporal Dead Zone (TDZ)?**
The period between entering a scope and the actual `let`/`const` declaration line executing, during which the variable exists but accessing it throws a `ReferenceError`. `var` has no TDZ — it's usable immediately as `undefined`.

**Q4. Why does `var` "leak" out of an `if` block but `let` doesn't?**
Because `var` is function-scoped, not block-scoped — it only respects the boundary of the nearest enclosing function, ignoring `{ }` blocks like `if`, `for`, or `while`.

**Q5. Can you reassign a `const` variable?**
No — reassigning the binding throws `TypeError: Assignment to constant variable`. But if the value is an object or array, its *contents* can still be mutated (`const obj = {}; obj.x = 1;` is fine).

**Q6. Why does the classic `var` in a `for` loop + `setTimeout` print the same value every time?**
Because `var` creates one shared binding for the entire loop — by the time the callbacks run, the loop has finished and `i` holds its final value. `let` creates a fresh binding per iteration, so each callback captures its own snapshot.

**Q7. Does `var` attach to the global object?**
Yes — a top-level `var` declaration becomes a property of `window` (browser) or `global`/`globalThis` (Node). `let` and `const` do not.

**Q8. When should you use `let` over `const`?**
Only when you know the variable's value needs to be reassigned later (loop counters, accumulators, state that changes). Otherwise, default to `const`.

---

## ⚡ TL;DR

- **`var`** — function-scoped, hoisted with `undefined`, redeclarable, reassignable, leaks into `window`. Legacy — avoid in new code.
- **`let`** — block-scoped, hoisted but stuck in the TDZ until declared, not redeclarable, reassignable. Use for values that will change (loop counters, accumulators).
- **`const`** — block-scoped, hoisted but stuck in the TDZ, not redeclarable, not reassignable (but object/array *contents* are still mutable). **Default choice** for everything else.
- Interview one-liner: *"`var` is function-scoped and hoisted with a value; `let`/`const` are block-scoped and hoisted into the Temporal Dead Zone; `const` additionally locks the variable binding (not the value's contents) against reassignment."*
