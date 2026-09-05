// ==========================================
// Practice Questions — Set 3: Loops
// Ordered from simple to hard.
// Solve each question below its comment block.
// ==========================================

// Q1. Write a `for` loop that prints only the even numbers from 1 to 20.
    for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }


// Q2. Write a `while` loop that sums numbers from 1 to 100 and logs the total.
    let i = 1;
    let sum = 0;
    while (i <= 100) {
        sum += i;
        i++;
    }
    console.log(sum);


// Q3. Write a `do...while` loop that runs at least once even when the starting
//     condition is already false. Explain why do-while guarantees this.
    let count = 10;
    do {
        console.log(count); // logs 10, even though 10 < 5 is already false
        count++;
    } while (count < 5);
    
    

// Q4. Use `break` inside a `for` loop to stop as soon as you find the first
//     number divisible by 7 in a range of 1-50.
    for (let i = 1; i <= 50; i++) {
        if (i % 7 === 0) {
            console.log(i);
            break;
        }
    }


// Q5. Use `continue` inside a `for` loop to skip and NOT print multiples of 3
//     while looping from 1 to 20.
    for (let i = 1; i <= 20; i++) {
        if (i % 3 === 0) {
            continue;
        }
        console.log(i);
    }


// Q6. Write a nested loop to print this pattern using `*`:
//     *
//     **
//     ***
//     ****
//     *****
    for (let row = 1; row <= 5; row++) {
        let line = "";
        for (let col = 1; col <= row; col++) {
            line += "*";
        }
        console.log(line);
    }


// Q7. Write a nested `for` loop that prints a 5x5 multiplication table.
    for (let row = 1; row <= 5; row++) {
        let line = "";
        for (let col = 1; col <= 5; col++) {
            line += (row * col) + "\t";
        }
        console.log(line);
    }


// ---------- Interview Process (theory + predict-the-output) ----------
// Answer these in a comment under each one.

// Q6. What's the difference between `for`, `while`, and `do...while`?
//     Which one guarantees the body runs at least once, and why?


// Q7. Predict the output, then explain why:
//     for (var i = 0; i < 3; i++) { setTimeout(() => console.log(i), 0); }
//     for (let j = 0; j < 3; j++) { setTimeout(() => console.log(j), 0); }


// Q8. What causes a loop to run forever by accident? Give one concrete
//     example using `while`.


// Q9. Why should you use `let` instead of `var` as a loop counter when the
//     loop body creates a closure (like a callback)?

