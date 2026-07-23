// For Loop
// Help you to repeat a block of code.

// ICU
// INIT - let i=0
// CONDITION -  i< 10


for(let i =0; i <10; i++){
    console.log(i);
}



// AI notes_________________________________________________
// for loop in java script

// Syntax: for (INIT; CONDITION; UPDATE) { ...body }
// 1. INIT runs once, before the loop starts.
// 2. CONDITION is checked before every iteration - loop stops when it's false.
// 3. body runs.
// 4. UPDATE runs after the body, then CONDITION is checked again.

// 1. Basic for loop
for (let i = 1; i <= 5; i++) {
  console.log("basic:", i); // 1, 2, 3, 4, 5
}

// 2. Counting down (UPDATE can decrement too)
for (let i = 5; i >= 1; i--) {
  console.log("countdown:", i); // 5, 4, 3, 2, 1
}

// 3. Custom step (not always +1)
for (let i = 0; i <= 10; i += 2) {
  console.log("even:", i); // 0, 2, 4, 6, 8, 10
}

// 4. Looping over an array by index
const fruits = ["apple", "banana", "cherry"];
for (let i = 0; i < fruits.length; i++) {
  console.log("fruit:", fruits[i]);
}

// 5. Any part of INIT/CONDITION/UPDATE can be omitted - but the semicolons stay
let j = 0;
for (; j < 3; j++) {
  console.log("no init:", j); // 0, 1, 2
}

// 6. Infinite loop (all parts omitted) - needs a break inside, otherwise it never stops
for (;;) {
  console.log("runs once, then breaks");
  break;
}

// 7. Nested for loops (e.g. a simple multiplication grid)
for (let row = 1; row <= 2; row++) {
  for (let col = 1; col <= 2; col++) {
    console.log(`row ${row} x col ${col} = ${row * col}`);
  }
}

// Note: use `let` (not `var`) for the loop counter so each iteration gets its own
// binding - important when the loop body creates closures (e.g. setTimeout callbacks).

