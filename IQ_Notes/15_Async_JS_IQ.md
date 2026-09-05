# 🧠 Asynchronous JavaScript — Callbacks, Promises, `async`/`await`

Three different syntaxes for the exact same underlying problem: **"run this now, but don't block on the result — handle it whenever it's ready."** Each one was invented to fix a readability/error-handling problem with the one before it.

---

## 📊 Quick Comparison

| Aspect | Callbacks | Promises | `async`/`await` |
|---|---|---|---|
| **Core idea** | Pass a function to be called later, when the work is done | An object representing a future value, with states and chainable `.then()` | Syntax sugar over promises — write async code that *reads* like sync code |
| **Success handling** | Call the callback with the result | `.then(result => ...)` | `let result = await somePromise();` |
| **Error handling** | Manual `if (error) { ... return; }` in every callback (error-first pattern) | `.catch(err => ...)` | `try { } catch (err) { }` |
| **Chaining multiple steps** | Nested callbacks inside callbacks → "callback hell" / "pyramid of doom" | `.then().then().then()` — flat chain | Sequential `await` lines — reads top-to-bottom like normal code |
| **Cleanup step** | Manual, repeated in every branch | `.finally()` | `finally` block in `try/catch/finally` |
| **Underlying mechanism** | Just a function reference passed as an argument | Built on the microtask queue | Still promises underneath — `await` just pauses the `async` function until the promise settles |

---

## 1️⃣ Callbacks

A **callback** is simply a function passed as an argument to another function, to be invoked later — either immediately (synchronously) or after some delay (asynchronously).

### 📏 Rules

- A callback can be passed as a **named function**, an **anonymous function expression**, or an **arrow function** — all three work identically as callbacks.
- Callbacks aren't only for async work — array methods like `.forEach()`, `.map()`, `.filter()` all take callbacks and run them **synchronously**.
- The **error-first callback pattern** (common in Node.js-style APIs) always makes the first parameter an error/null: `function(error, result) { if (error) { ...; return; } ... }`.
- Nesting callbacks inside callbacks to run steps in sequence is called **callback hell** or the **pyramid of doom** — each new async step indents one level deeper.

### ⚠️ Exceptions & Gotchas

- **Synchronous callbacks finish completely before any code after them runs**:
  ```js
  let testResults = ["PASS", "FAIL", "PASS", "SKIP"];
  testResults.forEach(function (result, index) {
    console.log("Test " + index + " -> " + result);
  });
  console.log("All done"); // prints LAST — forEach's callback runs fully, synchronously, first
  ```
- **Asynchronous callbacks do NOT run in the order they're written** — they run whenever their underlying operation completes:
  ```js
  console.log("Test 1: started");
  setTimeout(function () {
    console.log("Test 2: API response received!");
  }, 5000);
  console.log("Test 3: Moving to next last");
  // Output order: "Test 1", "Test 3", then 5 seconds later "Test 2"
  // setTimeout's callback is deferred — the rest of the synchronous code runs first.
  ```
- **Callback hell makes error handling repetitive and deeply nested** — every async step needs its own `if (error) return;`, and a real multi-step flow (login → profile → orders → payment → shipping → email → report) can nest 8-10 levels deep, becoming unreadable and hard to modify.
- **A callback can also be used to customize behavior, not just handle async results**:
  ```js
  function calculate(a, b, operation) {
    return operation(a, b);
  }
  let sum = calculate(10, 5, function (x, y) { return x + y; }); // 15
  ```

### 🔍 Walkthrough

```js
// Basic callback — named, anonymous, and arrow, all equivalent
function placeOrder(item, callback) {
  console.log("Order placed...");
  callback();
}
function print() { console.log("Done with the order"); }
placeOrder("Burger", print);                                  // named function
placeOrder("Burger", function () { console.log("Ready!"); });   // anonymous
placeOrder("Burger", () => console.log("Arrow callback!"));      // arrow

// Callback hell — the pyramid of doom
function openBrowser(callback) {
  setTimeout(function () { console.log("Step 1: browser opened"); callback(); }, 500);
}
function goToLoginPage(callback) {
  setTimeout(function () { console.log("Step 2: login page loaded"); callback(); }, 500);
}
function enterCredentials(callback) {
  setTimeout(function () { console.log("Step 3: credentials entered"); callback(); }, 500);
}
function clickLogin(callback) {
  setTimeout(function () { console.log("Step 4: login clicked"); callback(); }, 500);
}

openBrowser(function () {
  goToLoginPage(function () {
    enterCredentials(function () {
      clickLogin(function () {
        console.log("Test complete!");
      });
    });
  });
});
// Each new step indents deeper — this is exactly what Promises/async-await fix.
```

