let amul = null;
let val = amul ?? "NANDANI Milk";
console.log(val);


let api_response = null;
let responsedata = api_response ?? "{}";
console.log(responsedata);


let api_response1 = "Pratik";
let responsedata1 = api_response1 ?? "{}";
console.log(responsedata1);



// AI notes_________________________________________________
// Nullish Coalescing Operator (??)

// The ?? operator returns its RIGHT-hand side operand only when the LEFT-hand side
// is null or undefined. For every other value (0, "", false, NaN) it returns the left side as-is.
// This makes it different from || (logical OR), which falls back on ANY falsy value.

// 1. ?? vs || - the key difference
console.log(0 ?? "fallback");        // 0   (0 is not null/undefined, so left side is kept)
console.log(0 || "fallback");        // "fallback" (0 is falsy, so || falls back)

console.log("" ?? "fallback");       // ""  (empty string is not null/undefined)
console.log("" || "fallback");       // "fallback" (empty string is falsy)

console.log(false ?? "fallback");    // false
console.log(false || "fallback");    // "fallback"

// 2. ?? only triggers on null or undefined
console.log(null ?? "default");      // "default"
console.log(undefined ?? "default"); // "default"
console.log(NaN ?? "default");       // NaN (NaN is not null/undefined)

// 3. Chaining ?? for multiple fallbacks
let userInput = null;
let savedSetting = undefined;
let appDefault = "system-default";
console.log(userInput ?? savedSetting ?? appDefault); // "system-default"

// 4. Nullish coalescing assignment (??=)
// Assigns a value only if the variable is currently null or undefined.
let settings = { theme: null, fontSize: 14 };
settings.theme ??= "dark";
settings.fontSize ??= 16; // no-op, fontSize is already 14
console.log(settings); // { theme: "dark", fontSize: 14 }

// 5. Combining with optional chaining (?.) - common real-world pattern
let user = { profile: null };
let city = user.profile?.address?.city ?? "Unknown city";
console.log(city); // "Unknown city"

// Note: ?? cannot be directly mixed with && or || without parentheses (SyntaxError).
// Example: (a || b) ?? c   -- this is fine
// Example: a || b ?? c     -- this throws a SyntaxError