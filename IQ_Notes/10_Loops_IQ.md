# 🧠 Loops in JavaScript — `for`, `while`, `do...while`

A **loop** repeats a block of code until a condition becomes false. JavaScript's three core loop constructs all do this, but differ in *when* the condition is checked and *how* the iteration is controlled.

---

## 📊 Quick Comparison

| Aspect | `for` | `while` | `do...while` |
|---|---|---|---|
| **Condition checked** | Before each iteration | Before each iteration | **After** each iteration |
| **Guaranteed to run at least once?** | ❌ No | ❌ No | ✅ Yes — body always runs once first |
| **Best for** | A known number of iterations (counters, index-based array loops) | An unknown number of iterations, condition-driven (queues, polling) | Anything that must run at least once (menus, retry logic) |
| **Init/update built in?** | ✅ Yes — `for (init; condition; update)` | ❌ No — must init before and update inside the body | ❌ No — must init before and update inside the body |
| **Requires trailing `;`** | No | No | ✅ Yes — `do {...} while (condition);` |

---

## 1️⃣ `for` Loop

### 📏 Rules

- Syntax: `for (INIT; CONDITION; UPDATE) { ...body }`.
- **INIT** runs once, before the loop starts. **CONDITION** is checked before every iteration — the loop stops the moment it's `false`. **UPDATE** runs after each body execution, then CONDITION is checked again.
- Any of INIT/CONDITION/UPDATE can be omitted, but the two semicolons must stay: `for (;;) { }` is valid syntax (an infinite loop without a `break` inside).
- Use `let` (not `var`) for the loop counter so each iteration gets its **own binding** — this matters when the loop body creates closures (e.g. `setTimeout` callbacks).

### ⚠️ Exceptions & Gotchas

- **`var` in a `for` loop + closures is a classic bug**:
  ```js
  for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }
  // logs 3, 3, 3 — one shared `i` across all iterations
  for (let i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }
  // logs 0, 1, 2 — `let` gives each iteration its own `i`
  ```
- **Omitting all three parts** (`for (;;) { }`) creates an infinite loop — it needs a `break` inside or it never stops.
- **Off-by-one errors** are common: `i <= arr.length` will read one index past the end (`undefined`); the correct bound for array indexing is `i < arr.length`.

### 🔍 Walkthrough

```js
// Basic for loop
for (let i = 1; i <= 5; i++) {
  console.log("basic:", i); // 1, 2, 3, 4, 5
}

// Counting down
for (let i = 5; i >= 1; i--) {
  console.log("countdown:", i); // 5, 4, 3, 2, 1
}

// Custom step
for (let i = 0; i <= 10; i += 2) {
  console.log("even:", i); // 0, 2, 4, 6, 8, 10
}

// Looping over an array by index
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log("fruit:", fruits[i]);
}

// Omitting init (semicolons stay)
let j = 0;
for (; j < 3; j++) {
  console.log("no init:", j); // 0, 1, 2
}

// Nested for loop
for (let row = 1; row <= 2; row++) {
  for (let col = 1; col <= 2; col++) {
    console.log(`row ${row} x col ${col} = ${row * col}`);
  }
}
```

### ❓ Important Interview Questions

**Q1. What are the three parts of a `for` loop, and in what order do they run?**
INIT (once, before anything else) → CONDITION (checked before every iteration) → body → UPDATE (after the body) → CONDITION again, repeating until CONDITION is false.

**Q2. Why should you use `let` instead of `var` for a loop counter?**
`let` creates a fresh binding of the counter for each iteration, so closures created inside the loop (like `setTimeout` callbacks) each capture their own value. `var` shares one binding across all iterations, so every closure sees the final value after the loop ends.

**Q3. Can you write a `for` loop with no init, condition, or update at all?**
Yes — `for (;;) { }` is valid and creates an infinite loop; you'd need a `break` inside to ever stop it.

---

## 2️⃣ `while` Loop

### 📏 Rules

- Syntax: `while (CONDITION) { ...body }`.
- CONDITION is checked **before** every iteration — if it's false from the start, the body never runs even once.
- There's no built-in init/update — you must initialize the controlling variable before the loop and update it somewhere inside the body yourself.
- Best used when the number of iterations isn't known ahead of time and depends on some changing condition (e.g. a queue draining, waiting for a state change).

### ⚠️ Exceptions & Gotchas

