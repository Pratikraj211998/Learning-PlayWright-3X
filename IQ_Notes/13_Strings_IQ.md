# 🧠 Strings in JavaScript

A **string** is an ordered, immutable sequence of characters used to represent text. Strings are a primitive type — every "modification" method actually returns a **brand-new** string rather than changing the original.

---

## 📊 Creating Strings

| Method | Example | Notes |
|---|---|---|
| **Single quotes** | `'hello'` | No functional difference from double quotes |
| **Double quotes** | `"world"` | No functional difference from single quotes — pick one style and stay consistent |
| **Template literals (backticks)** | `` `Hello, ${name}!` `` | Supports **interpolation** (`${expression}`) and **multiline** strings without `\n` |
| **`String(value)`** | `String(200)` → `"200"` | Converts any value to its string form — works on numbers, booleans, `null`, `undefined`, arrays |
| **Multiline template literal** | `` `line1\nline2` `` written across actual lines inside backticks | Preserves line breaks and indentation exactly as written |

```js
let a = 'hello';                       // single quotes
let b = "world";                        // double quotes
let msg = `Hello, ${a}! 2 + 2 = ${2+2}`; // template literal — "Hello, hello! 2 + 2 = 4"

let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`; // multiline, preserved exactly

console.log(String(200));   // "200"
console.log(String(true));   // "true"
console.log(String(null));    // "null"
console.log(String([1, 2]));   // "1,2"
```

---

## 📊 Properties & Access

| Operation | Example | Notes |
|---|---|---|
| **`.length`** | `"Hello".length` → `5` | Number of UTF-16 code units |
| **Index access** | `str[0]` | Zero-indexed; out-of-range returns `undefined` |
| **`.at(index)`** | `str.at(-1)` | Modern way, supports **negative indices** for "from the end" access |
| **`.charAt(index)`** | `str.charAt(0)` | Old-school equivalent of `str[0]`; returns `""` (empty string) for out-of-range, not `undefined` |
| **`.charCodeAt(index)`** | `"H".charCodeAt(0)` → `72` | Returns the UTF-16 code unit (numeric) at that position |
| **`String.fromCharCode(code)`** | `String.fromCharCode(72)` → `"H"` | The reverse of `charCodeAt` — builds a character from a numeric code |

---

## 📊 Searching & Checking

| Method | Returns | Notes |
|---|---|---|
| `includes(sub)` | boolean | Checks presence anywhere in the string |
| `startsWith(sub)` | boolean | Checks the very beginning (case-sensitive) |
| `endsWith(sub)` | boolean | Checks the very end (case-sensitive) |
| `indexOf(sub)` | index or `-1` | First occurrence, searching left → right |
| `lastIndexOf(sub)` | index or `-1` | Last occurrence, searching right → left |
| `search(regex)` | index or `-1` | Like `indexOf` but accepts a regular expression |

```js
let url = "https://staging.vwo.com/api/login?retry=true";
url.includes("staging");     // true
url.includes("production");   // false
url.startsWith("https");       // true
url.startsWith("http://");      // false — must match from the very start
url.endsWith("true");            // true
url.indexOf("a");                 // 12 — first "a"
url.lastIndexOf("a");              // 40-ish — last "a"
url.indexOf("nothere");             // -1 — not found
```

---

## 📊 Extracting Substrings

| Method | Example | Notes |
|---|---|---|
| `slice(start, end)` | `"Hello".slice(1, 3)` → `"el"` | Supports **negative indices** (counts from the end); most commonly used |
| `substring(start, end)` | `"Hello".substring(1, 3)` → `"el"` | Like `slice`, but negative/out-of-order args get clamped to `0` instead of counting from the end |
| `substr(start, length)` | `"Hello".substr(1, 3)` → `"ell"` | **Deprecated** — takes a length instead of an end index; avoid in new code |

---

## 📊 Modifying / Transforming (all return a NEW string)

| Method | Example | Purpose |
|---|---|---|
| `toUpperCase()` / `toLowerCase()` | `"Hi".toUpperCase()` → `"HI"` | Case conversion |
| `trim()` / `trimStart()` / `trimEnd()` | `"  hi  ".trim()` → `"hi"` | Remove whitespace from both/one side |
| `replace(search, replacement)` | `"a-a".replace("a","X")` → `"X-a"` | Replaces only the **first** match (unless `search` is a global regex) |
| `replaceAll(search, replacement)` | `"a-a".replaceAll("a","X")` → `"X-X"` | Replaces **every** match |
| `padStart(len, pad)` / `padEnd(len, pad)` | `"5".padStart(3,"0")` → `"005"` | Pads to a target length — common for formatting IDs, times |
| `repeat(n)` | `"ab".repeat(3)` → `"ababab"` | Repeats the string `n` times |
| `concat(...strings)` | `"a".concat("b","c")` → `"abc"` | Joins strings — `+`/template literals are used far more often in practice |
| `split(separator)` | `"a,b,c".split(",")` → `["a","b","c"]` | Breaks a string into an **array** using a separator |
| `[...str].join(...)` / `Array.from(str)` | `"abc".split("")` → `["a","b","c"]` | Common way to turn a string into individual characters |

---

## 📏 Rules

- Strings are **immutable** — no method ever changes the original string; everything returns a **new** string. `str[0] = "X"` silently does nothing in non-strict contexts.
- Single quotes and double quotes are **functionally identical** — only template literals (backticks) add interpolation and native multiline support.
- Comparing strings with `<`/`>` compares them **lexicographically by UTF-16 code unit** — uppercase letters (`A`–`Z`, codes 65–90) sort **before** all lowercase letters (`a`–`z`, codes 97–122).
- `+` on strings performs **concatenation**; on a string and a number, the number is coerced to a string first (see [Operators IQ](08_Operators_IQ.md)).
- `split()` with no separator argument, or `split("")`, breaks the string into individual characters (or leaves it as one single-element array if the separator is omitted).

---

## ⚠️ Exceptions & Gotchas

- **Strings are immutable — mutation attempts fail silently**:
  ```js
  let str = "Hello";
  str[0] = "J";
  console.log(str); // "Hello" — unchanged, no error thrown
  ```
- **`charAt()` vs bracket access on out-of-range index**: `str.charAt(99)` returns `""` (empty string), but `str[99]` returns `undefined` — subtly different "nothing found" values.
- **`replace()` only replaces the first match** unless you pass a global regex (`/x/g`) or use `replaceAll()` — a very common bug when someone expects all occurrences to be replaced.
- **`substring()` silently swaps/clamps invalid arguments** instead of erroring: negative numbers are treated as `0`, and if `start > end`, the two are swapped. `slice()` instead treats negative numbers as "count from the end."
- **Escape sequences inside quotes**: `\n` (newline), `\t` (tab), `\\` (literal backslash), `\"`/`\'` (literal quote) — required in single/double-quoted strings when a raw newline or matching quote appears; **not** needed inside template literals for newlines, since those can span multiple lines directly.
- **String comparison is case-sensitive and code-point based**: `"Banana" < "apple"` is `true`, because uppercase `"B"` (66) has a lower code than lowercase `"a"` (97) — surprising if you expect alphabetical-ignoring-case order.
- **`indexOf`/`search` return `-1` on no match — never `undefined` or an error** — always compare against `-1`, not truthiness, since index `0` (a valid match at the very start) is falsy-looking but not "not found."

