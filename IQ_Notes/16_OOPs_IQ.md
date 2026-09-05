# 🧠 Object-Oriented Programming (OOP) in JavaScript

JavaScript's `class` syntax is largely **sugar over prototypes** — under the hood, methods still live on a shared prototype object, not copied onto every instance. This note covers the four pillars as taught here: **Classes/Objects**, **Encapsulation**, **Inheritance** (all 4 types), and **Polymorphism**.

---

## 📊 The 4 Pillars at a Glance

| Pillar | Core Idea | JS Mechanism |
|---|---|---|
| **Classes & Objects** | A blueprint (`class`) for creating many similar objects (`instances`) | `class`, `constructor`, `new` |
| **Encapsulation** | Hide internal state, expose only controlled access | `#privateFields`, getter/setter methods |
| **Inheritance** | A class reuses/extends another class's behavior | `extends`, `super()` |
| **Polymorphism** | Different classes respond to the same method call in their own way | Method overriding + a shared interface |

---

## 1️⃣ Classes & Objects

### 📏 Rules

- `class` is a template; `new ClassName(...)` creates an **instance** — a real object built from that template.
- `constructor(...)` runs automatically once, the moment `new` creates the instance — used to set up initial state via `this.field = value`.
- A class can have **no constructor at all** — `class Bike {}` is valid, `new Bike()` just creates an empty object.
- Constructor parameters can have **default values**, exactly like regular functions: `constructor(name = "staging", port = 3000)`.
- Every instance created from the same class is a **separate, independent object** — changing one instance's fields never affects another instance.

### ⚠️ Exceptions & Gotchas

- **A class can only have ONE `constructor`** — writing two is a hard `SyntaxError: A class may only have one constructor`, unlike regular duplicate method names (see below).
- **Calling a class without `new` throws**: `Car()` (no `new`) → `TypeError: Class constructor Car cannot be invoked without 'new'`. Regular functions can be called with or without `new`; classes cannot.
- **Duplicate non-constructor method names in the same class don't error** — the last one defined simply wins silently, exactly like duplicate keys in an object literal.
- **Instances are compared by reference, just like plain objects**: `new Car("i10") === new Car("i10")` is `false`, even with identical constructor arguments.

### 🔍 Walkthrough

```js
class Car {
  constructor(assignedName) {
    this.name = assignedName;
  }
}
let i10 = new Car("i10");
let creta = new Car("creta");
console.log(i10.name);   // "i10"
console.log(creta.name);  // "creta" — completely independent instances

class Bike {} // no constructor needed
new Bike();     // Bike {} — still works fine

class Environment {
  constructor(name = "staging", port = 3000) { // default parameters, same as functions
    this.name = name;
    this.port = port;
  }
  getURL() { return "http://" + this.name + ":" + this.port; }
}
console.log(new Environment().getURL());                 // "http://staging:3000"
console.log(new Environment("production", 8080).getURL()); // "http://production:8080"
```

---

## 2️⃣ Encapsulation

**Encapsulation** means bundling data with the methods that operate on it, and hiding the internal state so it can only be changed through controlled, deliberate methods — not poked at directly from outside.

### 📏 Rules

- A field prefixed with `#` (e.g. `#balance`) is a **private field** — accessible only from inside the class body, never from outside.
- Private fields are typically exposed through **public getter/setter methods** (`getBalance()`, `setBalance()`) so the class can validate or restrict changes.
- **Static private fields** (`static #count`) work the same way, but belong to the class itself rather than any instance — useful for tracking data across *all* instances (like a running total).
- Encapsulation lets you enforce **business rules** on mutation — e.g. only allowing a balance change if a `isCashier` flag is true, rather than allowing direct, unchecked writes.

### ⚠️ Exceptions & Gotchas

- **Accessing a private field from outside the class is a hard `SyntaxError`**, not just `undefined` — `console.log(cred.#apiKey)` from outside the class fails to even parse.
- **Typo-ing the field name without `#` doesn't error — it just silently returns `undefined`**: if only `#apiKey` (private) exists and you write `cred.apiKey` (no `#`) from outside, JS doesn't complain — there's simply no public `apiKey` property, so you get `undefined` back with no warning that you used the wrong name.
- **Private fields are NOT inherited/visible the same way public ones are shared** — a subclass cannot directly access a parent class's `#privateField`; it must go through the parent's own public getter/setter methods.
- **`Object.freeze()` is a different tool from `#private` fields** — freeze stops *reassignment* of already-public properties from outside; `#private` fields go further, making the property completely inaccessible/invisible from outside the class in the first place.

