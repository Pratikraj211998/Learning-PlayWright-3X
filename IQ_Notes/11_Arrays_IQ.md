# 🧠 Arrays in JavaScript

An **array** is an ordered, index-based collection of values — it can hold mixed types, and is technically a special kind of object where indices are numeric-looking string keys under the hood.

---

## 📊 Creating Arrays

| Method | Example | Notes |
|---|---|---|
| **Array literal** (preferred) | `let arr = [1, 2, 3];` | Simplest, most common way |
| **`new Array(n)`** | `new Array(3)` | Creates an array with **length 3**, all slots empty — a common trap |
| **`new Array(a, b, c)`** | `new Array(1, 2, 3)` | With 2+ args, creates `[1, 2, 3]` as expected |
| **`Array.of(...)`** | `Array.of(7)` → `[7]` | Always creates an array of the given values — avoids the `new Array(n)` single-number trap |
| **`Array.from(iterable)`** | `Array.from("abc")` → `["a","b","c"]` | Builds an array from any iterable or array-like value |
| **`Array.from(arrayLike, mapFn)`** | `Array.from({length:3}, (_, i) => i*2)` → `[0,2,4]` | Also works on array-like objects, with an optional mapping function |

---

## 📊 Access & Modify

| Operation | Example | Notes |
|---|---|---|
| **Access by index** | `arr[0]` | Zero-indexed; out-of-range returns `undefined`, never throws |
| **Access last element** | `arr.at(-1)` | Modern way, supports negative indices; `arr[-1]` does **not** work (returns `undefined`) |
| **Modify by index** | `arr[1] = "new";` | Directly reassigns that slot |
| **`.length`** | `arr.length` | Reflects current size; **settable** — `arr.length = 3` truncates, `arr.length = 5` extends with empty slots |

---

## 📊 Adding / Removing Elements

| Method | Effect | Mutates? |
|---|---|---|
| `push(x)` | Adds to the **end** | ✅ Yes |
| `pop()` | Removes from the **end**, returns it | ✅ Yes |
| `unshift(x)` | Adds to the **start**, shifts others right | ✅ Yes |
| `shift()` | Removes from the **start**, shifts others left, returns it | ✅ Yes |
| `splice(start, deleteCount, ...items)` | Removes and/or inserts elements **in place** at any position; returns the removed elements as a new array | ✅ Yes |
| `slice(start, end)` | Returns a **shallow copy** of a portion — does not touch the original | ❌ No |

> `splice` **mutates**; `slice` does **not** — one of the most common mix-ups in JS.

---

## 📊 Iterating Over Arrays

| Method | Gives you | Notes |
|---|---|---|
| **classic `for`** | index + value (`arr[i]`) | Full manual control; supports `break`/`continue` |
| **`for...of`** | value only | Cleanest for values; supports `break`/`continue` |
| **`forEach(fn)`** | value, index, array (as callback args) | Can't `break`/`continue` — a `return` inside only skips that one iteration |
| **`for...in`** | **keys** (numeric indices, as **strings**) | ⚠️ Also picks up any extra enumerable properties added to the array — generally avoid for plain arrays |
| **`.entries()`** | `[index, value]` pairs | Use with `for...of` + destructuring: `for (const [i, v] of arr.entries())` |

---

## 📊 Searching / Testing Methods

| Method | Returns | Scans | Notes |
|---|---|---|---|
| `indexOf(x)` | index or `-1` | left → right | First match only |
| `lastIndexOf(x)` | index or `-1` | right → left | Last match |
| `includes(x)` | boolean | — | Presence only, no position |
| `find(fn)` | first matching **value** | left → right | `undefined` if none match |
| `findIndex(fn)` | first matching **index** | left → right | `-1` if none match |
| `findLast(fn)` | last matching **value** | right → left | `undefined` if none match |
| `findLastIndex(fn)` | last matching **index** | right → left | `-1` if none match |
| `some(fn)` | boolean | — | `true` if **at least one** passes |
| `every(fn)` | boolean | — | `true` only if **all** pass |

---

## 📊 Transformation Methods — Mutating vs Non-Mutating

| Method | Mutates original? | Purpose |
|---|---|---|
| `map(fn)` | ❌ No | Transform each element → new array |
| `filter(fn)` | ❌ No | Keep elements passing a test → new array |
| `reduce(fn, init)` | ❌ No | Fold the array down to a single value |
| `concat(...)` | ❌ No | Merge arrays → new array |
| `slice()` | ❌ No | Shallow copy of a portion |
| `flat(depth)` | ❌ No | Flattens nested arrays (`Infinity` = all levels) |
| `flatMap(fn)` | ❌ No | `map()` then `flat(1)` in one step |
| `toSorted()` / `toReversed()` (ES2023+) | ❌ No | Same as `sort()`/`reverse()` but return a new array |
| `push/pop/shift/unshift` | ✅ Yes | Add/remove at start or end |
| `splice()` | ✅ Yes | Remove/insert/replace in place |
| `sort()` | ✅ Yes | Sorts **in place** |
| `reverse()` | ✅ Yes | Reverses **in place** |
| `fill(value, start, end)` | ✅ Yes | Fills a range with a value, in place |
| `copyWithin(target, start)` | ✅ Yes | Copies a slice over another position, in place |

