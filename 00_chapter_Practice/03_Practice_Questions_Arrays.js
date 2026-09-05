// ==========================================
// Practice Questions — Set 3: Arrays
// Ordered from simple to hard.
// Solve each question below its comment block.
// ==========================================

// Q1. Create an array of 5 fruits. Log the first, the last, and the total count
//     using `.length`.
  let fruits =["apple" ,"pine appple" ,"mango","strawberry","jack fruit"];
    console.log(fruits[0]);
    console.log(fruits[4]);
  console.log(fruits.length);


// Q2. Add a new fruit to the end and one to the beginning of the array
//     (using `push`/`unshift`). Then remove the last and first elements
//     (using `pop`/`shift`). Log the array after each step.
    fruits.push("banana");
    console.log(fruits);

    fruits.unshift("grape");
    console.log(fruits);

    fruits.pop();
    console.log(fruits);

    fruits.shift();
    console.log(fruits);


// Q3. Use `.indexOf()` and `.includes()` to search for a fruit in the array
//     and log whether it exists and at what position.
    let position = fruits.indexOf("mango");
    console.log(fruits.includes("mango")); // true — exists
    console.log(position);                 // its index in the array

    console.log(fruits.includes("pineapple"));  // false — not in the array
    console.log(fruits.indexOf("pineapple"));   // -1 — indexOf returns -1 when not found


// Q4. Iterate over the array using a `for` loop, then again using `for...of`,
//     and again using `.forEach()`. Log each element with all three methods.
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }

    for (let fruit of fruits) {
        console.log(fruit);
    }

    fruits.forEach(function (fruit) {
        console.log(fruit);
    });


// Q5. Given `let nums = [5, 12, 8, 3, 20, 1];`, write a loop that finds and
//     logs the largest number without using `Math.max()`.
    let nums = [5, 12, 8, 3, 20, 1];
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            largest = nums[i];
        }
    }
    console.log(largest);


// ---------- Interview Process (theory + predict-the-output) ----------
// Answer these in a comment under each one.

// Q6. What's the difference between `.slice()` and `.splice()`? Which one
//     mutates the original array?


// Q7. Predict the output, then explain why:
//     console.log([10, 1, 21, 2].sort());


// Q8. Why does `[1, 2] === [1, 2]` evaluate to `false`?


// Q9. Predict the output, then explain why:
//     console.log([1, 2, 3].reduce((acc, n) => acc + n));
//     console.log([].reduce((acc, n) => acc + n));


// Q10. Why is `for...in` generally discouraged for iterating over arrays,
//      even though it technically works?
