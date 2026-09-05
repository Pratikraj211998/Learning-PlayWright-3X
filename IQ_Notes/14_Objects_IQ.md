# 🧠 Objects in JavaScript

An **object** is an unordered collection of key-value pairs (properties). Keys are always strings (or Symbols) under the hood, and values can be anything — primitives, arrays, functions, or other objects.

---

## 📊 Creating & Accessing Objects

| Operation | Example | Notes |
|---|---|---|
| **Object literal** (preferred) | `let user = { name: "John", age: 30 };` | Simplest, most common way |
| **Dot notation access** | `user.name` | Requires a valid identifier key (no spaces/hyphens/starting digit) |
| **Bracket notation access** | `user["age"]` | Works with **any** string key, including ones with spaces or stored in a variable: `user[keyVar]` |
| **Quoted vs unquoted keys** | `{ "name": "x" }` same as `{ name: "x" }` | JSON-style quoted keys and plain JS keys behave identically when the key is a valid identifier |
| **Adding a property** | `config.browser = "Chrome";` | Just assign to a new key — no separate "declare" step needed |
| **Modifying a property** | `config.timeout = 5000;` | Overwrites the previous value |
| **Deleting a property** | `delete config.browser;` | Removes the key entirely (not just sets it to `undefined`) |

---

## 📏 Rules

- **Keys are case-sensitive**: `{ status: "pass", Status: "fail" }` are two completely different properties.
- **Bracket notation is required** when the key isn't a valid identifier (has spaces, starts with a digit) or when the key comes from a **variable**: `user[fieldName]`.
- Accessing a property that doesn't exist returns `undefined`, not an error.
- Objects are **reference types** — assigning an object to another variable copies the **reference**, not the data.
- A method inside an object literal uses `this` to refer to **whichever object called it** — not the object it was originally defined in (relevant if the method is later detached/reassigned).

---

## ⚠️ Exceptions & Gotchas

- **Assigning an object copies the reference, not the object itself**:
  ```js
  let a = { status: "pass" };
  let b = a;              // b now points to the SAME object as a
  b.status = "fail";
  console.log(a.status);  // "fail" — a changed too, because a and b share one object
  ```
- **Two objects with identical contents are never `===` equal** — comparison is by reference:
  ```js
  let c = { status: "pass" };
  let d = { status: "pass" };
  console.log(c === d); // false — different objects in memory, despite matching content
  ```
- **Primitives copy by value; objects copy by reference** — this is the single biggest mental model shift moving from primitives to objects:
  ```js
  let x = 10;
  let y = x;
  y = 99;
  console.log(x); // 10 — completely unaffected, x and y are independent

  let obj1 = { val: 10 };
  let obj2 = obj1;
  obj2.val = 99;
  console.log(obj1.val); // 99 — obj1 and obj2 point to the SAME object
  ```
- **`delete` removes the key entirely** — `delete config.browser` makes `"browser" in config` become `false`; it's different from `config.browser = undefined`, which keeps the key with an `undefined` value.
- **A detached method loses its `this`**: `const fn = user.printName; fn();` will not have `this` bound to `user` anymore, since `this` depends on **how** a function is called, not where it was defined.

---

## 🔍 Walkthrough

```js
// Creation & access
const user = { name: "John", age: 30, email: "john@example.com" };
console.log(user.name);     // "John" — dot notation
console.log(user["age"]);    // 30 — bracket notation

// Adding / modifying
user.city = "NYC";   // new property
user.age = 31;         // modify existing
console.log(user);

// Deleting
let config = {};
config.browser = "Chrome";
config.timeout = 3000;
config.timeout = 5000; // overwritten — latest wins
delete config.browser;
console.log(config); // { timeout: 5000 }

// Methods & `this`
const account = {
  name: "Pratik",
  printName() {
    return this.name; // `this` = whichever object calls printName()
  },
};
console.log(account.printName()); // "Pratik"

// Reference vs value copying
let a = { status: "pass" };
let b = a;
b.status = "fail";
console.log(a.status); // "fail" — shared reference

let num1 = 10;
let num2 = num1;
num2 = 99;
console.log(num1); // 10 — primitives copy independently

// Nested objects — real-world shape (from 114_Object_Person.js)
const person = {
  fullName: "Pratik Rajpure",
  address: { city: "Pune", state: "Maharashtra" },
  employment: { jobTitle: "QA Automation Engineer" },
  getIntroduction() {
    // reaching into nested objects via chained dot notation
    return `Hi, I am ${this.fullName}, a ${this.employment.jobTitle} from ${this.address.city}.`;
  },
};
console.log(person.getIntroduction());
// "Hi, I am Pratik Rajpure, a QA Automation Engineer from Pune."
```

---

## 📊 Additional Object Tools Worth Knowing

These didn't show up yet in your chapter files, but they're essential, everyday object tools:

