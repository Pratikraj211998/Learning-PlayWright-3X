// ==========================================
// Practice Questions — Set 4: Arrays
// Ordered from simple to hard.
// Solve each question below its comment block.
// ==========================================

// ---------- Basic ----------

// Q1. Create an array of 6 numbers. Log the first, the last (using .at(-1)),
//     and the total count using .length.
    let nums6 = [4, 8, 15, 16, 23, 42];
    console.log(nums6[0]);     // 4 — first
    console.log(nums6.at(-1)); // 42 — last
    console.log(nums6.length); // 6 — total count


// Q2. Given `let nums = [10, 20, 30, 40, 50];`, use push/pop/unshift/shift
//     to add 60 to the end, add 0 to the start, then remove both again.
//     Log the array after each step.
    let nums = [10, 20, 30, 40, 50];

    nums.push(60);       // add 60 to the end
    console.log(nums);   // [10, 20, 30, 40, 50, 60]

    nums.unshift(0);      // add 0 to the start
    console.log(nums);    // [0, 10, 20, 30, 40, 50, 60]

    nums.pop();             // remove from the end (60)
    console.log(nums);      // [0, 10, 20, 30, 40, 50]

    nums.shift();             // remove from the start (0)
    console.log(nums);        // [10, 20, 30, 40, 50] — back to original


// Q3. Use `.includes()` and `.indexOf()` to check whether 30 exists in the
//     array and log its position.


// ---------- Intermediate ----------

// Q4. Given `let prices = [100, 250, 75, 400, 30];`, use `.map()` to create
//     a new array with 10% discount applied to each price.
    let prices = [100, 250, 75, 400, 30];
    let discounted = prices.map((price) => price - price * 0.1);
    console.log(discounted); // [90, 225, 67.5, 360, 27]


// Q5. Given the same `prices` array, use `.filter()` to get only the prices
//     above 100.


// Q6. Use `.reduce()` to calculate the total sum of `prices`.


// Q7. Given `let users = [{name:"Tom", age:20}, {name:"Amy", age:17}, {name:"Sam", age:30}];`,
//     use `.find()` to get the first user under 18, and `.some()`/`.every()`
//     to check if any/all users are adults (age >= 18).


// Q8. Use `.sort()` to sort `[40, 5, 100, 25]` correctly in ascending numeric
//     order (remember the default sort gotcha).


// ---------- Hard ----------

// Q9. Given `let nums = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];`, remove all
//     duplicates and return a new array of unique values (no manual loops
//     — use a Set).


// Q10. Given `let nums = [3, 1, 4, 1, 5, 9, 2, 6];`, find the SECOND largest
//      number without using `.sort()`.


// Q11. Given `let matrix = [[1,2,3],[4,5,6],[7,8,9]];` (a 3x3 grid), flatten
//      it into a single array `[1,2,3,4,5,6,7,8,9]` using `.flat()`, then do
//      it again WITHOUT using `.flat()` (using reduce or nested loops).


// Q12. Given `let people = [{name:"Tom", dept:"QA"}, {name:"Amy", dept:"Dev"}, {name:"Sam", dept:"QA"}];`,
//      group them by `dept` into an object like:
//      { QA: [{...},{...}], Dev: [{...}] }  — use `.reduce()`.


// Q13. Given `let scores = [55, 82, 91, 40, 67, 78];`, write a function that
//      returns an object with the count of "pass" (>=60) and "fail" (<60)
//      scores, using only array methods (no manual for loop counters).


// ---------- Interview Process (theory + predict-the-output) ----------
// Answer these in a comment under each one.

// Q14. What's the difference between `.map()` and `.forEach()`? Why can't
//      you chain another array method after `.forEach()`?


// Q15. What's the difference between `.find()` and `.filter()`?


// Q16. Predict the output, then explain why:
//      console.log([1, 2, 3].reduce((acc, n) => acc + n, 0));
//      console.log([].reduce((acc, n) => acc + n, 0));
//      console.log([].reduce((acc, n) => acc + n));


// Q17. Name 3 array methods that MUTATE the original array, and 3 that do
//      NOT. How would you check which category a method falls into if
//      you're unsure?


// Q18. Predict the output, then explain why:
//      console.log(typeof [1, 2, 3]);
//      console.log(Array.isArray([1, 2, 3]));