### ❓ Interview Questions

**Q1. What is a callback function?**
Any function passed as an argument to another function, to be invoked later — either right away (synchronously, like in `forEach`) or after an async operation completes (like in `setTimeout`).

**Q2. Why does `"Test 3"` print before `"Test 2"` even though `setTimeout` appears first in the code?**
Because `setTimeout`'s callback is asynchronous — it's deferred to run only after the specified delay, and only once the current synchronous code has finished. The engine doesn't wait; it moves straight to the next line (`"Test 3"`) immediately.

**Q3. What is "callback hell," and why is it a problem?**
Deeply nested callbacks inside callbacks, used to force a sequence of async steps to run one after another. Each level indents further, error handling has to be repeated at every level, and the code becomes hard to read, debug, and modify — this is the exact problem Promises and `async`/`await` were designed to solve.

---

## 2️⃣ Promises

A **Promise** is an object representing a value that may not be available yet — it will eventually either **resolve** (succeed) or **reject** (fail).

### 📏 Rules

- A Promise has exactly **3 states**: `pending` (initial), `fulfilled` (resolved successfully), `rejected` (failed) — and once it settles (fulfilled or rejected), it **stays that way forever**; it can never change state again.
- `new Promise((resolve, reject) => { ... })` — call `resolve(value)` on success, `reject(reason)` on failure.
- `.then(onFulfilled)` runs only if the promise resolves; `.catch(onRejected)` runs only if it rejects; `.finally(fn)` runs **regardless** of outcome — always last, for cleanup.
- **Returning a value from `.then()` passes it to the next `.then()`** in the chain — this is what makes chaining work instead of nesting.
- **Returning a new Promise from `.then()`** makes the next `.then()` wait for that promise too — this is how you flatten callback-hell-style sequential steps into one flat chain.
- **Throwing inside a `.then()`** (or calling `reject`) skips straight to the nearest `.catch()`, skipping any `.then()` calls in between.

### ⚠️ Exceptions & Gotchas

- **Logging a Promise directly does not show its resolved value** — it shows the Promise object itself, in whatever state it's currently in (e.g., `Promise { 'Pizza is delivered!' }` or `Promise { <pending> }`). You must use `.then()` (or `await`) to actually get the value out.
- **A rejected promise skips every `.then()` and jumps straight to `.catch()`** — if there's no `.catch()` at all, you get an "unhandled promise rejection" warning/error.
- **`Promise.all()` fails fast** — if even ONE promise in the array rejects, the whole `.then()` is skipped and `.catch()` runs immediately with just that one rejection reason; you don't get to see results from the promises that *did* succeed.
  ```js
  Promise.all([Promise.resolve("OK"), Promise.reject("DB DOWN"), Promise.resolve("OK")])
    .then(r => console.log(r))
    .catch(err => console.log("Failed:", err)); // "Failed: DB DOWN" — the two "OK"s are lost
  ```
- **`Promise.allSettled()` never fails fast** — it waits for every promise and gives you the outcome of ALL of them (`{status: "fulfilled", value}` or `{status: "rejected", reason}`), which is why it's the right tool for something like a full test report where you want every result, not just the first failure.
- **`setTimeout(fn), delay` is a subtle bug**, not a valid call: the delay must be the **second argument inside the same parentheses** — `setTimeout(fn, delay)`. Writing `setTimeout(function(){...}), 500` actually calls `setTimeout` with only the function (defaulting to 0ms delay) and then evaluates `, 500` as a discarded, meaningless expression via the comma operator. This is an easy typo that silently breaks the intended delay.
- **`Promise.race()` settles with whichever promise finishes FIRST** (success or failure) — if the fastest one rejects, `race()` rejects too, even if a slower one would have succeeded.

### 🔍 Walkthrough

