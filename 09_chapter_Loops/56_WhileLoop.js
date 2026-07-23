let j=0
while(j<10){
    console.log(j);
    j++
}

//



// notes_________________________________________________
// while loop in java script

// Syntax: while (CONDITION) { ...body }
// CONDITION is checked BEFORE every iteration - if it's false to begin with, the body never runs.
// Use while when you don't know the exact number of iterations in advance (unlike `for`).

// 1. Basic while loop
let i = 0;
while (i < 5) {
  console.log("basic:", i); // 0, 1, 2, 3, 4
  i++;
}

// 2. Condition false from the start - body never executes
let count = 10;
while (count < 5) {
  console.log("never runs:", count);
}
console.log("after loop, count is still:", count); // 10

// 3. while loop driven by a condition other than a counter
let queue = ["task1", "task2", "task3"];
while (queue.length > 0) {
  const task = queue.shift();
  console.log("processing:", task);
}

// 4. Infinite loop - needs a break inside, otherwise it never stops
let n = 0;
while (true) {
  console.log("infinite iteration:", n);
  n++;
  if (n === 3) break;
}

// Note: forgetting to update the variable used in the condition (e.g. forgetting `i++`)
// causes an infinite loop - always make sure something inside the body moves the
// condition toward false.