---

## 📏 Rules

- Arrays are **zero-indexed**; accessing an out-of-range index returns `undefined` rather than throwing.
- `typeof` **cannot** distinguish arrays from plain objects — both report `"object"`. Always use `Array.isArray(x)` to check specifically for arrays.
- Arrays compare **by reference**, not contents: `[1,2] === [1,2]` is `false` even though they look identical.
- `sort()` with no comparator sorts elements as **strings** — `[10, 1, 21, 2].sort()` gives `[1, 10, 2, 21]`, not numeric order. Always pass a comparator (`(a, b) => a - b`) for numeric sorting.
- `reduce()` without an initial value uses index 0 as the starting accumulator — this **throws a `TypeError` on an empty array**, so always pass an initial value.

---

## ⚠️ Exceptions & Gotchas

- **`new Array(3)`** creates `[empty × 3]` (length 3, no actual values) — very different from `Array.of(3)`, which creates `[3]`.
- **`arr[-1]` does NOT work** like Python — it returns `undefined`. Use `arr.at(-1)` for negative-index access.
- **Sparse arrays (holes) behave inconsistently across methods**: `[1, , 3]` has a "hole" at index 1. `forEach`/`map` **skip holes entirely**, but a `for` loop or `for...of` still visits that index and reports `undefined`.
- **`splice` mutates, `slice` doesn't** — despite the nearly identical names, this is one of the most common real-world bugs.
- **`sort()`/`reverse()`/`fill()`/`copyWithin()` all mutate in place** — if you need the original untouched, use the ES2023+ non-mutating counterparts (`toSorted()`, `toReversed()`) or `slice()` first.
- **No built-in deep equality** — comparing arrays with `===` checks references, not contents. A common workaround is `JSON.stringify(a) === JSON.stringify(b)` (imperfect for complex/nested data, but fine for simple cases).
- **`for...in` on arrays picks up extra enumerable properties**, not just indices — this is why `for...of`/`forEach`/classic `for` are preferred for plain array iteration.
- Removing duplicates: `[...new Set(arrayWithDupes)]` is the standard one-liner.

---

## 🔍 Walkthrough

```js
// Creation
let numbers = [1, 2, 3, 4, 5];
let fromConstructor = new Array(3);
console.log(fromConstructor.length); // 3 (empty slots)
console.log(Array.of(7));             // [7]
console.log(Array.from("abc"));        // ["a", "b", "c"]

// Access
console.log(numbers.at(-1));  // 5 — last element, negative index
console.log(numbers[10]);      // undefined — out of range, no error

// Adding / Removing
let stack = [1, 2, 3];
stack.push(4);     // [1, 2, 3, 4]
stack.pop();        // [1, 2, 3]
stack.unshift(0);    // [0, 1, 2, 3]
stack.shift();        // [1, 2, 3]

// splice — mutates, returns removed elements
let nums = [1, 2, 3, 4, 5];
const removed = nums.splice(1, 2); // remove 2 elements starting at index 1
console.log(nums);    // [1, 4, 5]
console.log(removed); // [2, 3]

// slice — does NOT mutate
console.log(stack.slice(1)); // [2, 3]
console.log(stack);           // [1, 2, 3] — untouched

// Searching
let results = ["pass", "fail", "pass", "error", "fail"];
console.log(results.indexOf("fail"));      // 1 — first match
console.log(results.lastIndexOf("fail"));   // 4 — last match
console.log(results.includes("error"));      // true

// Transformation (non-mutating)
console.log([1, 2, 3, 4, 5].map(n => n * 2));         // [2,4,6,8,10]
console.log([1, 2, 3, 4, 5].filter(n => n % 2 === 0)); // [2,4]
console.log([1, 2, 3, 4].reduce((acc, n) => acc + n, 0)); // 10

// Sorting gotcha
let sortNums = [10, 1, 21, 2];
console.log(sortNums.sort());               // [1, 10, 2, 21] — WRONG for numbers
console.log(sortNums.sort((a, b) => a - b));  // [1, 2, 10, 21] — correct

// Destructuring + swap trick
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first, second, rest); // 1 2 [3, 4, 5]
let p = 1, q = 2;
[p, q] = [q, p]; // classic swap
console.log(p, q); // 2 1

// Removing duplicates
const unique = [...new Set([1, 2, 2, 3, 3, 3])];
console.log(unique); // [1, 2, 3]

// Comparing arrays
console.log([1, 2] === [1, 2]); // false — reference comparison
console.log(JSON.stringify([1, 2]) === JSON.stringify([1, 2])); // true

// Iteration styles
let tests = ["login", "checkout", "search"];
for (let i = 0; i < tests.length; i++) console.log(i, tests[i]); // index + value
for (const t of tests) console.log(t);                             // value only
tests.forEach((t, i) => console.log(i, t));                          // callback style
for (const [i, t] of tests.entries()) console.log(i, t);              // both, paired
```