---

## 🔍 Walkthrough

```js
// Creation
let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test completed in ${320}ms`;
console.log(message); // "Test completed in 320ms"

// Access
let str = "Hello, World!";
console.log(str.length);    // 13
console.log(str[0]);          // "H"
console.log(str.at(-1));       // "!"
console.log(str.charAt(0));     // "H"
console.log(str.charCodeAt(0));  // 72
console.log(String.fromCharCode(72)); // "H"

// Searching
console.log(url.includes("app"));     // true
console.log(url.startsWith("https"));  // true
console.log(url.endsWith(".com"));      // true
console.log(url.indexOf("z"));           // -1

// Extracting
console.log("Hello".slice(1, 3));      // "el"
console.log("Hello".slice(-3));         // "llo" — negative index from the end
console.log("Hello".substring(1, 3));    // "el"

// Transforming
console.log("  Hi There  ".trim());          // "Hi There"
console.log("Hi".toUpperCase());              // "HI"
console.log("a-a-a".replace("a", "X"));        // "X-a-a" — only first match
console.log("a-a-a".replaceAll("a", "X"));      // "X-X-X" — all matches
console.log("5".padStart(3, "0"));               // "005"
console.log("ab".repeat(3));                       // "ababab"
console.log("a,b,c".split(","));                    // ["a", "b", "c"]
console.log("abc".split(""));                        // ["a", "b", "c"]

