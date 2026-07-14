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

## 🎨 Naming Conventions — `03_identifieRule2.js`

Naming *conventions* aren't enforced by the JS language itself — they're community/style standards that make code readable and consistent.

| Convention | Style | Used for | Example |
|---|---|---|---|
| **camelCase** | first word lowercase, each following word capitalized | variables, functions (JS standard) | `myAge`, `mySalary`, `itloveCoding` |
| **PascalCase** | every word capitalized, including the first | classes, constructor functions | `MyName`, `MyAge`, `class Person {}` |
| **snake_case** | lowercase words separated by underscores | not standard in JS, but seen in some data/config keys or ported code | `my_name`, `my_age` |
| **SCREAMING_SNAKE_CASE** | all uppercase, underscore-separated | constants that never change | `MAX_SIZE`, `API_KEY`, `DATABASE_URL` |
| **Hungarian Notation** | prefix with a type abbreviation | legacy style, rare in modern JS | `strName` (string), `intAge` (integer), `boolIsStudent` (boolean) |

```js
let myName = "Pratik";
// let myName = "Pra"; // ❌ not allowed, redeclaration of a `let` in the same scope

// 1. camelCase — standard for variable/function names in JavaScript
let myAge = 25;
let mySalary = 10000;
let itloveCoding = true;

// 2. PascalCase — standard for classes and constructor functions
let MyName = "Pratik";
let MyAge = 25;

// 3. snake_case — underscore separated, not idiomatic JS but valid syntax
let my_name = "Pratik";
let my_age = 25;

// 4. SCREAMING_SNAKE_CASE — uppercase underscore separated, used for constants
const MAX_SIZE = 100;
const API_KEY = "1234567890";
const DATABASE_URL = "https://example.com/database";

// 5. Hungarian Notation — prefixing the name with a type indicator
let strName = "Pratik";   // string
let intAge = 25;          // integer
let boolIsStudent = true;  // boolean
```

> ⚠️ All five styles above are **syntactically valid** identifiers — JS doesn't enforce naming convention, only the hard rules in the table above. Picking the *right* convention is a style/readability choice, not a language requirement. Modern JS practice: **camelCase** for variables/functions, **PascalCase** for classes, **SCREAMING_SNAKE_CASE** for true constants — avoid Hungarian notation and snake_case unless matching an existing codebase style.

---

## ❓ Important Interview Questions

**Q1. What is an identifier in JavaScript?**
The name given to a variable, function, class, or parameter — anything you define and later refer to by name.

**Q2. Can an identifier start with a number?**
No — an identifier must start with a letter, `$`, or `_`. Digits are only allowed after the first character (`user1` is valid, `1user` is not).

**Q3. Is JavaScript case-sensitive for identifiers?**
Yes. `myName`, `MyName`, and `myname` are three completely distinct identifiers.

**Q4. Can you use a reserved keyword as an identifier?**
No — `let if = 5;` or `let class = "x";` throw a `SyntaxError`, because the parser has already assigned those words a fixed grammatical meaning.

**Q5. What happens if you redeclare the same `let`/`const` identifier in the same scope?**
`SyntaxError: Identifier 'x' has already been declared` — unlike `var`, `let`/`const` don't allow redeclaration in the same scope.

**Q6. Are `$` and `_` valid identifiers by themselves?**
Yes — both are legal standalone identifiers. `$` is common in libraries like jQuery; `_` is often used for "throwaway" or intentionally unused values.

**Q7. What's the difference between an identifier rule and a naming convention?**
Rules (start character, no keywords, case sensitivity, etc.) are enforced by the JS engine — breaking them causes a syntax error. Conventions (camelCase, PascalCase, etc.) are just style choices the community follows for readability; JS doesn't enforce them at all.

**Q8. Why is camelCase preferred for variables and PascalCase for classes?**
It's a widely adopted convention (not a language rule) that makes it instantly visually clear whether a name refers to a class/constructor (`PascalCase`, used with `new`) or a regular variable/function (`camelCase`).

---

## ⚡ TL;DR

- An identifier can start with a **letter, `$`, or `_`** — never a digit.
- After the first character, digits are fine (`user1`, `page2`).
- Identifiers are **case-sensitive** (`myName` ≠ `myname`).
- You can't use a **reserved keyword** as an identifier (`let`, `if`, `class`, etc.).
- You can't **redeclare** the same `let`/`const` identifier in the same scope, but you *can* reassign a `let` to a new value.
- `$` and `_` are valid identifiers on their own — commonly used for "throwaway" or utility values.
- Naming **conventions** (camelCase, PascalCase, snake_case, SCREAMING_SNAKE_CASE, Hungarian notation) are style choices, not language rules — JS accepts all of them syntactically.
- Modern JS practice: **camelCase** for variables/functions, **PascalCase** for classes, **SCREAMING_SNAKE_CASE** for constants.