- **Forgetting to update the condition variable causes an infinite loop** — if nothing inside the body moves the condition toward `false`, `while` never stops.
- **A `while (true)` loop needs an internal `break`** — otherwise it runs forever; this pattern is common but must always pair with a conditional `break`.
- Because the condition is checked first, a `while` loop can run **zero times** — don't assume the body executes at least once (that's what `do...while` is for).

### 🔍 Walkthrough

```js
// Basic while loop
let i = 0;
while (i < 5) {
  console.log("basic:", i); // 0, 1, 2, 3, 4
  i++;
}

// Condition false from the start — body never executes
let count = 10;
while (count < 5) {
  console.log("never runs:", count);
}
console.log("after loop, count is still:", count); // 10

// while loop driven by a condition other than a counter
let queue = ["task1", "task2", "task3"];
while (queue.length > 0) {
  const task = queue.shift();
  console.log("processing:", task);
}

// Infinite loop with internal break
let n = 0;
while (true) {
  console.log("infinite iteration:", n);
  n++;
  if (n === 3) break;
}
```

### ❓ Important Interview Questions

**Q4. Can a `while` loop run zero times?**
Yes — since the condition is checked before the first iteration, if it's `false` immediately, the body never executes at all.

**Q5. What's the most common bug with `while` loops?**
Forgetting to update the variable the condition depends on, which causes an infinite loop since the condition never becomes `false`.

**Q6. When would you choose `while` over `for`?**
When the number of iterations isn't known in advance and instead depends on some external or changing condition — e.g. draining a queue until it's empty, or polling until a flag flips — rather than counting through a fixed range.

---

## 3️⃣ `do...while` Loop

### 📏 Rules

- Syntax: `do { ...body } while (CONDITION);` — note the **required trailing semicolon**, one of the few JS statements that needs one.
- The body runs **first**, then CONDITION is checked — so it always executes **at least once**, even if the condition is false from the very start. This is the key difference from `while`.
- Commonly used for things that must happen at least one time regardless of state: menu prompts, retry logic, "try once, then check if you should try again."

### ⚠️ Exceptions & Gotchas

- **The trailing semicolon after `while (CONDITION)` is required** — omitting it is a syntax error, unlike `for`/`while` blocks.
- **Easy to confuse with `while`** — the only structural difference is the position of the condition check (after vs before), but that one difference changes whether a false-from-the-start condition still runs the body once.
- Just like `while`, forgetting to update the condition variable inside the body still causes an infinite loop.

### 🔍 Walkthrough

```js
// Basic do...while
let i = 0;
do {
  console.log("basic:", i); // 0, 1, 2
  i++;
} while (i < 3);

// Condition false from the start — body still runs once
let count = 10;
do {
  console.log("runs once regardless:", count); // 10
} while (count < 5);

// Real use case — retry logic that must attempt at least once
let attempts = 0;
const maxAttempts = 3;
let success = false;
do {
  attempts++;
  console.log("attempt:", attempts);
  success = attempts === maxAttempts;
} while (!success && attempts < maxAttempts);
```

### ❓ Important Interview Questions

**Q7. What's the key difference between `while` and `do...while`?**
`while` checks the condition **before** the first iteration, so it can run zero times. `do...while` checks it **after**, so the body always runs at least once, regardless of the condition's initial value.

**Q8. Why does `do...while` require a semicolon at the end but `while`/`for` don't?**
It's simply part of the `do...while` statement's grammar — `do { } while (condition);` is treated as a single statement terminated by `;`, unlike `for (...) { }` and `while (...) { }`, which end with the closing brace.

**Q9. Give a real-world scenario where `do...while` is the natural choice.**
Anything that must attempt an action before checking whether to repeat — e.g. showing a menu and asking "run again?", or a retry loop that always makes at least one attempt before checking if it succeeded.

---

## ⚡ Overall TL;DR

- **`for`** — best when you know the number of iterations; init/condition/update are all built into the syntax.
- **`while`** — condition checked **before** each run; can execute **zero** times; best for unknown iteration counts driven by a changing condition.
- **`do...while`** — condition checked **after** each run; always executes **at least once**; needs a trailing `;`.
- Across all three: forgetting to update the loop's controlling variable is the #1 cause of infinite loops.
- Use `let` for loop counters, never `var`, to avoid the classic shared-binding closure bug in loops paired with callbacks.