```js
// Creating a promise
let order = new Promise(function (resolve, reject) {
  let foodReady = true;
  if (foodReady) resolve("Pizza is delivered!");
  else reject("Order cancelled");
});

// .then() for success
let apiCall = new Promise((resolve) => resolve({ status: 200, body: "User Data" }));
apiCall.then((response) => console.log(response.status)); // 200

// .catch() for failure — .then() is skipped entirely
let failedCall = new Promise((resolve, reject) => reject("500 Error"));
failedCall.then(() => console.log("never runs"))
          .catch((error) => console.log(error)); // "500 Error"

// .then().catch().finally()
new Promise((resolve) => resolve({ status: 200 }))
  .then((data) => console.log(data))
  .catch((error) => console.log(error))
  .finally(() => console.log("Always runs!"));

// Chaining — the fix for callback hell
function openBrowser() { return new Promise((resolve) => resolve("Browser opened")); }
function goToLogin()   { return new Promise((resolve) => resolve("Login page loaded")); }

openBrowser()
  .then((msg) => { console.log("Step 1:", msg); return goToLogin(); }) // return chains the next step
  .then((msg) => { console.log("Step 2:", msg); })
  .catch((error) => console.log("Error:", error))
  .finally(() => console.log("Done!"));

// Promise.all — fail-fast, waits for all to succeed
Promise.all([Promise.resolve("Login: PASS"), Promise.resolve("Search: PASS")])
  .then((results) => console.log("All checks:", results));

// Promise.allSettled — never fails fast, reports every outcome
Promise.allSettled([
  Promise.resolve("Test A Passed!"),
  Promise.reject("Test B failed"),
]).then((results) => {
  results.forEach((r) => console.log(r.status, "-", r.value || r.reason));
});

// Promise.race — first to settle wins
Promise.race([
  new Promise((resolve) => setTimeout(() => resolve("Fast 100ms"), 100)),
  new Promise((resolve) => setTimeout(() => resolve("Slow 500ms"), 500)),
]).then((winner) => console.log("Winner:", winner)); // "Fast 100ms"
```

### ❓ Interview Questions

**Q4. What are the three states of a Promise?**
`pending` (not yet settled), `fulfilled` (resolved successfully), and `rejected` (failed). Once it moves to fulfilled or rejected, it's permanently "settled" and can never change state again.

**Q5. What's the difference between `Promise.all()` and `Promise.allSettled()`?**
`Promise.all()` fails fast — the moment any single promise rejects, the whole thing rejects and you lose visibility into the ones that succeeded. `Promise.allSettled()` always waits for every promise and gives you the outcome of each one individually, success or failure, which is why it's used when you want a complete report rather than an all-or-nothing result.

**Q6. What does `Promise.race()` do?**
Resolves or rejects as soon as the FIRST promise in the array settles, whether that settlement is a success or a failure — the other promises are simply ignored once one has won.

**Q7. Why doesn't `console.log(promiseVariable)` show the resolved value?**
Because the variable holds the Promise **object** itself, not its eventual value — the value only becomes accessible through `.then()` (or `await`), once the promise has actually settled.

**Q8. What happens if you throw an error inside a `.then()`?**
Execution skips every subsequent `.then()` in the chain and jumps straight to the nearest `.catch()` — exactly the same as if `reject()` had been called.

---

## 3️⃣ `async`/`await`

`async`/`await` is syntax sugar over Promises — it lets asynchronous code be written and read like ordinary synchronous, top-to-bottom code, while still being non-blocking underneath.

### 📏 Rules

- An `async function` **always returns a Promise** — even if you `return "Pass";` directly, the caller receives a Promise that resolves to `"Pass"`.
- `await` can only be used **inside an `async` function** (or at the top level of a module) — it pauses execution of that function until the awaited promise settles, then unwraps the resolved value.
- Error handling with `await` uses ordinary **`try/catch/finally`** — a rejected awaited promise throws, and is caught exactly like a thrown error in synchronous code.
- Multiple `await` lines in a row run **sequentially** — each one waits for the previous to finish before starting.

### ⚠️ Exceptions & Gotchas

- **Forgetting to pass a value between awaited steps is a very common bug**:
  ```js
  async function run() {
    let token = await getToken();
    let user = await getUser(); // ❌ bug — forgot to pass `token` in!
  }
  // Correct version:
  async function runFixed() {
    let token = await getToken();
    let user = await getUser(token); // ✅ token is threaded through
    console.log(user);
  }
  ```
- **Sequential `await` calls are slower than they need to be if the steps don't depend on each other** — awaiting one at a time forces them to run one after another, even when they could run in parallel. For independent operations, wrap them in `Promise.all()` instead:
  ```js
  // Slow — each waits for the previous, even though they don't depend on each other
  let a = await taskA();
  let b = await taskB();

  // Fast — both run concurrently, total time = the SLOWER of the two, not the sum
  let [resultA, resultB] = await Promise.all([taskA(), taskB()]);
  ```
- **A rejected `await`ed promise with no surrounding `try/catch` crashes the async function** — unlike `.catch()` on a promise chain, there's no automatic "safe" fallback; you must wrap risky `await` calls in `try/catch` yourself.
- **`async`/`await` is still built on Promises underneath** — it doesn't replace them, it just changes how you *write* the code that consumes them; you can freely mix `.then()` chains and `await` in the same codebase.