// Immutability proof
let name = "Pratik";
name[0] = "Z";
console.log(name); // "Pratik" — unchanged

// Comparison gotcha
console.log("Banana" < "apple"); // true — uppercase sorts before lowercase
```

---

## ❓ Important Interview Questions

**Q1. Are strings mutable or immutable in JavaScript?**
Immutable. Every string method (`slice`, `replace`, `toUpperCase`, etc.) returns a **new** string rather than modifying the original — even `str[0] = "X"` silently does nothing.

**Q2. What's the difference between `slice()` and `substring()`?**
Both extract a portion given a start/end index. `slice()` treats negative arguments as "count from the end" (`"Hello".slice(-3)` → `"llo"`). `substring()` clamps negative numbers to `0` and swaps `start`/`end` if they're in the wrong order, instead of supporting negative indexing.

**Q3. Why does `.replace()` only change the first match?**
By default, `replace()` with a plain string or non-global regex stops after the first match. To replace every occurrence, use `replaceAll()`, or pass a regex with the global flag (`/pattern/g`).

**Q4. What's the difference between single quotes, double quotes, and backticks?**
Single and double quotes are functionally identical — just different delimiters. Backticks (template literals) additionally support `${expression}` interpolation and native multiline strings without needing `\n`.

**Q5. Why does `"Banana" < "apple"` evaluate to `true`?**
String comparison operators compare characters by their UTF-16 code unit values. Uppercase letters (`A`–`Z` = 65–90) all have lower numeric codes than lowercase letters (`a`–`z` = 97–122), so any uppercase-starting string sorts before any lowercase-starting string, regardless of alphabetical intuition.

**Q6. What does `indexOf()` return when nothing is found, and why does that matter?**
`-1`, never `undefined` or an error. This matters because index `0` (found at the very start) is falsy in a boolean check, so you must explicitly compare against `-1` (`if (str.indexOf(x) !== -1)`), not just check truthiness.

**Q7. How do you convert a string into an array of its individual characters?**
`str.split("")` (or `Array.from(str)`, or the spread operator `[...str]` — the spread/`Array.from` versions handle multi-byte Unicode characters more correctly than `split("")`).

**Q8. What does `charCodeAt()` do, and what's its inverse?**
`charCodeAt(index)` returns the numeric UTF-16 code unit of the character at that index (e.g., `"H".charCodeAt(0)` → `72`). `String.fromCharCode(code)` does the reverse, building a character from a numeric code.

**Q9. How would you pad a number like `5` into a zero-padded 3-digit string like `"005"`?**
Convert it to a string and use `padStart`: `String(5).padStart(3, "0")` → `"005"`. `padEnd` does the same but pads on the right instead.

**Q10. Why doesn't `str[0] = "X"` throw an error even though it doesn't work?**
Because strings are primitives, not objects with writable indexed properties. In non-strict mode, assigning to an index on a primitive silently fails rather than throwing — it's a no-op, not an error, which can hide the bug from a developer who assumes it worked.

---

## ⚡ TL;DR

- Strings are **immutable** — every method returns a new string; direct index assignment silently fails.
- **Template literals** (backticks) are the modern default — interpolation (`${}`) and multiline support that single/double quotes lack.
- `slice()` supports negative indices; `substring()` clamps/swaps instead — prefer `slice()` for most use cases.
- `replace()` changes only the first match; `replaceAll()` (or a global regex) changes every match.
- String comparisons (`<`, `>`) are **case-sensitive**, based on UTF-16 code points — uppercase sorts before lowercase.
- `indexOf`/`search` return `-1` on no match — always compare explicitly against `-1`, never rely on truthiness.
- `padStart`/`padEnd`/`repeat`/`split`/`trim` cover the vast majority of everyday string formatting needs.
