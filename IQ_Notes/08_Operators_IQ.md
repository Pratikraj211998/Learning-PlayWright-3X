# 🧠 Operators in JavaScript

Operators perform actions on values (**operands**) — arithmetic, comparison, logic, assignment, and more. JavaScript's coercion rules make a few of these behave in ways that surprise people, especially in interviews.

---

## 📊 Categories Table

| Category | Operators | Purpose |
|---|---|---|
| **Arithmetic** | `+` `-` `*` `/` `%` `**` `++` `--` | Basic math operations |
| **Assignment** | `=` `+=` `-=` `*=` `/=` `%=` `**=` | Assign or update a variable's value |
| **Comparison** | `==` `===` `!=` `!==` `>` `<` `>=` `<=` | Compare two values, return a boolean |
| **Logical** | `&&` `\|\|` `!` | Combine/invert boolean expressions |
| **Bitwise** | `&` `\|` `^` `~` `<<` `>>` `>>>` | Operate on the binary representation of numbers |
| **Ternary** | `condition ? a : b` | Inline if/else as an expression |
| **Nullish Coalescing** | `??` | Fallback only on `null`/`undefined` (not other falsy values) |
| **Optional Chaining** | `?.` | Safely access nested properties without throwing on `null`/`undefined` |
| **Logical Assignment** | `&&=` `\|\|=` `??=` | Combine logical check + assignment in one step |
| **String** | `+` | Concatenation when either operand is a string |
| **Spread / Rest** | `...` | Expand an iterable, or collect remaining args/items |
| **Type / Object** | `typeof` `instanceof` `in` `delete` `void` | Inspect, test, or remove values |
| **Comma** | `,` | Evaluate multiple expressions, return the last one |

---

## 📏 Rules

- `==` (loose equality) performs **type coercion** before comparing; `===` (strict equality) compares value **and** type with no coercion.
- `&&` and `||` **short-circuit** — they stop evaluating as soon as the result is determined, and return one of the actual operand values (not always `true`/`false`).
- `??` only falls back when the left side is exactly `null` or `undefined` — unlike `||`, it does not treat `0`, `""`, or `false` as reasons to fall back.
- Operator **precedence** determines evaluation order when operators are mixed (e.g. `*`/`/` before `+`/`-`), and can be overridden with `()`.
- `+` triggers **string concatenation** if either operand is a string; all other arithmetic operators (`-`, `*`, `/`) force both operands to numbers.

---

## ⚠️ Exceptions & Gotchas

- **`"5" + 3` → `"53"`** but **`"5" - 3` → `2`** — `+` concatenates when a string is involved, while `-` always coerces to numbers first.
- **`[] + []` → `""`**, **`[] + {}` → `"[object Object]"`** — arrays/objects get coerced to strings first when used with `+`.
- **`0 == "0"` → `true`**, but **`0 === "0"` → `false`** — classic loose vs strict equality trap.
- **`null == undefined` → `true`**, but **`null === undefined` → `false`** — they're only loosely equal to each other, never to anything else.
- **`NaN == NaN` → `false`** — even loose equality can't make `NaN` equal itself.
- **`0 ?? "default"` → `0`**, but **`0 || "default"` → `"default"`** — `??` only cares about `null`/`undefined`, `||` cares about *any* falsy value.
- **`typeof NaN === "number"`** and **`typeof (1/0) === "number"`** (`Infinity`) — dividing by zero doesn't throw in JS, it returns `Infinity`.
- **`a?.b?.c`** returns `undefined` (not an error) if `a` or `a.b` is `null`/`undefined`, instead of throwing `Cannot read property 'c' of undefined`.

---

## 🔍 Walkthrough