| Tool | Example | Purpose |
|---|---|---|
| **`Object.keys(obj)`** | `Object.keys({a:1,b:2})` → `["a","b"]` | Array of a plain object's own property names |
| **`Object.values(obj)`** | `Object.values({a:1,b:2})` → `[1,2]` | Array of just the values |
| **`Object.entries(obj)`** | `Object.entries({a:1,b:2})` → `[["a",1],["b",2]]` | Array of `[key, value]` pairs — pairs perfectly with `for...of` |
| **Object destructuring** | `const { name, age } = user;` | Pull specific properties straight into variables |
| **Destructuring with rename** | `const { name: userName } = user;` | Extract a property under a different local variable name |
| **Destructuring with default** | `const { role = "guest" } = user;` | Falls back to a default if the property is `undefined`/missing |
| **Spread into a new object** | `const copy = { ...user, age: 32 };` | Shallow copy + override — does NOT mutate the original |
| **`Object.assign(target, ...sources)`** | `Object.assign({}, user, { age: 32 })` | Older way to merge/copy objects, same shallow-copy behavior as spread |
| **`Object.freeze(obj)`** | `Object.freeze(config);` | Prevents adding/removing/changing top-level properties (shallow only — nested objects inside remain mutable) |
| **`"key" in obj`** | `"age" in user` → `true` | Checks if a key exists, even if its value is `undefined` (unlike checking `user.age !== undefined`) |
| **Optional chaining** | `user.address?.city` | Safely reads a nested property without throwing if `address` is `null`/`undefined` |
| **Computed property names** | `const key = "role"; const o = { [key]: "admin" };` | Use a variable's value as the property name itself |

```js
const user2 = { name: "Amy", age: 28, role: "QA" };

console.log(Object.keys(user2));   // ["name", "age", "role"]
console.log(Object.values(user2));  // ["Amy", 28, "QA"]
console.log(Object.entries(user2));  // [["name","Amy"], ["age",28], ["role","QA"]]

const { name, role = "guest" } = user2;
console.log(name, role); // "Amy" "QA"

const updated = { ...user2, age: 29 }; // shallow copy with one field overridden
console.log(updated); // { name: "Amy", age: 29, role: "QA" }
console.log(user2.age); // 28 — original untouched

const frozen = Object.freeze({ browser: "Chrome" });
frozen.browser = "Firefox"; // silently fails (throws in strict mode)
console.log(frozen.browser); // "Chrome" — unchanged

console.log(user2?.address?.city); // undefined — no crash, address doesn't exist
```

---

## ❓ Important Interview Questions

**Q1. What's the difference between dot notation and bracket notation for accessing properties?**
Dot notation (`obj.key`) only works with valid identifier key names known at write-time. Bracket notation (`obj["key"]` or `obj[variable]`) works with any string, including ones with spaces/special characters, and lets you use a **variable** to decide which key to access dynamically.

**Q2. Why does modifying `b` also change `a` after `let b = a;` (for objects)?**
Because objects are reference types — `let b = a` copies the **reference** (the memory address), not the object's contents. Both variables end up pointing to the exact same object, so a change through either one is visible through both.

**Q3. Why is `{status:"pass"} === {status:"pass"}` false?**
`===` on objects compares references, not structural content. Two separately created object literals are always different objects in memory, even if their properties happen to be identical.

**Q4. What's the difference between primitives and objects when assigned to a new variable?**
Primitives (numbers, strings, booleans, etc.) are copied **by value** — each variable gets a fully independent copy. Objects (including arrays and functions) are copied **by reference** — both variables point to the same underlying data.

**Q5. What does `delete obj.key` actually do, versus `obj.key = undefined`?**
`delete` removes the property entirely — `"key" in obj` becomes `false` afterward. Setting it to `undefined` keeps the key present (with an `undefined` value), so `"key" in obj` is still `true`.

**Q6. How do you safely access a deeply nested property that might not exist?**
Optional chaining: `user?.address?.city` — it short-circuits to `undefined` the moment any link in the chain is `null`/`undefined`, instead of throwing `Cannot read property 'city' of undefined`.

**Q7. What's the difference between `Object.freeze()` and just not reassigning a `const` object?**
`const` only prevents reassigning the **variable** to a different object — properties can still be freely added/changed/removed. `Object.freeze()` locks the object's own properties too (shallowly) — trying to change/add/delete them silently fails (or throws in strict mode). Nested objects inside a frozen object are **not** frozen automatically.

**Q8. What's the easiest way to shallow-copy an object while changing one field?**
Spread syntax: `const updated = { ...original, fieldToChange: newValue };` — copies all properties from `original`, then overrides the one field, leaving `original` untouched.

**Q9. How would you loop over all key-value pairs of an object?**
`for (const [key, value] of Object.entries(obj)) { ... }` — the cleanest modern way, giving both the key and value together each iteration, unlike `for...in` which only gives keys.

---

## ⚡ TL;DR

- Objects are unordered key-value collections; keys are **case-sensitive** strings (or Symbols).
- Use **dot notation** for known, valid identifier keys; **bracket notation** for dynamic/variable keys or keys with special characters.
- Objects are **reference types** — copying a variable copies the pointer, not the data; `===` compares references, never contents.
- `delete` removes a key entirely; assigning `undefined` just blanks the value while keeping the key.
- **Spread (`{...obj}`)** and **`Object.assign()`** both make shallow copies; **`Object.freeze()`** locks an object's top-level properties (shallowly).
- **Destructuring**, **optional chaining (`?.`)**, and `Object.keys/values/entries` cover almost all everyday object-handling needs.
