// ==========================================
// Practice Questions — Set 5: Objects
// Ordered from simple to hard.
// Solve each question below its comment block.
// ==========================================

// ---------- Basic ----------

// Q1. Create an object `book` with properties title, author, and year.
//     Log one property using dot notation and one using bracket notation.


// Q2. Given the `book` object, add a new property `inStock` (boolean),
//     modify the `year`, then delete the `author` property. Log the object
//     after each step.


// Q3. Given `let a = { score: 10 };` and `let b = a;`, change `b.score` and
//     log `a.score`. Explain in a comment why it changed too.


// ---------- Intermediate ----------

// Q4. Given `let student = { name: "Amit", age: 22, grade: "A" };`, use
//     `Object.keys()`, `Object.values()`, and `Object.entries()` to log all
//     three separately.


// Q5. Use destructuring to pull `name` and `grade` out of `student` into
//     their own variables in one line. Also destructure a property that
//     doesn't exist, giving it a default value.


// Q6. Given `let config = { browser: "Chrome", timeout: 3000 };`, use spread
//     syntax to create a NEW object with `timeout` changed to 5000, without
//     modifying the original `config`. Log both to prove the original is
//     untouched.


// Q7. Given two objects `let defaults = { retries: 3, headless: true };` and
//     `let overrides = { headless: false };`, merge them into one object
//     where `overrides` wins on conflicts (use spread).


// ---------- Hard ----------

// Q8. Given a nested object:
//     `let user = { profile: { address: { city: "Pune" } } };`
//     safely log `user.profile.address.city` AND `user.profile.contact.phone`
//     (which doesn't exist) without crashing, using optional chaining.


// Q9. Write a function `deepClone(obj)` that creates a true deep copy of a
//     nested object (so changing a nested property on the copy does NOT
//     affect the original) — you may use `JSON.parse(JSON.stringify(obj))`
//     for this, but explain in a comment one limitation of that approach.


// Q10. Given `let settings = Object.freeze({ theme: "dark", lang: "en" });`,
//      attempt to change `settings.theme`, then log it to prove freeze
//      blocked the change. Then show that freeze is shallow: add a nested
//      object inside settings before freezing, and prove ITS properties can
//      still be changed.


// Q11. Write a function `countProperties(obj)` that returns how many
//      top-level keys an object has, without using `.length` directly on
//      the object (hint: `Object.keys()`).


// Q12. Write a function `flattenOneLevel(obj)` that takes an object like
//      `{ a: 1, b: { c: 2, d: 3 } }` and returns
//      `{ a: 1, c: 2, d: 3 }` — merging one level of nesting into the top
//      level (hint: `Object.entries()` + spread).


// ---------- Interview Process (theory + predict-the-output) ----------
// Answer these in a comment under each one.

// Q13. Why does changing a property through one variable affect another
//      variable that points to the same object? Explain in terms of
//      reference vs value.


// Q14. Predict the output, then explain why:
//      let c = { status: "pass" };
//      let d = { status: "pass" };
//      console.log(c === d);


// Q15. What's the difference between a SHALLOW copy (spread, Object.assign)
//      and a DEEP copy? Give an example where a shallow copy isn't enough.


// Q16. What's the difference between `delete obj.key` and `obj.key = undefined`?


// Q17. Predict the output, then explain why:
//      let user = { profile: null };
//      console.log(user.profile?.address?.city);
//      console.log(user.profile.address.city);
