# 🧠 Identifiers in JavaScript

An **identifier** is the name you give to a variable, function, class, or parameter. JavaScript has a few simple rules for what makes an identifier valid.

---

## 📊 Rules Table

| Rule | Allowed | Not Allowed |
|---|---|---|
| **Can start with** | letter (`a-z`, `A-Z`), `$`, or `_` | a digit |
| **Can contain** | letters, digits, `$`, `_` | spaces, symbols like `-`, `%`, `@` |
| **Case sensitivity** | `myName` and `myname` are different identifiers | — |
| **Reserved keywords** | any name that isn't a JS keyword (`if`, `let`, `class`...) | using a keyword as an identifier (`let let = 5;` ❌) |
| **Redeclaring with `let`/`const`** | one declaration per name per scope | declaring the same name twice in the same scope |
| **Reassigning with `let`** | ✅ allowed | `const` cannot be reassigned |

---

## 🔍 Walkthrough — `03_identifieRule.js`

```js
var a = 10;          // ✅ simple lowercase identifier
console.log(a);

var p = 20;           // ✅ single letter, valid
var q = 30;           // ✅ single letter, valid
var $ = 40;            // ✅ `$` alone is a valid identifier (common in jQuery/frameworks)

let _ = 50;            // ✅ `_` alone is a valid identifier (common for "unused" values)

let pratik = 60;        // ✅ plain word

let string = "Hello World"; // ✅ `string` is NOT a reserved keyword in JS, just a type name in other languages
console.log(string);

// let 45 = 45;         // ❌ not allowed — identifiers can't start with a digit

let myName = "Pratik";
// let myName = "Pra"; // ❌ not allowed — `myName` already declared with `let` in this scope
```

---

## ⚡ TL;DR

- An identifier can start with a **letter, `$`, or `_`** — never a digit.
- After the first character, digits are fine (`user1`, `page2`).
- Identifiers are **case-sensitive** (`myName` ≠ `myname`).
- You can't use a **reserved keyword** as an identifier (`let`, `if`, `class`, etc.).
- You can't **redeclare** the same `let`/`const` identifier in the same scope, but you *can* reassign a `let` to a new value.
- `$` and `_` are valid identifiers on their own — commonly used for "throwaway" or utility values.