### 🔍 Walkthrough

```js
class ICICI {
  #balance;
  constructor(name, balance) {
    this.#balance = balance;
    this.name = name;
  }
  getBalance() { return this.#balance; }
  setBalance(balance, isCashier) {
    if (isCashier) this.#balance = balance;
    else console.log("Not allowed"); // business rule enforced through the setter
  }
}
let acc = new ICICI("Pratik", 1000);
console.log(acc.getBalance());        // 1000
acc.setBalance(10000000, false);       // "Not allowed" — blocked
console.log(acc.getBalance());          // 1000 — unchanged
acc.setBalance(5000, true);              // allowed
console.log(acc.getBalance());            // 5000

// Static private field — shared across ALL instances
class TestCase {
  #status = "not run";
  static #count = 0;
  constructor(name) {
    this.name = name;
    TestCase.#count++;
  }
  run(pass) { this.#status = pass ? "PASSED" : "FAILED"; }
  getStatus() { return this.#status; }
  static getCount() { return TestCase.#count; }
}
new TestCase("login");
new TestCase("signup");
console.log(TestCase.getCount()); // 2 — tracked once, across every instance
```

---

## 3️⃣ Static Members

**Static** fields/methods belong to the **class itself**, not to any individual instance — think of them as "class-level," shared, single-copy data (like a counter of how many instances exist).

### 📏 Rules

- `static fieldName = value;` and `static methodName() { ... }` are accessed via `ClassName.fieldName` / `ClassName.methodName()` — **never** through an instance (`instance.staticField` is `undefined`).
- Inside a static method, `this` refers to the **class itself**, not an instance.
- Static members are useful for counters, factory methods, or configuration shared across every instance.

### ⚠️ Exceptions & Gotchas

- **Instance methods cannot be called on the class, and vice versa**: if `pramod_fn()` is a regular (instance) method, `TestRunner.pramod_fn()` throws `TypeError: TestRunner.pramod_fn is not a function` — it only exists on instances, not on the class object.
- **Classes have a built-in `.name` property** (their own identifier as a string) — so inside a `static` method, `this.name` does **not** refer to some instance's `name` field; it refers to the **class's own name**:
  ```js
  class Student {
    static collegeName = "PW AT Batch";
    constructor(name) { this.name = name; }
    static display() {
      console.log(this.name, "are part of", Student.collegeName);
      // this.name here = "Student" (the class's own built-in name), NOT any instance's name!
    }
  }
  Student.display(); // "Student are part of PW AT Batch"
  ```
  This is a very easy trap: it looks like it should print a student's name, but `this` inside `static display()` is the `Student` class, not any particular student instance.

### 🔍 Walkthrough

```js
class TestRunner {
  static totalTests = 0;
  static passCount = 0;
  constructor(name, passed) {
    this.name = name;             // instance field — unique per object
    TestRunner.totalTests++;       // static field — shared, incremented every time
    if (passed) TestRunner.passCount++;
  }
  static summary() {
    return TestRunner.passCount + "/" + TestRunner.totalTests + " passed";
  }
}
new TestRunner("Login", true);
new TestRunner("Signup", false);
new TestRunner("Cart", true);
console.log(TestRunner.summary()); // "2/3 passed"
```

---

## 4️⃣ Inheritance

**Inheritance** lets one class (the child/subclass) reuse and extend the behavior of another class (the parent/superclass) via `extends`.

### 📊 The 4 Types Taught Here

| Type | Shape | JS Support |
|---|---|---|
| **Single** | One parent → one child | ✅ Native (`extends`) |
| **Multiple** | One child → two or more direct parents | ❌ Not supported directly — worked around with **mixins** |
| **Multi-level** | Grandparent → parent → child (a chain) | ✅ Native — just chain `extends` |
| **Hierarchical** | One parent → many separate children | ✅ Native — each child independently `extends` the same parent |

### 📏 Rules

- `class Child extends Parent { ... }` — `Child` inherits all of `Parent`'s methods.
- `super(...)` inside a child's `constructor` calls the **parent's constructor** — required before you can use `this` in a subclass that defines its own constructor.
- `super.methodName()` calls the **parent's version** of a method that the child has overridden — used to extend rather than fully replace the parent's behavior.
- A child class **doesn't need its own constructor at all** — if omitted, it automatically inherits the parent's constructor as-is.
- JavaScript has **no native multiple inheritance** — a class can only `extends` one other class. The workaround is the **mixin pattern**: a function that takes a base class and returns a new class extending it, letting you compose several mixins by nesting the calls.

