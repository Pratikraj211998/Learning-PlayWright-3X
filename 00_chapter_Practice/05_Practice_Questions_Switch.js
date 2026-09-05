// ==========================================
// Practice Questions — Set 3: Switch Statements
// Ordered from simple to hard.
// Solve each question below its comment block.
// ==========================================

// Q1. Write a switch statement that takes a `grade` variable ("A", "B", "C", "D", "F")
//     and logs a remark for each. Include a default case for invalid grades.
    let grade = "B";
    switch (grade) {
        case "A":
            console.log("Excellent");
            break;
        case "B":
            console.log("Good");
            break;
        case "C":
            console.log("Average");
            break;
        case "D":
            console.log("Below Average");
            break;
        case "F":
            console.log("Fail");
            break;
        default:
            console.log("Invalid grade");
    }


// Q2. Prove with a switch statement that it uses strict comparison (===) —
//     pass a string "2" against `case 2:` and show it does NOT match.
    let val = "2";
    switch (val) {
        case 2:
            console.log("matched number 2");
            break;
        default:
            console.log("no match — switch uses ===, and \"2\" !== 2");
    }


// Q3. Use grouped case labels (stacked, no code between them) to check if a `month`
//     number (1-12) belongs to Winter, Spring, Summer, or Autumn.
    let month = 4;
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn");
            break;
        default:
            console.log("Invalid month");
    }


// Q4. Write a switch statement with an intentional fall-through (no break) between
//     two cases, and explain in a comment what actually gets logged and why.
    let fruit = "apple";
    switch (fruit) {
        case "apple":
            console.log("apple"); // no break here — falls through
        case "banana":
            console.log("banana");
            break;
        default:
            console.log("unknown fruit");
    }
    // Logs BOTH "apple" AND "banana". Once "apple" matches, execution doesn't
    // stop after its block — without a `break`, it just keeps running the
    // code below it (the "banana" case) until it hits a `break` or the end
    // of the switch.


// Q5. Use the `switch(true)` pattern to classify a `marks` variable into
//     Grade A (>=90), B (>=75), C (>=50), Fail (<50).
    let marks = 82;
    switch (true) {
        case marks >= 90:
            console.log("Grade A");
            break;
        case marks >= 75:
            console.log("Grade B");
            break;
        case marks >= 50:
            console.log("Grade C");
            break;
        default:
            console.log("Fail");
    }


// ---------- Interview Process (theory + predict-the-output) ----------
// Answer these in a comment under each one.

// Q6. Does `switch` use `==` or `===` to compare the expression against each
//     `case`? What does that mean for `case 5:` when the value is `"5"`?


// Q7. Predict the output, then explain why:
//     switch ("b") {
//       case "a": console.log("A");
//       case "b": console.log("B");
//       case "c": console.log("C"); break;
//       default: console.log("D");
//     }


// Q8. Why do two `case` blocks declaring the same `let` variable name throw
//     a SyntaxError, and how do you fix it?


// Q9. When would you choose `switch` over `if/else if`, and when is
//     `if/else if` the better choice instead?
