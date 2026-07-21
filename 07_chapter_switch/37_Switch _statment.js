// ==========================================
// SWITCH STATEMENT in JavaScript — Full Concept
// ==========================================

// A switch statement checks a single value against multiple possible
// cases and runs the code block for whichever case matches.
// It's basically a cleaner alternative to a long if/else if/else chain
// when you're comparing ONE variable against many fixed values.

// Basic syntax:
// switch (expression) {
//   case value1:
//     // code
//     break;
//   case value2:
//     // code
//     break;
//   default:
//     // code if nothing matches
// }


// ---------- 1. Basic Example ----------

let day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day number");
}
// Output: Wednesday


// ---------- 2. Why `break` matters — fall-through behavior ----------

// If you forget `break`, JS doesn't stop at the matching case —
// it keeps running every case below it until it hits a break or the end.
// This is called "fall-through" and is a very common source of bugs.

let fruit = "apple";

switch (fruit) {
  case "apple":
    console.log("It's an apple");
    // no break here on purpose
  case "banana":
    console.log("It's a banana");
    break;
  case "mango":
    console.log("It's a mango");
    break;
}
// Output:
// It's an apple
// It's a banana
// ^ "banana" ran too, even though fruit is "apple" — because there was no break


// ---------- 3. `default` case ----------

// `default` runs when no case matches. It doesn't have to be last
// (though that's the convention), and it's optional — if omitted and
// nothing matches, the switch simply does nothing.

let signal = "yellow";

switch (signal) {
  case "red":
    console.log("Stop");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Slow down");
    break;
}
// Output: Slow down


// ---------- 4. Grouping multiple cases (shared fall-through) ----------

// You can intentionally use fall-through to run the same code
// for several different case values.

let month = 4;
let season;

switch (month) {
  case 12:
  case 1:
  case 2:
    season = "Winter";
    break;
  case 3:
  case 4:
  case 5:
    season = "Spring";
    break;
  case 6:
  case 7:
  case 8:
    season = "Summer";
    break;
  case 9:
  case 10:
  case 11:
    season = "Autumn";
    break;
  default:
    season = "Invalid month";
}
console.log(season); // Spring


// ---------- 5. switch uses STRICT comparison (===) ----------

// The expression is matched against each case using === , not ==.
// So type matters — "5" (string) will NOT match 5 (number).

let value = "5";

switch (value) {
  case 5:
    console.log("Matched number 5");
    break;
  case "5":
    console.log("Matched string '5'");
    break;
  default:
    console.log("No match");
}
// Output: Matched string '5'  -> proves switch uses strict (===) comparison


// ---------- 6. switch(true) pattern — for ranges/conditions instead of exact values ----------

// A regular switch only checks equality. To check RANGES (like if/else if
// with >, <, etc.), switch on `true` and put the conditions in each case.

let score = 82;

switch (true) {
  case score >= 90:
    console.log("Grade A");
    break;
  case score >= 80:
    console.log("Grade B");
    break;
  case score >= 70:
    console.log("Grade C");
    break;
  default:
    console.log("Grade F");
}
// Output: Grade B
// (score >= 90 is false, score >= 80 is true -> matches first true case)


// ---------- 7. Declaring variables inside case blocks ----------

// If two different case blocks declare a `let`/`const` with the SAME name,
// you'll get a SyntaxError, because all cases share ONE block scope by default.
// Fix: wrap each case body in its own { } to give it a separate scope.

let type = "b";

switch (type) {
  case "a": {
    let result = "Case A result";
    console.log(result);
    break;
  }
  case "b": {
    let result = "Case B result"; // safe — scoped to this block only
    console.log(result);
    break;
  }
  default:
    console.log("No match");
}
// Output: Case B result


// ---------- 8. Nested switch ----------

let vehicleType = "car";
let vehicleBrand = "Tesla";

switch (vehicleType) {
  case "car":
    switch (vehicleBrand) {
      case "Tesla":
        console.log("Electric car - Tesla");
        break;
      case "Toyota":
        console.log("Petrol/Hybrid car - Toyota");
        break;
      default:
        console.log("Unknown car brand");
    }
    break;
  case "bike":
    console.log("It's a bike");
    break;
  default:
    console.log("Unknown vehicle type");
}
// Output: Electric car - Tesla


// ---------- 9. switch vs if/else — when to use which ----------

// Use switch when:
//   - comparing ONE variable/expression against many fixed values (exact match)
//   - readability matters, e.g. day names, menu options, status codes
// Use if/else when:
//   - checking ranges, multiple different variables, or complex conditions
//   - (switch(true) can mimic this, but plain if/else is usually clearer)


// ---------- Quick Recap ----------
// 1. switch compares one expression against several case values.
// 2. Comparison is STRICT (===) — type must also match.
// 3. Without `break`, execution "falls through" into the next case.
// 4. `default` runs when nothing matches (optional, can be placed anywhere).
// 5. Multiple case labels can share one code block (grouping).
// 6. switch(true) lets you check ranges/conditions like if/else if.
// 7. Wrap case bodies in { } if you need block-scoped variables per case.
// 8. switch statements can be nested just like if/else.
