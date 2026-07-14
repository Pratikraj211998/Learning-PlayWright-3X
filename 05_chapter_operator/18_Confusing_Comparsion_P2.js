// Rule of thumb:
//   ==   → loose equality  (does type coercion, surprising)
//   ===  → strict equality (no coercion, what you usually want)    

console.log(" — Confusing Comparisons in JS");

// ---------- 2. null and undefined ----------  
console.log(null == undefined); // true (loose equality, both are considered equal)    
console.log(null === undefined); // false (strict equality, different types)    
console.log(null == 0); // false (loose equality, null is only equal to undefined)
console.log(undefined == 0); // false (loose equality, undefined is only equal to null)
console.log(null == 0);         // false  → null only == undefined/null
console.log(null >= 0);           // true   → >= coerces null to 0  (gotcha!)
console.log(null > 0);            // false
console.log(null == 0 || null > 0); // false … but null >= 0 is true 🤯