# 🧠 JavaScript Keywords — Full Concept, Cheat Sheet & Notes

Reserved words the JavaScript engine treats specially. A keyword has a **fixed grammatical meaning** to the parser — you cannot use it as a variable, function, or class name (with a few nuanced exceptions covered below).

---

## 🧩 What Exactly Is a Keyword?

- A **keyword** is a word reserved by the language spec (ECMAScript) that triggers specific parsing behavior — `if`, `const`, `class`, `return`, etc.
- Keywords are different from **identifiers** (names you choose — `console`, `log`, `myVariable`). `console.log()` uses **zero keywords**; `console` and `log` are just identifiers pointing to a global object and its method.
- Not all "special" words are full keywords — JavaScript has **four tiers**:
  1. **Reserved keywords** — always reserved, never usable as identifiers (`if`, `const`, `class`...)
  2. **Strict-mode reserved words** — only reserved when `"use strict"` is active (or inside modules/classes, which are strict by default)
  3. **Contextual keywords** — act like keywords only in specific positions, but are legal identifiers elsewhere (`async`, `of`, `get`, `set`)
  4. **Literals** — fixed built-in values that behave like keywords but represent values, not operations (`true`, `false`, `null`)

---

## 📊 Cheat Sheet — Full Keyword List by Category

| Category | Keywords | Notes |
|---|---|---|
| **Declaration** | `var`, `let`, `const` | `let`/`const` are block-scoped; `var` is function-scoped and legacy |
| **Function** | `function`, `return`, `async`, `await`, `yield` | `async`/`await` are contextual; `yield` only reserved inside generators/strict mode |
| **Control Flow** | `if`, `else`, `switch`, `case`, `default`, `break`, `continue` | Branching and loop control |
| **Loops** | `for`, `while`, `do`, `of`, `in` | `of` (iterables) vs `in` (object keys) is a classic interview trap |
| **Error Handling** | `try`, `catch`, `finally`, `throw` | Structured exception handling |
| **Classes / OOP** | `class`, `extends`, `super`, `new`, `static`, `get`, `set` | `get`/`set`/`static` are contextual keywords |
| **Modules** | `import`, `export`, `from`, `as`, `default` | `from`/`as` are contextual, only meaningful in import/export statements |
| **Operators-as-words** | `typeof`, `instanceof`, `delete`, `void`, `in` | Word-form operators, not symbols like `+`/`-` |
| **Scope / Context** | `this`, `super` | Reference current instance / parent class |
| **Literals** | `true`, `false`, `null` | Fixed values, not operations — `undefined` is **not** a keyword, just a global property |
| **Miscellaneous** | `debugger`, `with` (deprecated, avoid), `new.target` | `with` is banned in strict mode |
| **Strict-mode-only reserved** | `implements`, `interface`, `package`, `private`, `protected`, `public`, `let`, `static`, `yield` | Legal identifiers in non-strict, sloppy-mode JS; reserved in strict mode/modules |
| **Always future-reserved** | `enum` | Reserved in every mode, for possible future use — never usable as an identifier |

---

## 📝 Key Notes & Gotchas (common interview traps)

- **`console` and `log` are NOT keywords.** They're identifiers. You could (badly) write `let console = 5;` and it would work — you'd just break `console.log` afterward.
- **`undefined`, `NaN`, `Infinity`, `globalThis` are NOT keywords** — they're properties of the global object. They *can* technically be shadowed by a local variable (though `undefined` as a local name in modern engines is mostly protected by convention, not the grammar).
- **`let` used to be usable as a variable name** in old sloppy-mode scripts (`var let = 5;` was legal pre-ES6). Since ES6, that's discouraged and disallowed in strict mode/modules.
- **`async`, `await`, `of`, `get`, `set`, `from`, `as`, `static` are contextual** — they only behave as keywords in their specific syntax position. Example: `async` is a keyword before a `function`, but you *can* still name a variable `async` in some contexts (though it's bad practice).
- **`yield` is only reserved inside generator functions** (`function*`) or strict mode — in regular sloppy-mode code it's just an identifier.
- **Modules and classes are always strict mode** — so inside any `.mjs`/`import`-export file or any `class` body, the full strict-mode reserved list applies automatically, even without `"use strict"`.
- **`this` is a keyword, not a variable** — you can't reassign it (`this = {}` is a syntax error).
- Using a reserved keyword as a variable name throws a **SyntaxError at parse time**, before your code even runs — the engine won't even start executing.

---

## 🔍 Example Walkthrough — One Keyword per Category

```js
const greeting = "Hello, World!";        // declaration: const

async function printGreeting(items) {    // function: async, function
  try {                                  // error handling: try
    if (!greeting) {                     // control flow: if
      throw new Error("Missing greeting"); // error handling: throw, operator-word: new
    }
    for (const item of items) {          // loop: for, of
      console.log(`${item}: ${greeting}`);
    }
  } catch (err) {                        // error handling: catch
    console.error(err);
  } finally {                            // error handling: finally
    console.log("done");
  }
}

class Greeter {                          // class: class
  static defaultName = "World";          // class: static
  #history = [];                          // (not a keyword — private field syntax `#`)

  constructor(name) {
    this.name = name || Greeter.defaultName; // scope: this
  }

  get history() { return this.#history; } // class: get
  set history(val) { this.#history.push(val); } // class: set
}

export default Greeter;                  // module: export, default
```

`console`, `log`, `Error`, `Greeter`, `greeting`, `items`, `name` → all identifiers, **not** keywords.

---

## ⚡ TL;DR

- A **keyword** has a fixed grammatical meaning to the JS parser — you can't reuse it as a name.
- Four tiers: **always-reserved** (`if`, `const`, `class`...), **strict-mode-only reserved** (`let`, `static`, `yield`, `interface`...), **contextual** (`async`, `of`, `get`, `set` — only special in specific spots), and **literals** (`true`, `false`, `null`).
- `undefined`, `NaN`, `console`, `log` are **not keywords** — just identifiers/global properties, a classic interview gotcha.
- Modules and classes are always strict mode, so the full strict-mode reserved list quietly applies inside them.