---

## ❓ Important Interview Questions

**Q1. How do you correctly check if a value is an array?**
`Array.isArray(value)` — `typeof` always returns `"object"` for arrays, so it can't distinguish them from plain objects.

**Q2. What's the difference between `slice()` and `splice()`?**
`slice(start, end)` returns a shallow copy of a portion **without** mutating the original. `splice(start, deleteCount, ...items)` **mutates** the original in place, removing and/or inserting elements, and returns the removed elements.

**Q3. Why does `[10, 1, 21, 2].sort()` give a "wrong" result?**
`sort()` with no comparator converts elements to strings and sorts lexicographically — `"10"` comes before `"2"` alphabetically. Always pass a comparator function like `(a, b) => a - b` for correct numeric sorting.

**Q4. Why does `reduce()` throw on an empty array sometimes?**
If no initial value is passed, `reduce()` uses the array's first element as the starting accumulator and begins iterating from index 1 — on an empty array there's no first element to use, so it throws a `TypeError`. Always pass an initial value to avoid this.

**Q5. What's the difference between `find()` and `filter()`?**
`find()` returns the **first single value** that matches (or `undefined`). `filter()` returns a **new array** of *all* matching values (or an empty array if none match).

**Q6. Why is `[1,2] === [1,2]` false?**
Arrays are reference types — `===` compares whether both operands point to the **same object in memory**, not whether their contents look equal. Two separately created arrays are never `===`, even with identical contents.

**Q7. What's the difference between `map()` and `forEach()`?**
`map()` returns a **new array** built from the callback's return values, and is meant for transforming data. `forEach()` returns `undefined` and is meant purely for side effects (like logging) — you can't chain or collect results from it directly.

**Q8. Why is `for...in` discouraged for iterating arrays?**
It iterates over enumerable **keys** (as strings), which includes not just numeric indices but any extra enumerable properties manually added to the array object — `for...of`, `forEach`, or a classic `for` loop are safer and clearer for plain array iteration.

**Q9. What happens with a sparse array (a "hole") during iteration?**
`forEach`/`map`/`filter` **skip holes entirely** (they don't call the callback for that index), but a classic `for` loop or `for...of` still visits the hole's index and reports `undefined`. This inconsistency is a common gotcha.

**Q10. How do you remove duplicate values from an array?**
Convert it to a `Set` (which only stores unique values) and spread it back into an array: `[...new Set(arr)]`.

**Q11. What's the difference between `new Array(3)` and `Array.of(3)`?**
`new Array(3)` creates an array with **length 3 and no actual elements** (empty slots). `Array.of(3)` creates `[3]` — a single-element array containing the number 3. This inconsistency in the `Array` constructor is exactly why `Array.of` exists.

**Q12. How would you correctly deep-compare two arrays for equality?**
There's no built-in deep equality — `===` only checks reference. A common quick workaround is `JSON.stringify(a) === JSON.stringify(b)`, though it breaks down for arrays containing functions, `undefined`, or differently-ordered object keys; for robust cases, a proper deep-equal utility (or library) is used instead.

---

## ⚡ TL;DR

- Arrays are ordered, zero-indexed collections — technically a special object, so `typeof` reports `"object"`; use `Array.isArray()` instead.
- **Mutating**: `push`, `pop`, `shift`, `unshift`, `splice`, `sort`, `reverse`, `fill`, `copyWithin`. **Non-mutating**: `map`, `filter`, `reduce`, `concat`, `slice`, `flat`, `flatMap`, `toSorted`, `toReversed` — know which is which.
- `sort()` defaults to **string** comparison — always pass `(a, b) => a - b` for numbers.
- `reduce()` needs an initial value, or it throws on empty arrays.
- Arrays compare by **reference**, never by contents, with `===`.
- `for...of`/`forEach` for values, classic `for` when you need manual index control, `entries()` when you need both — avoid `for...in` on arrays.
- `[...new Set(arr)]` is the standard way to dedupe an array.
