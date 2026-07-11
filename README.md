# Learning-PlayWright-3X

Personal learning repo for **JavaScript → TypeScript → Playwright**, end to end.
This README doubles as a running notebook: core language notes, a quick cheat sheet, and a roadmap tying it back to Playwright test automation.

> Progress tracker: `chapter_01_Basic` — JS basics started (`hellowWorld.js`)

---

## Table of Contents

1. [Roadmap](#roadmap)
2. [JavaScript Notes](#javascript-notes)
3. [TypeScript Notes](#typescript-notes)
4. [JS/TS Cheat Sheet](#jsts-cheat-sheet)
5. [Playwright Connection](#playwright-connection)
6. [Practice Checklist](#practice-checklist)
7. [Resources](#resources)

---

## Roadmap

| Stage | Topic | Status |
|---|---|---|
| 1 | JS basics: variables, types, operators, functions | 🔲 |
| 2 | JS control flow, loops, arrays, objects | 🔲 |
| 3 | JS intermediate: destructuring, spread/rest, closures, `this` | 🔲 |
| 4 | JS async: callbacks, promises, async/await | 🔲 |
| 5 | JS modules, classes, error handling | 🔲 |
| 6 | TS basics: types, interfaces, functions | 🔲 |
| 7 | TS intermediate: generics, unions, utility types | 🔲 |
| 8 | TS config & tooling (`tsconfig.json`, strict mode) | 🔲 |
| 9 | Playwright + TS: Page/Locator types, fixtures, POM | 🔲 |
| 10 | Playwright: assertions, hooks, parallelism, CI | 🔲 |

Mark stages ✅ as you complete them.

---

## JavaScript Notes

### 1. Variables

```js
var a = 1;    // function-scoped, avoid using in modern JS
let b = 2;    // block-scoped, reassignable
const c = 3;  // block-scoped, cannot be reassigned (but object/array contents ARE mutable)

const user = { name: "Pratik" };
user.name = "Raj"; // ✅ allowed - not reassigning `user` itself
```

**Rule of thumb:** default to `const`, use `let` when reassignment is needed, avoid `var`.

### 2. Data Types

```js
// Primitives
typeof 42            // "number"
typeof "hi"           // "string"
typeof true           // "boolean"
typeof undefined      // "undefined"
typeof null           // "object" (famous JS quirk)
typeof Symbol()        // "symbol"
typeof 10n            // "bigint"

// Reference types
typeof {}             // "object"
typeof []              // "object"
typeof function(){}    // "function"
```

### 3. Operators

```js
5 + "5"      // "55"  (string concatenation)
5 == "5"     // true  (loose equality - type coercion)
5 === "5"    // false (strict equality - no coercion) ✅ prefer this
5 ?? 10      // 5 (nullish coalescing - only falls back on null/undefined)
0 || 10      // 10 (logical OR falls back on ANY falsy value)
user?.name   // optional chaining - safe access, avoids "cannot read property of undefined"
```

### 4. Functions

```js
// Declaration - hoisted (can be called before defined)
function greet(name) {
  return `Hello, ${name}`;
}

// Expression - not hoisted
const greet2 = function (name) {
  return `Hello, ${name}`;
};

// Arrow function - shorter, does NOT bind its own `this`
const greet3 = (name) => `Hello, ${name}`;

// Default & rest params
function sum(a = 0, ...nums) {
  return a + nums.reduce((acc, n) => acc + n, 0);
}
```

### 5. Objects & Arrays

```js
const obj = { name: "Pratik", role: "QA" };
const arr = [1, 2, 3];

// Destructuring
const { name, role } = obj;
const [first, second] = arr;

// Spread
const obj2 = { ...obj, active: true };
const arr2 = [...arr, 4, 5];

// Template literals
console.log(`${name} is a ${role}`);
```

### 6. Array Methods (used constantly in test automation)

```js
const nums = [1, 2, 3, 4, 5];

nums.map(n => n * 2);        // [2,4,6,8,10] - transform
nums.filter(n => n % 2 === 0); // [2,4] - select
nums.reduce((sum, n) => sum + n, 0); // 15 - accumulate
nums.find(n => n > 3);        // 4 - first match
nums.some(n => n > 4);        // true - any match
nums.every(n => n > 0);       // true - all match
nums.forEach(n => console.log(n)); // iterate, no return value
```

### 7. Control Flow

```js
if (condition) { }
else if (other) { }
else { }

switch (value) {
  case 1: break;
  default: break;
}

for (let i = 0; i < 5; i++) { }
for (const item of arr) { }     // values
for (const key in obj) { }      // keys
```

### 8. Closures & Scope

```js
function counter() {
  let count = 0;           // private variable, "closed over"
  return () => ++count;
}
const increment = counter();
increment(); // 1
increment(); // 2 - remembers state between calls
```

### 9. `this` Keyword

```js
const obj = {
  name: "Pratik",
  regular() { return this.name; },      // `this` = obj ✅
  arrow: () => { return this.name; },   // `this` = outer scope, NOT obj ❌
};
```
**Rule of thumb:** avoid arrow functions for object methods when you need `this`.

### 10. Asynchronous JavaScript

```js
// Callback (old style)
setTimeout(() => console.log("done"), 1000);

// Promise
const promise = new Promise((resolve, reject) => {
  if (ok) resolve("success");
  else reject("error");
});
promise.then(res => console.log(res)).catch(err => console.error(err));

// async/await (modern, used everywhere in Playwright)
async function run() {
  try {
    const result = await promise;
    console.log(result);
  } catch (err) {
    console.error(err);
  }
}
```

### 11. Modules

```js
// export
export const foo = 1;
export default function bar() {}

// import
import bar, { foo } from "./file.js";
```

### 12. Classes

```js
class Animal {
  #privateField = "hidden"; // private field
  constructor(name) {
    this.name = name;
  }
  speak() {
    return `${this.name} makes a sound.`;
  }
}
class Dog extends Animal {
  speak() {
    return `${this.name} barks.`;
  }
}
```

### 13. Error Handling

```js
try {
  riskyOperation();
} catch (err) {
  console.error(err.message);
} finally {
  cleanup();
}
```

---

## TypeScript Notes

TypeScript = JavaScript + static types. It compiles down to plain JS.

### 1. Basic Types

```ts
let age: number = 25;
let name: string = "Pratik";
let isActive: boolean = true;
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["a", 1];
let anything: any = "avoid this - disables type checking";
let unknownVal: unknown = "safer any - must narrow before use";
let nothing: void = undefined; // for functions with no return
let never_: never; // for functions that never return (throw/infinite loop)
```

### 2. Interfaces vs Type Aliases

```ts
interface User {
  name: string;
  age: number;
  email?: string;    // optional
  readonly id: number; // cannot be reassigned after creation
}

type User2 = {
  name: string;
  age: number;
};

// Interfaces can be extended/merged, types are more flexible (unions, primitives)
interface Admin extends User { role: string; }
type ID = string | number; // union type - only types can do this directly
```

### 3. Functions with Types

```ts
function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string): string => `Hello, ${name}`;

function log(message: string, ...rest: unknown[]): void {
  console.log(message, ...rest);
}
```

### 4. Enums

```ts
enum Role {
  Admin = "ADMIN",
  User = "USER",
}
const r: Role = Role.Admin;
```

### 5. Generics (reusable, type-safe components)

```ts
function identity<T>(value: T): T {
  return value;
}
identity<string>("hello");
identity<number>(42);

interface ApiResponse<T> {
  data: T;
  status: number;
}
```

### 6. Union, Intersection & Narrowing

```ts
type Status = "success" | "error" | "loading"; // union

function handle(status: Status) {
  if (status === "success") { /* narrowed to "success" */ }
}

type A = { a: string };
type B = { b: number };
type AB = A & B; // intersection - must have both
```

### 7. Classes with Access Modifiers

```ts
class Person {
  private ssn: string;      // only inside this class
  protected age: number;    // this class + subclasses
  public name: string;      // anywhere (default)

  constructor(name: string, age: number, ssn: string) {
    this.name = name;
    this.age = age;
    this.ssn = ssn;
  }
}
```

### 8. Utility Types (very commonly used)

```ts
interface User { id: number; name: string; email: string; }

Partial<User>       // all fields optional
Required<User>      // all fields required
Readonly<User>      // all fields readonly
Pick<User, "id" | "name">   // subset of fields
Omit<User, "email">          // all except given fields
Record<string, number>       // { [key: string]: number }
```

### 9. Type Assertions

```ts
const input = document.getElementById("name") as HTMLInputElement;
const value = (someValue as string).toUpperCase();
```

### 10. tsconfig.json essentials

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "outDir": "dist"
  }
}
```
`"strict": true` is recommended — catches more bugs at compile time (null checks, implicit `any`, etc.)

---

## JS/TS Cheat Sheet

| Concept | JavaScript | TypeScript |
|---|---|---|
| Declare variable | `let x = 1;` | `let x: number = 1;` |
| Function | `function f(a) {}` | `function f(a: number): void {}` |
| Object shape | plain object, no enforcement | `interface`/`type` enforces shape |
| Optional field | manual `undefined` check | `field?: string` |
| Array | `let a = [1,2]` | `let a: number[] = [1,2]` |
| Async | `async function f() {}` | `async function f(): Promise<void> {}` |
| Null safety | `obj?.field` | `obj?.field` + compiler warns if not narrowed |
| Compile step | none, runs directly | `tsc` compiles `.ts` → `.js` |

### Common gotchas

- `==` vs `===` → always use `===` / `!==`
- `null` vs `undefined` → `null` = intentional empty, `undefined` = not assigned
- Arrow functions don't have their own `this`
- `const` prevents reassignment, NOT mutation
- `any` in TS disables all type checking — avoid it, prefer `unknown`
- Hoisting: `var` and function declarations are hoisted, `let`/`const` are not (temporal dead zone)

---

## Playwright Connection

Since this repo's end goal is Playwright, map the JS/TS concepts directly to how they show up in tests:

```ts
import { test, expect, Page, Locator } from "@playwright/test";

test("login flow", async ({ page }: { page: Page }) => {
  // async/await everywhere - every Playwright action returns a Promise
  await page.goto("https://example.com");

  const loginBtn: Locator = page.getByRole("button", { name: "Login" });
  await loginBtn.click();

  // destructuring + optional chaining used constantly in fixtures/config
  const { username, password } = process.env;

  await expect(page).toHaveTitle(/Dashboard/);
});
```

Concepts to prioritize because Playwright uses them heavily:
- `async/await` (every action is asynchronous)
- Arrow functions & callbacks
- Destructuring (`{ page }`, `{ request }` fixtures)
- TS interfaces/types for Page Object Models
- Generics (`Promise<T>`, custom fixture types)
- Classes (Page Object Model pattern)

---

## Practice Checklist

- [ ] Rewrite `hellowWorld.js` using `let`/`const`, template literals
- [ ] Write 5 array method exercises (map/filter/reduce/find/some)
- [ ] Convert a small JS file to TS, add types, fix compiler errors
- [ ] Build one Page Object class using TS `interface` + `class`
- [ ] Write an async function with proper `try/catch` error handling
- [ ] Set up `tsconfig.json` with `strict: true` in this repo

---

## Resources

- [MDN JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Playwright Docs](https://playwright.dev/docs/intro)
- [Playwright TypeScript API](https://playwright.dev/docs/api/class-playwright)
