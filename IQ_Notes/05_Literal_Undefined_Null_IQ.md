# 🧠 Literals, `undefined` & `null` in JavaScript

A **literal** is a fixed value written directly into the code (not computed, not a variable reference). `undefined` and `null` are both "empty" values but mean very different things.

---

## 📊 Literal Types Table

| Literal Type | Example | `typeof` Result |
|---|---|---|
| **Number** | `let age = 67;` | `"number"` |
| **String** | `let name = "John";` | `"string"` |
| **Boolean** | `let isActive = true;` | `"boolean"` |
| **Null** | `let isNull = null;` | `"object"` ⚠️ (famous JS quirk) |
| **Undefined** | `let isUndefined;` | `"undefined"` |
| **Symbol** | `let isSymbol = Symbol("mySymbol");` | `"symbol"` |
| **BigInt** | `let isBigInt = 123...n;` | `"bigint"` |
| **Object** | `let isObject = { key: "value" };` | `"object"` |
| **Array** | `let isArray = [1, 2, 3];` | `"object"` (arrays are objects) |
| **Function** | `let isFunction = function() {};` | `"function"` |
| **Arrow Function** | `let isArrowFunction = () => "Hello";` | `"function"` |
| **Class** | `let isClass = class MyClass {};` | `"function"` (classes are special functions) |

> `typeof` tells you the runtime type of any variable or literal — it's the go-to tool for checking what you're dealing with.

---

## 📊 `undefined` vs `null` Table

| Feature | `undefined` | `null` |
|---|---|---|
| **Meaning** | Variable exists but has not been assigned a value | Explicitly assigned to represent "no value" |
| **Who sets it** | JavaScript automatically, for uninitialized variables or missing function arguments/returns | The developer, on purpose |
| **Type (`typeof`)** | `"undefined"` — a primitive type of its own | `"object"` — a long-standing JS quirk |
| **Loose equality** | `undefined == null` → `true` | `undefined == null` → `true` |
| **Strict equality** | `undefined === null` → `false` | `undefined === null` → `false` |
| **Typical use** | Default/uninitialized state | Intentionally clearing or marking "empty" |

---

## 🔍 Walkthrough

### `06_Literal.js`
```js
let age = 67;                 // number literal
let name = "John";             // string literal
let isActive = true;           // boolean literal
let isNull = null;             // null literal
let isUndefined;               // undefined literal (declared, not assigned)
let isSymbol = Symbol("mySymbol"); // symbol literal
let isBigInt = 123456789012345678901234567890n; // BigInt literal
let isObject = { key: "value" }; // object literal
let isArray = [1, 2, 3];         // array literal
let isFunction = function () { return "Hello"; }; // function literal
let isArrowFunction = () => "Hello";               // arrow function literal
let isClass = class MyClass {};                     // class literal
```

### `06_undifine_null.js`
```js
var x;                  // declared, not assigned → undefined
console.log(x);          // undefined

var y = null;            // explicitly assigned "no value"
console.log(y);           // null

console.log(typeof x);     // "undefined"
console.log(typeof y);      // "object"

console.log(x == y);         // true  — loose equality treats them as equal
console.log(x === y);         // false — different types, strict equality fails

function exampleFunction(param) {}
console.log(exampleFunction()); // undefined — no return statement, no argument passed
```

### `null_IQ.js`
```js
let no_audi_pratik_has = null; // `null` here is just a value, NOT a reserved keyword misuse
console.log(typeof no_audi_pratik_has); // "object"
```
Note: `null` is a **keyword/literal**, not usable as a variable *name* — but it's perfectly valid as the *value* assigned to a variable, as shown above.

---

## ❓ Important Interview Questions

**Q1. What's the difference between `undefined` and `null`?**
`undefined` means a variable was declared but never given a value — JS sets this automatically. `null` means a developer deliberately assigned "no value" to represent emptiness.

**Q2. Why does `typeof null` return `"object"`?**
It's a bug from the very first JavaScript implementation (1995) that was never fixed, because fixing it would break existing code across the web. It's now permanently part of the spec.

**Q3. What does `undefined == null` evaluate to, and why?**
`true`. The loose equality (`==`) operator treats `undefined` and `null` as equal to each other (and only to each other) — a special case in the JS spec, without coercing either to a number/string first.

**Q4. What does `undefined === null` evaluate to, and why?**
`false`. Strict equality (`===`) checks type as well as value — `undefined` is of type `undefined`, `null` is of type `object`, so they can never be strictly equal.

**Q5. When does JavaScript automatically produce `undefined`?**
- A variable is declared but not assigned (`let x;`)
- A function has no `return` statement (or a bare `return;`)
- A function is called with fewer arguments than parameters
- Accessing a non-existent object property (`obj.missingKey`)

**Q6. Is `null` a primitive type?**
Yes — `null` is one of JavaScript's primitive values, even though `typeof null` misleadingly returns `"object"`.

**Q7. What's a "literal" in JavaScript?**
A fixed value written directly in source code — `42`, `"text"`, `true`, `null`, `{}`, `[]`, `function(){}` — as opposed to a value computed at runtime or referenced through a variable.

**Q8. What does `typeof` return for arrays, functions, and classes — and why does that surprise people?**
Arrays → `"object"` (arrays are just specialized objects). Functions and classes → `"function"` (classes are syntactic sugar over functions). There is no dedicated `"array"` or `"class"` type in `typeof`'s output.

**Q9. How would you safely check if something is `null`?**
Use strict equality: `value === null`. Avoid `==` for this unless you deliberately want to catch both `null` and `undefined` at once.

---

## ⚡ TL;DR

- A **literal** is a value written directly in code — numbers, strings, booleans, `null`, objects, arrays, functions, classes, etc.
- **`undefined`** = "not assigned yet," set automatically by JS.
- **`null`** = "intentionally empty," set explicitly by the developer.
- `typeof null` is `"object"` — a decades-old JS bug kept for backward compatibility.
- `undefined == null` is `true` (loose), but `undefined === null` is `false` (strict) — always prefer `===` in real code.