### 🔍 Walkthrough

```js
// async function always returns a Promise
async function getTestResults() {
  return "Pass";
}
getTestResults().then((result) => console.log(result)); // "Pass" — via .then(), since it's a Promise

// await unwraps the resolved value, sequential steps
async function runTest() {
  let result = await Promise.resolve("Login test passed");
  console.log(result);
  let result2 = await Promise.resolve("Dashboard test passed");
  console.log(result2);
}
runTest();

// Converting a .then() chain into async/await
function openBrowser() { return new Promise((resolve) => resolve("Browser opened!")); }
function goToLogin()   { return new Promise((resolve) => resolve("Login page loaded")); }

async function runLoginFlow() {
  let msg1 = await openBrowser();
  console.log("Step 1:", msg1);
  let msg2 = await goToLogin();
  console.log("Step 2:", msg2);
}
runLoginFlow();

// Error handling with try/catch/finally
async function testAPI() {
  try {
    let result = await Promise.reject("503 Service Unavailable");
    console.log("Result", result); // never runs
  } catch (error) {
    console.log("Error", error); // "Error 503 Service Unavailable"
  } finally {
    console.log("Cleanup!!"); // always runs
  }
}
testAPI();

// Real Playwright usage — every action is awaited
import { test, expect } from '@playwright/test';
test('uses await in a Playwright test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});
```

### ❓ Interview Questions

**Q9. What does an `async` function actually return?**
Always a Promise — even a plain `return "Pass";` is automatically wrapped, so the caller must use `.then()` or `await` to get the actual value out.

**Q10. Where can `await` be used?**
Only inside a function declared `async` (or at the top level of an ES module) — using it in a regular function is a `SyntaxError`.

**Q11. How do you handle errors with `async`/`await`?**
With a standard `try/catch/finally` block — an awaited promise that rejects throws inside the `try`, gets caught in `catch`, and `finally` runs regardless of the outcome, mirroring `.then()/.catch()/.finally()` on a raw promise chain.

**Q12. If you have three independent async operations, should you `await` them one at a time?**
Not if they don't depend on each other's results — awaiting sequentially adds up their times. Running them via `Promise.all([taskA(), taskB(), taskC()])` and awaiting that lets them run concurrently, so total time is closer to the *slowest single one*, not the sum of all three.

**Q13. Is `async`/`await` a replacement for Promises?**
No — it's built directly on top of them. `await` just pauses an `async` function until the Promise it's given settles; the Promise mechanics (states, `.then()`, chaining) are exactly the same underneath.

---

## 🕒 Bonus: Why Ordering Gets Confusing — Microtasks vs Macrotasks

This is the concept that explains *why* `setTimeout` callbacks and Promise callbacks don't run in the order you might expect, tying all three sections above together:

- All synchronous code runs first, always, top to bottom, with no interruptions.
- **Promise callbacks** (`.then()`, `.catch()`, `.finally()`, and code after an `await`) go into the **microtask queue** — this queue is drained completely before the engine moves on to anything else.
- **`setTimeout`/`setInterval` callbacks** go into the **macrotask (task) queue** — this only gets checked once the call stack AND the entire microtask queue are empty.
- **Microtasks always run before the next macrotask**, even if the macrotask's timer says `0ms`:
  ```js
  console.log("1: sync");
  setTimeout(() => console.log("2: macrotask (setTimeout)"), 0);
  Promise.resolve().then(() => console.log("3: microtask (promise)"));
  console.log("4: sync");
  // Output order: 1, 4, 3, 2
  // Sync code first, then ALL microtasks (promises), THEN the macrotask (setTimeout) — even at 0ms delay.
  ```

---

## ⚡ Overall TL;DR

- **Callbacks** — a function passed to run later; simple for one step, unreadable ("callback hell") for many chained async steps.
- **Promises** — an object with 3 states (pending/fulfilled/rejected) that flattens chained async steps via `.then()`, and centralizes error handling via `.catch()`; `.finally()` always runs.
- **`async`/`await`** — sugar over Promises that lets async code read like synchronous code; error handling via ordinary `try/catch/finally`; an `async` function always returns a Promise.
- **`Promise.all`** fails fast; **`Promise.allSettled`** always waits for everything; **`Promise.race`** settles with whichever finishes first (win or lose).
- Independent `await`s should be parallelized with `Promise.all()` — sequential `await` is only correct when each step truly depends on the previous one's result.
- **Microtasks (Promises) always drain before the next macrotask (`setTimeout`)** — this is why async execution order often surprises people reading code top-to-bottom.
