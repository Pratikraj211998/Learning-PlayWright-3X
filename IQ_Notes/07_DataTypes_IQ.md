# 🧠 Data Types in JavaScript

JavaScript is **dynamically typed** — a variable's type is determined at runtime by the value it holds, and can change if reassigned. Every value in JS falls into one of two buckets: **primitive** or **reference (non-primitive)**.

---

## 📊 Primitive vs Reference Types

| Aspect | Primitive | Reference (Non-Primitive) |
|---|---|---|
| **Types included** | `string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint` | `object`, `array`, `function`, `class`, `Date`, `Map`, `Set`, etc. |
| **Stored as** | Value itself, directly in the variable | A reference/pointer to a location in memory |
| **Copied by** | Value — copying creates a fully independent duplicate | Reference — copying copies the *pointer*, both variables point to the same data |
| **Mutability** | Immutable — the value itself can never be changed, only reassigned | Mutable — contents can be changed without reassigning the variable |
| **Compared with `===`** | Compares actual values | Compares references (same object in memory), not contents |
| **`typeof` result** | `"string"`, `"number"`, `"boolean"`, `"undefined"`, `"symbol"`, `"bigint"` | `"object"` (arrays, plain objects, `null`), `"function"` (functions, classes) |

---

## 📊 Full Type Breakdown

| Type | Example | `typeof` Result | Notes |
|---|---|---|---|
| **String** | `"hello"`, `'hi'`, `` `hey` `` | `"string"` | Any quoting style produces the same type |
| **Number** | `42`, `3.14`, `-7`, `NaN`, `Infinity` | `"number"` | Only one numeric type in JS — no separate int/float |
| **Boolean** | `true`, `false` | `"boolean"` | — |
| **Undefined** | `let x;` | `"undefined"` | Default value of an unassigned variable |
| **Null** | `let x = null;` | `"object"` ⚠️ | Long-standing JS bug, never fixed for backward compatibility |
| **Symbol** | `Symbol("id")` | `"symbol"` | Guaranteed-unique value, often used as object keys |
| **BigInt** | `123456789012345678901234567890n` | `"bigint"` | For integers beyond `Number.MAX_SAFE_INTEGER` |
| **Object** | `{ key: "value" }` | `"object"` | Key-value collection |
| **Array** | `[1, 2, 3]` | `"object"` | Arrays are specialized objects, not their own type |
| **Function** | `function () {}` | `"function"` | Technically an object that can be called |

---

## 📏 Rules

- Variables aren't bound to a type — `let x = 5; x = "now a string";` is completely legal.
- `typeof` returns a string identifying the type of a value.
- Primitives are compared **by value**; objects/arrays are compared **by reference**.
- Every value is truthy except the falsy values: `false`, `0`, `-0`, `""`, `null`, `undefined`, `NaN`.

---

## ⚠️ Exceptions & Quirks

- **`typeof null === "object"`** — a bug from JS's first release in 1995, permanently kept for backward compatibility.
- **`typeof NaN === "number"`** — `NaN` ("Not a Number") is, ironically, of type `number`.
- **`NaN !== NaN`** — `NaN` is the only value in JS that is never equal to itself; use `Number.isNaN(x)` or `Object.is(x, NaN)` to check for it.
- **`typeof [1,2,3] === "object"`** — no dedicated `"array"` type; use `Array.isArray(x)` to check specifically for arrays.
- **`typeof function(){} === "function"`** — functions get their own `typeof` result even though they're technically objects under the hood.
- **Two objects with identical contents are never `===` equal**: `{a:1} === {a:1}` is `false` — they're different references in memory.
- **`0.1 + 0.2 !== 0.3`** — floating-point precision limitation; `console.log(0.1 + 0.2)` prints `0.30000000000000004`.

---

## 🔍 Walkthrough

```js
let name = "Pratik";           // string
let age = 26;                   // number
let isEmployed = true;           // boolean
let notAssigned;                  // undefined
let empty = null;                  // "empty on purpose", typeof → "object"
let id = Symbol("uid");             // symbol, always unique
let bigNum = 9007199254740993n;      // bigint

let user = { name: "Pratik", age };   // object
let scores = [90, 85, 100];            // array (typeof → "object")
let greet = function () { return "hi"; }; // function

console.log(typeof name);       // "string"
console.log(typeof age);         // "number"
console.log(typeof empty);        // "object"  ⚠️ quirk
console.log(typeof scores);        // "object"  (not "array")
console.log(Array.isArray(scores)); // true — the correct way to check for arrays

let a = { x: 1 };
let b = a;          // `b` copies the reference, not the object
b.x = 99;
console.log(a.x);   // 99 — both point to the same object in memory
```

---

## ❓ Important Interview Questions

**Q1. Is JavaScript statically typed or dynamically typed?**
Dynamically typed — a variable's type is determined by its current value at runtime and can change on reassignment; there's no compile-time type checking (unless you add TypeScript on top).

**Q2. What's the difference between primitive and reference types?**
Primitives are stored and compared by value (fully independent copies). Reference types (objects, arrays, functions) are stored and compared by reference — copying a reference copies the pointer, not the underlying data.

**Q3. Why does `typeof null` return `"object"`?**
It's a bug baked into the very first JS engine in 1995 that couldn't be fixed later without breaking existing websites — it's now a permanent quirk of the spec.

**Q4. How many "number" types does JavaScript have?**
Just one — `number` — for both integers and floats, plus a separate `bigint` type introduced later for integers beyond the safe integer limit.

**Q5. How do you correctly check if a value is an array?**
`Array.isArray(value)` — not `typeof value`, since arrays report `"object"` under `typeof`.

**Q6. Why is `NaN !== NaN`?**
Per the IEEE 754 floating-point spec that JS numbers follow, `NaN` represents an undefined/unrepresentable numeric result and is defined to never equal itself. Use `Number.isNaN()` to test for it reliably.

**Q7. Why does `{a:1} === {a:1}` return `false`?**
Because `===` on objects compares references (memory addresses), not contents — these are two separate objects that happen to look the same.

**Q8. What are the falsy values in JavaScript?**
`false`, `0`, `-0`, `""` (empty string), `null`, `undefined`, and `NaN`. Every other value — including `"0"`, `[]`, and `{}` — is truthy.

---

## ⚡ TL;DR

- JS values are either **primitive** (`string`, `number`, `boolean`, `undefined`, `null`, `symbol`, `bigint` — compared by value) or **reference** (`object`, `array`, `function` — compared by reference).
- JS is **dynamically typed** — variables have no fixed type.
- Classic quirks: `typeof null === "object"`, `typeof NaN === "number"`, `NaN !== NaN`, arrays report `"object"` under `typeof`.
- Use `Array.isArray()` for arrays and `Number.isNaN()` for `NaN` — don't rely on `typeof` or `==` for those checks.
