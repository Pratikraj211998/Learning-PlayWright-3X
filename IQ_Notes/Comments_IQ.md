# 🧠 Comments in JavaScript

Comments are lines the JavaScript engine completely ignores — they exist only for humans reading the code. They don't affect execution in any way.

---

## 📊 Types Table

| Type | Syntax | Spans | Common Use |
|---|---|---|---|
| **Single-line** | `// comment text` | One line only | Quick notes, disabling one line, trailing explanation |
| **Multi-line** | `/* comment text */` | One or many lines | Longer explanations, temporarily disabling a block of code |

---

## 🔍 Walkthrough — `04_comments.js`

```js
// single-line comment: this code will not run because it is commented out
// console.log("this won't run");

console.log("Hello, World!"); // comment can also follow code on the same line

/* multi-line comment:
   spans multiple lines,
   ignored entirely by JS */

/*
  used for longer notes
  or temporarily disabling a block of code
*/
```

- `//` comments out everything to the right, on that line only.
- A `//` comment can sit **after real code** on the same line — everything after `//` is ignored.
- `/* ... */` starts and ends the comment explicitly, so it can safely wrap multiple lines.
- `/* */` is also how you "comment out" a whole block of code at once, instead of adding `//` to every line.

---

## ⌨️ Essential VS Code Shortcuts

### Comments
| Action | Windows / Linux | Mac |
|---|---|---|
| Toggle line comment (`//`) | `Ctrl + /` | `Cmd + /` |
| Toggle block comment (`/* */`) | `Shift + Alt + A` | `Shift + Option + A` |

Select multiple lines first, then use the shortcut to comment/uncomment all of them at once.

### Editing
| Action | Windows / Linux | Mac |
|---|---|---|
| Cut line (no selection needed) | `Ctrl + X` | `Cmd + X` |
| Copy line (no selection needed) | `Ctrl + C` | `Cmd + C` |
| Move line up / down | `Alt + ↑ / ↓` | `Option + ↑ / ↓` |
| Copy line up / down | `Shift + Alt + ↑ / ↓` | `Shift + Option + ↑ / ↓` |
| Delete line | `Ctrl + Shift + K` | `Cmd + Shift + K` |
| Undo / Redo | `Ctrl + Z` / `Ctrl + Y` | `Cmd + Z` / `Cmd + Shift + Z` |
| Format document | `Shift + Alt + F` | `Shift + Option + F` |
| Rename symbol | `F2` | `F2` |
| Indent / Outdent line | `Ctrl + ]` / `Ctrl + [` | `Cmd + ]` / `Cmd + [` |

### Multi-cursor & Selection
| Action | Windows / Linux | Mac |
|---|---|---|
| Add cursor above/below | `Ctrl + Alt + ↑ / ↓` | `Cmd + Option + ↑ / ↓` |
| Add cursor at click | `Alt + Click` | `Option + Click` |
| Select next occurrence | `Ctrl + D` | `Cmd + D` |
| Select all occurrences | `Ctrl + Shift + L` | `Cmd + Shift + L` |
| Select current line | `Ctrl + L` | `Cmd + L` |
| Expand selection | `Shift + Alt + →` | `Shift + Option + →` |

### Navigation
| Action | Windows / Linux | Mac |
|---|---|---|
| Go to file | `Ctrl + P` | `Cmd + P` |
| Go to symbol in file | `Ctrl + Shift + O` | `Cmd + Shift + O` |
| Go to line | `Ctrl + G` | `Cmd + G` |
| Go to definition | `F12` | `F12` |
| Go back / forward | `Alt + ← / →` | `Ctrl + - / Ctrl + Shift + -` |
| Toggle sidebar | `Ctrl + B` | `Cmd + B` |
| Toggle terminal | `` Ctrl + ` `` | `` Cmd + ` `` |

### Search
| Action | Windows / Linux | Mac |
|---|---|---|
| Find in file | `Ctrl + F` | `Cmd + F` |
| Replace in file | `Ctrl + H` | `Cmd + Option + F` |
| Find in all files | `Ctrl + Shift + F` | `Cmd + Shift + F` |
| Command palette | `Ctrl + Shift + P` | `Cmd + Shift + P` |

### File / Window
| Action | Windows / Linux | Mac |
|---|---|---|
| New file | `Ctrl + N` | `Cmd + N` |
| Save / Save all | `Ctrl + S` / `Ctrl + K S` | `Cmd + S` / `Cmd + Option + S` |
| Close tab | `Ctrl + W` | `Cmd + W` |
| Reopen closed tab | `Ctrl + Shift + T` | `Cmd + Shift + T` |
| Split editor | `Ctrl + \` | `Cmd + \` |

---

## ❓ Important Interview Questions

**Q1. Do comments affect the performance or execution of JavaScript code?**
No. Comments are stripped out before/during parsing and have zero runtime cost or effect on execution.

**Q2. What's the difference between `//` and `/* */`?**
`//` comments out only the rest of the current line. `/* */` explicitly marks a start and end, so it can span multiple lines or sit in the middle of a line of code.

**Q3. Can you nest `/* */` comments inside each other?**
No — nested block comments aren't supported in JavaScript. `/* outer /* inner */ still here */` breaks, because the first `*/` closes the whole comment early.

**Q4. Can a `//` comment be placed after code on the same line?**
Yes — `let x = 5; // initialize x` is valid; everything after `//` on that line is ignored.

**Q5. Why are comments useful beyond just "explaining code"?**
They're also used to temporarily disable code during debugging, document function behavior (JSDoc-style `/** ... */`), and leave TODO/FIXME markers for future work.

**Q6. What is JSDoc and how does it relate to comments?**
JSDoc is a convention using `/** ... */` block comments with special tags (`@param`, `@returns`) directly above functions/classes, which tools and editors parse to provide type hints and auto-generated documentation — still just a comment to the JS engine itself.

---

## ⚡ TL;DR

- `//` → single-line comment, ignores the rest of that line.
- `/* */` → multi-line comment, ignores everything between the markers.
- Comments have **zero effect on execution** — purely for readability/documentation.
- Use `//` for short notes, `/* */` for longer notes or to disable a whole code block at once.
