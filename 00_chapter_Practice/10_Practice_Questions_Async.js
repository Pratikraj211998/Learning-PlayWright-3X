// ==========================================
// Practice Questions — Set 5: Callbacks, Promises, Async/Await
// Ordered from simple to hard.
// Solve each question below its comment block.
// ==========================================

// ---------- Basic ----------

// Q1. Write a function `processOrder(item, callback)` that logs
//     "Processing <item>" and then calls the callback. Call it once with a
//     named function and once with an arrow function as the callback.


// Q2. Given `console.log("A"); setTimeout(() => console.log("B"), 1000);
//     console.log("C");` — predict the output order BEFORE running it, then
//     run it and confirm. Explain in a comment why "B" prints last.


// Q3. Create a Promise `checkAge(age)` that resolves with "Allowed" if age
//     >= 18, otherwise rejects with "Not allowed". Call it once for age 20
//     and once for age 15, handling both with `.then()`/`.catch()`.


// ---------- Intermediate ----------

// Q4. You're given 3 nested callback functions (openApp -> login -> loadFeed)
//     each taking a callback and using setTimeout to simulate delay. Rewrite
//     them to return Promises instead, and chain them with `.then()` so the
//     nesting is flattened.


// Q5. Given 3 promises `taskA`, `taskB`, `taskC` that all resolve
//     successfully, use `Promise.all()` to run them together and log all
//     results at once.


// Q6. Now make `taskB` reject instead. Show what happens with `Promise.all()`
//     (should skip to `.catch()`), then show the difference using
//     `Promise.allSettled()` (should still report all 3 outcomes).


// Q7. Convert your Promise chain from Q4 into an `async function` using
//     `await` for each step instead of `.then()`. Confirm it produces the
//     same output.


// ---------- Hard ----------

// Q8. Write an async function `fetchUserData(userId)` that "fetches" a user
//     (simulate with a Promise that resolves after a setTimeout) and then
//     "fetches" that user's orders (another simulated async call) — using
//     sequential `await` since the second call depends on the first's
//     result.


// Q9. Write an async function `runAllChecks()` that runs THREE independent
//     checks (e.g. checkDB(), checkAuth(), checkCache() — each an async
//     function that resolves after a delay) using `Promise.all()` so they
//     run in PARALLEL instead of one after another. Add a console.time/
//     console.timeEnd (or Date.now() diff) to prove it's faster than
//     awaiting them one by one.


// Q10. Write an async function `safeApiCall(shouldFail)` that uses
//      try/catch/finally: it awaits a promise that rejects with "API Error"
//      when `shouldFail` is true, resolves with "API Success" otherwise.
//      Log the error in catch, the result in try, and "Cleanup done" in
//      finally — for BOTH a passing and a failing call.


// Q11. Write an async function `retryOperation(fn, maxRetries)` that calls
//      an async function `fn`, and if it throws/rejects, retries up to
//      `maxRetries` times before finally giving up and re-throwing the last
//      error. Test it with a function that always fails, and one that
//      succeeds on the 2nd attempt.


// ---------- Interview Process (theory + predict-the-output) ----------
// Answer these in a comment under each one.

// Q12. Predict the output ORDER, then explain why, in terms of the
//      microtask vs macrotask queue:
//      console.log("1");
//      setTimeout(() => console.log("2"), 0);
//      Promise.resolve().then(() => console.log("3"));
//      console.log("4");


// Q13. What's the difference between `Promise.all()` and
//      `Promise.allSettled()`? When would `allSettled` be the right choice?


// Q14. What does an `async` function ALWAYS return, even if you write
//      `return "done";` with no explicit Promise involved?


// Q15. Predict what happens, then explain why:
//      async function run() {
//        let result = await Promise.reject("boom");
//        console.log(result);
//      }
//      run();
//      // no try/catch anywhere — what happens when this runs?


// Q16. If you have three independent async calls that don't depend on each
//      other's results, why is awaiting them one at a time slower than
//      necessary? What should you use instead?