```js
// Arithmetic
console.log(10 % 3);      // 1  — remainder
console.log(2 ** 3);       // 8  — exponentiation

// String coercion gotchas
console.log("5" + 3);       // "53"  — string concatenation
console.log("5" - 3);        // 2     — numeric subtraction, "5" coerced to 5

// Comparison
console.log(0 == "0");        // true  — loose equality coerces types
console.log(0 === "0");        // false — strict equality checks type too
console.log(null == undefined); // true
console.log(null === undefined); // false

// Logical short-circuiting
const user = null;
console.log(user && user.name); // null — stops at `user`, never touches `.name`
console.log(user || "Guest");    // "Guest" — falls back on any falsy value

// Nullish coalescing vs OR
let count = 0;
console.log(count || 10); // 10 — `||` treats 0 as falsy, falls back
console.log(count ?? 10);  // 0  — `??` only falls back on null/undefined

// Optional chaining
const profile = { address: null };
console.log(profile.address?.city); // undefined, no crash

// Ternary
const age = 20;
console.log(age >= 18 ? "Adult" : "Minor"); // "Adult"

// Spread / Rest
const arr1 = [1, 2];
const arr2 = [...arr1, 3, 4]; // [1, 2, 3, 4]
function sum(...nums) { return nums.reduce((a, b) => a + b, 0); }
console.log(sum(1, 2, 3)); // 6
```

---

## ❓ Important Interview Questions

**Q1. What's the difference between `==` and `===`?**
`==` compares values after converting both operands to a common type (type coercion). `===` compares both value and type, with no coercion — always the safer default.

**Q2. Why does `"5" + 3` give `"53"` but `"5" - 3` give `2`?**
`+` is overloaded for both string concatenation and addition — if either operand is a string, it concatenates. `-`, `*`, `/` have no string meaning in JS, so they always coerce both operands to numbers first.

**Q3. What is short-circuit evaluation?**
`&&` returns the first falsy operand (or the last one if all are truthy) without evaluating further; `||` returns the first truthy operand (or the last one if all are falsy) without evaluating further. This is why `user && user.name` is a safe way to avoid errors on `null`.

**Q4. What's the difference between `??` and `||`?**
`||` falls back to the right-hand value for *any* falsy left-hand value (`0`, `""`, `false`, `null`, `undefined`, `NaN`). `??` only falls back for `null` or `undefined` specifically — useful when `0` or `""` are valid, intentional values.

**Q5. What does optional chaining (`?.`) do?**
It short-circuits to `undefined` instead of throwing a `TypeError` when accessing a property on `null`/`undefined` partway through a chain — e.g. `a?.b?.c` is safe even if `a` or `a.b` doesn't exist.

**Q6. What's the difference between the spread and rest operator? They use the same `...` syntax.**
Spread **expands** an iterable into individual elements (`[...arr]`, function calls, object literals). Rest **collects** multiple arguments/elements into a single array (`function f(...args)`, destructuring `const [first, ...rest] = arr`). The direction (expand vs collect) depends on where `...` is used.

**Q7. Why is `null == undefined` true but `null === undefined` false?**
The JS spec has a special-cased rule: `==` treats `null` and `undefined` as loosely equal to each other (and to nothing else), but they remain different types, so `===` reports them as unequal.

**Q8. What does `typeof (1/0)` return, and why doesn't JS throw a divide-by-zero error?**
It returns `"number"` — the result is `Infinity`. Unlike many languages, JS's number type follows IEEE 754 floating point, where division by zero is a well-defined value (`Infinity`, `-Infinity`, or `NaN` for `0/0`), not a runtime error.

**Q9. How would you safely default a value that could legitimately be `0`?**
Use `??` instead of `||`: `const qty = input ?? 10;` keeps `0` as `0`, whereas `input || 10` would incorrectly replace a real `0` with `10`.

---

## ⚡ TL;DR

- **`==`** coerces types before comparing; **`===`** does not — default to `===`.
- **`+`** concatenates if a string is involved; **`-`/`*`/`/`** always coerce to numbers.
- **`&&`/`||`** short-circuit and return actual operand values, not just booleans.
- **`??`** only falls back on `null`/`undefined`; **`||`** falls back on any falsy value — pick based on whether `0`/`""`/`false` should count as "empty."
- **`?.`** prevents crashes when accessing deeply nested, possibly-missing properties.
- **Spread** expands, **rest** collects — same `...` syntax, opposite direction, determined by context.
