//Confusing Comparsion

// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)

// Example of confusing comparison
console.log(0 == false); // true (loose equality, 0 is coerced to false)
console.log(0 === false); // false (strict equality, different types)
console.log('' == false); // true (loose equality, empty string is coerced to false)
console.log('' === false); // false (strict equality, different types)  


// ---------- 1. Empty string vs 0 vs "0"  (transitivity broken) ----------
console.log("" == 0);        // true   → "" coerced to Number → 0
console.log("0" == 0);       // true   → "0" coerced to Number → 0
console.log("" == "0");      // false  → both strings, compared as-is

// === fixes it
console.log("" === 0);       // false
console.log("0" === 0);      // false
console.log("" === "0");     // false