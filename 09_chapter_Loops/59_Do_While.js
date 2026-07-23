let retry = 0;
do {
    console.log("Execute a Code!");
    console.log("RETRYing.......", retry);
    retry++;
} while (retry < 3);



// notes_________________________________________________
// do...while loop in java script

// Syntax: do { ...body } while (CONDITION);
// The body runs FIRST, then CONDITION is checked - so it always executes at least once,
// even if the condition is false from the start. This is the main difference from `while`.

// 1. Basic do...while
let i = 0;
do {
  console.log("basic:", i); // 0, 1, 2
  i++;
} while (i < 3);

// 2. Condition false from the start - body still runs once
let count = 10;
do {
  console.log("runs once regardless:", count); // 10
} while (count < 5);

// 3. Common real use case - run at least once (e.g. menu prompts, retry logic)
let attempts = 0;
const maxAttempts = 3;
let success = false;
do {
  attempts++;
  console.log("attempt:", attempts);
  success = attempts === maxAttempts; // pretend success happens on the last attempt
} while (!success && attempts < maxAttempts);

// Note: don't forget the semicolon after `while (CONDITION);` - unlike `for`/`while`,
// `do...while` is one of the few statements that requires a trailing semicolon.
