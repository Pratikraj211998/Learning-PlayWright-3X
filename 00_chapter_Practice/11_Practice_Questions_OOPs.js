// ==========================================
// Practice Questions — Set 5: OOPs (Classes, Encapsulation, Inheritance, Polymorphism)
// Ordered from simple to hard.
// Solve each question below its comment block.
// ==========================================

// ---------- Basic ----------

// Q1. Create a class `Book` with a constructor that takes `title` and
//     `author`, and a method `describe()` that logs
//     "<title> by <author>". Create 2 different book instances and call
//     describe() on both.


// Q2. Create a class `Rectangle` with `width` and `height` in the
//     constructor, and a method `area()` that returns width * height.
//     Create 2 rectangles with different sizes and log both areas.


// ---------- Intermediate ----------

// Q3. Rewrite `Rectangle` from Q2 to make `width` and `height` PRIVATE
//     (`#width`, `#height`), and add `getWidth()`/`getHeight()` getter
//     methods plus a `setWidth(newWidth)` setter that only allows positive
//     numbers (log "Invalid width" otherwise).


// Q4. Create a class `Product` with a `static` field `totalProducts`
//     starting at 0, incremented in the constructor every time a new
//     product is created. Create 4 products, then log
//     `Product.totalProducts`.


// Q5. Create a base class `Shape` with a method `describe()` that logs
//     "I am a shape". Create a subclass `Circle` that extends `Shape`,
//     adds its own `radius` field, and overrides `describe()` to log
//     "I am a circle with radius <radius>" while still calling the
//     parent's `describe()` first via `super.describe()`.


// ---------- Hard ----------

// Q6. Create a 3-level inheritance chain: `Vehicle` -> `Car` -> `ElectricCar`.
//     - Vehicle: constructor(brand), method start() logs "<brand> starting"
//     - Car: adds wheels = 4
//     - ElectricCar: adds batteryRange, overrides start() to call
//       super.start() AND then log "Silent electric start, range: <range>km"
//     Create an ElectricCar and call start().


// Q7. Create 3 classes `EmailNotifier`, `SMSNotifier`, `PushNotifier`, each
//     with a `send(message)` method that logs the message in its own format
//     (e.g. "[EMAIL] message", "[SMS] message", "[PUSH] message"). Put
//     instances of all 3 in an array and loop through calling `send()` on
//     each — proving polymorphism (same method name, different behavior).


// Q8. Using the mixin pattern (since JS doesn't support multiple
//     inheritance), create `CanFly` and `CanSwim` mixins, and a class `Duck`
//     that uses BOTH mixins so a Duck instance can call both `.fly()` and
//     `.swim()`.


// Q9. Create a class `BankAccount` with a private `#balance` field
//     (starting from a constructor argument), and methods `deposit(amount)`,
//     `withdraw(amount)` (should log "Insufficient funds" and do nothing if
//     amount > balance), and `getBalance()`. Make `deposit`/`withdraw`
//     RETURN `this` so they can be chained, e.g.
//     `account.deposit(100).withdraw(30).deposit(50)`. Log the final
//     balance after chaining several calls.


// ---------- Interview Process (theory + predict-the-output) ----------
// Answer these in a comment under each one — no need to write full programs,
// just explain your reasoning like you would out loud in an interview.

// Q10. In your own words: what's the difference between a class and an
//      object/instance? Give a one-line analogy.


// Q11. Why does JavaScript throw a SyntaxError if a class has two
//      `constructor` methods, but silently allows two regular methods with
//      the same name (the last one just wins)?


// Q12. What's the difference between method OVERRIDING and method
//      OVERLOADING — and which one does JavaScript actually support?


// Q13. Predict the output, then explain WHY, before running it:
//      class Animal {
//        speak() { return "..."; }
//      }
//      class Dog extends Animal {
//        speak() { return "Woof>" + super.speak(); }
//      }
//      class Puppy extends Dog {
//        speak() { return "Yip>" + super.speak(); }
//      }
//      console.log(new Puppy().speak());


// Q14. Predict the output, then explain WHY:
//      class Team {
//        static memberCount = 0;
//        constructor(name) {
//          this.name = name;
//          Team.memberCount++;
//        }
//        static describe() {
//          return this.name + " has " + Team.memberCount + " members";
//        }
//      }
//      new Team("Alice");
//      new Team("Bob");
//      console.log(Team.describe());
//      // hint: think carefully about what `this.name` refers to INSIDE a
//      // static method, vs inside a regular constructor.


// Q15. A teammate writes: `if (account.#balance > 0) { ... }` OUTSIDE the
//      BankAccount class from Q9, and it fails to even run. What kind of
//      error is this, and why does JS treat it so strictly compared to just
//      returning `undefined`?


// Q16. Why can't you write `class Robot extends Human, Machine {}` in
//      JavaScript? What is the actual workaround pattern used to combine
//      behavior from more than one "parent," and what's one downside of
//      that workaround compared to real multiple inheritance?


// Q17. In an interview, you're asked: "Does JavaScript have true private
//      class members, or is it just a naming convention (like `_balance`)?"
//      Answer this, and explain the difference between `#balance` and a
//      plain `_balance` field in terms of what actually enforces privacy.


// Q18. You have an array of 5 different Shape subclasses (Circle, Square,
//      Triangle, etc.), each overriding an `area()` method. Explain, without
//      writing code, why polymorphism lets you calculate total area with a
//      single `.reduce()` call instead of a `switch` statement checking each
//      shape's type.