### ⚠️ Exceptions & Gotchas

- **`class Son extends F1, F2 {}` is a `SyntaxError`** — `extends` only accepts a single class expression, which is exactly why mixins exist as the workaround.
- **You must call `super()` before using `this`** in a subclass constructor that defines one — skipping it (when a constructor is present) throws a `ReferenceError`.
- **Overriding a method completely replaces the parent's version** unless you explicitly call `super.methodName()` inside the override to still run the parent's logic too.
- **Multi-level `super` calls chain correctly through every level**, not just the immediate parent:
  ```js
  class A { who() { return "A"; } }
  class B extends A { who() { return "B>" + super.who(); } }
  class C extends B { who() { return "C>" + super.who(); } }
  console.log(new C().who()); // "C>B>A" — each level's super call reaches the next level up
  ```

### 🔍 Walkthrough

```js
// Single inheritance
class Animal {
  constructor(name) { this.name = name; }
  eat() { console.log(this.name + " is eating"); }
  foo() { console.log("Foo called!"); }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);           // must call parent constructor first
    this.breed = breed;
  }
  bark() {
    super.foo();             // calls Animal's foo(), not overridden here
    console.log(this.name, "is barking!");
  }
}
let dog = new Dog("Rex", "Labrador");
dog.eat();   // "Rex is eating" — inherited from Animal
dog.bark();   // "Foo called!" then "Rex is barking!"

// Multiple inheritance workaround — mixins
let LoggerMixin = (Base) => class extends Base {
  log(msg) { console.log("[Log] " + msg); }
};
let ScreenshotMixin = (Base) => class extends Base {
  takeScreenshot() { console.log("[SCREENSHOT] captured"); }
};
class TestCase {
  constructor(name) { this.name = name; }
  run() { console.log("Running: " + this.name); }
}
class SmartTest extends ScreenshotMixin(LoggerMixin(TestCase)) {}
let t = new SmartTest("Login Flow");
t.run();             // from TestCase
t.log("started");     // from LoggerMixin
t.takeScreenshot();    // from ScreenshotMixin

// Multi-level inheritance (Grandparent -> Parent -> Child)
class BasePage {
  constructor(name) { this.name = name; }
  open() { console.log("[OPEN]", this.name); }
}
class AuthPage extends BasePage {
  login(user) { console.log("[LOGIN]", user); }
}
class AdminPage extends AuthPage {
  constructor() { super("Admin Panel"); }
  manageUsers() { console.log("[ADMIN] Managing users"); }
}
let admin = new AdminPage();
admin.open();          // from BasePage (2 levels up)
admin.login("root");    // from AuthPage (1 level up)
admin.manageUsers();      // from AdminPage itself

// Hierarchical inheritance (one parent, many children)
class Father {}
class Son1 extends Father {}
class Son2 extends Father {}
class Son3 extends Father {}
// Son1, Son2, Son3 each independently inherit from Father, with no relation to each other
```

---

## 5️⃣ Polymorphism

**Polymorphism** ("many forms") means different classes can implement the **same method name** in their own way, so calling code can treat them all through one common interface without knowing which exact subclass it's dealing with.

### 📏 Rules

- Achieved in JS through **method overriding** — a subclass redefines a method that already exists on its parent, with its own implementation.
- JavaScript does **not** support method **overloading** (defining multiple versions of the same method name that differ only by parameter count/type, resolved at compile time) — only overriding. If you define a method twice in one class, only the last definition is kept.
- Polymorphism shows its value most clearly with a **collection of different subclass instances**, all invoked through one shared method name — the caller doesn't need `if/else`/`switch` to check which type it has.

### ⚠️ Exceptions & Gotchas

- **Overriding vs. overloading is a very common interview mix-up**: overriding = same method name, different class, different behavior (✅ supported). Overloading = same method name, same class, different parameter signatures (❌ not supported — JS just keeps whichever definition came last).
- **Polymorphism plus `super.method()` lets a child extend rather than fully replace parent behavior** — combining inheritance and polymorphism, as seen in the `UITest`/`BaseTest` example where `setup()` is overridden but still calls `super.setup()` first.

### 🔍 Walkthrough

