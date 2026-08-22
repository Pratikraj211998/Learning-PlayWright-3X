let str = "  Hello, World!  ";
console.log(str.toUpperCase());
console.log(str.toLowerCase());

// Trim whitespace
console.log(str.trim());

str.trimStart();
str.trimEnd();

// Replace
let msg = "Test: FAIL. Retry: FAIL.";
console.log(msg.replace("FAIL", "PASS")); // // "Test: PASS. Retry: FAIL."  (first only)
console.log(msg.replaceAll("FAIL", "PASS"));// "Test: PASS. Retry: PASS."  (all occurrences)
console.log(msg.replace(/FAIL/g, "PASS")); // replace all with Regex beacause strings are immutable in JavaScript
console.log(msg);// "Test: FAIL. Retry: FAIL."  (original string unchanged) beacause strings are immutable in JavaScript

// Concatenation

"Hello" + " " + "World";
"Hello".concat(" ", "World");
`${"Hello"} ${"World"}`;