```js
// Same method name (execute), different behavior per subclass
class TestCase {
  execute() { console.log("Running generic test"); }
}
class UnitTest extends TestCase {
  execute() { console.log("Running unit test — checking one function"); }
}
class APITest extends TestCase {
  execute() { console.log("Running API test — sending HTTP request"); }
}
class E2ETest extends TestCase {
  execute() { console.log("Running E2E test — opening browser"); }
}

let tests = [new UnitTest(), new APITest(), new E2ETest()];
tests.forEach((test) => test.execute());
// Each one runs its OWN execute() — the loop never checks "what type is this?"

// Overriding + calling the parent version too (extend, don't just replace)
class BaseTest {
  setup() { console.log("Base: open browser"); }
}
class UITest extends BaseTest {
  setup() {
    super.setup();                        // still runs the parent's version
    console.log("UI: maximize window");     // then adds its own behavior
  }
}
new UITest().setup();
// "Base: open browser"
// "UI: maximize window"
```

---

## 🎁 Bonus: Method Chaining (Fluent Interface)

Not one of the 4 pillars, but a pattern that shows up naturally once you understand classes — a method that **returns `this`** lets you chain multiple calls together in one expression.

```js
class Counter {
  constructor() { this.count = 0; }
  increment() { this.count++; return this; } // returning `this` enables chaining
  display() { console.log("Count:", this.count); return this; }
}
new Counter().increment().increment().increment().display(); // "Count: 3"
```

---

## ❓ Important Interview Questions

**Q1. What's the difference between a class and an instance?**
A class is the blueprint/template (`class Car {}`); an instance is an actual object created from it (`new Car()`). Many independent instances can be created from the same class, each with its own separate field values.

**Q2. What happens if you call a class without `new`?**
`TypeError: Class constructor X cannot be invoked without 'new'` — unlike regular functions, classes can only ever be invoked as constructors.

**Q3. How does JavaScript achieve encapsulation, given it doesn't have `private`/`public` keywords like Java?**
Via the `#` prefix on field names — `#fieldName` — which makes that field completely inaccessible (a `SyntaxError` to even try) from outside the class body, typically paired with public getter/setter methods to control access.

**Q4. Why does `this.name` inside a `static` method not give you an instance's name?**
Because inside a `static` method, `this` refers to the **class itself**, not any instance — and classes have a built-in `.name` property holding their own class name as a string, which is what `this.name` actually returns there.

**Q5. Does JavaScript support multiple inheritance?**
No — a class can only `extends` one other class directly. The common workaround is the **mixin pattern**: functions that take a base class and return a new class extending it, letting you layer multiple mixins by nesting the function calls.

**Q6. What does `super()` do, and when is it required?**
It calls the parent class's constructor. It's required to be called **before** using `this` inside any subclass constructor that defines its own — omitting it throws a `ReferenceError`.

**Q7. What's the difference between method overriding and method overloading?**
Overriding: a subclass redefines a method that exists on its parent, with different behavior — fully supported in JS. Overloading: multiple methods with the same name but different parameter signatures in the *same* class — NOT supported in JS; only the last-defined version survives.

**Q8. How does polymorphism let you avoid `if/else` chains when handling different object types?**
By giving every related class the **same method name** with its own implementation, you can loop over a mixed array of instances and call that one method name on each — each object "knows" how to handle the call itself, so the caller never needs to check `instanceof` or a type field first.

**Q9. Can a subclass access a parent's private (`#`) field directly?**
No — private fields are only accessible from within the exact class body that declares them, even for subclasses. A subclass must go through the parent's own public getter/setter methods to read or modify that private state.

---

## ⚡ Overall TL;DR

- **Classes** are blueprints; `new` creates independent **instances**; a class can only have **one constructor** and must be called with `new`.
- **Encapsulation** hides state behind `#privateFields`, exposed through controlled getter/setter methods — accessing a private field from outside is a `SyntaxError`, not `undefined`.
- **Static** members belong to the class itself, not instances — and `this` inside a `static` method is the class, not an object (classes even have their own built-in `.name`).
- **Inheritance**: `extends` + `super()`/`super.method()`. Single, multi-level, and hierarchical inheritance are all native; **multiple inheritance isn't supported** — use the **mixin pattern** instead.
- **Polymorphism** = method **overriding** (supported), not overloading (not supported) — different subclasses respond to the same method call in their own way, letting calling code stay type-agnostic.
- Returning `this` from methods enables **method chaining** (a fluent interface) — a handy pattern once classes click.
