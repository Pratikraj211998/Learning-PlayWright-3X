

// Pre Increment
// let a = 10;
// let b = ++a;
// console.log(b);


// Post Increment
let a = 10;
let b = a++;
console.log(b);



// AI notes_________________________________________________
// increiment and decrement operator in java script

// Increment (++) and Decrement (--) operators are used to increase or decrease the value of a variable by 1.
// Both operators come in two forms: prefix (++x, --x) and postfix (x++, x--).

// 1. Postfix increment/decrement (x++, x--)
// Returns the CURRENT value first, then increments/decrements the variable.
let a = 5;
console.log(a++); // 5 (returns current value, then a becomes 6)
console.log(a);   // 6

let b = 5;
console.log(b--); // 5 (returns current value, then b becomes 4)
console.log(b);   // 4

// 2. Prefix increment/decrement (++x, --x)
// Increments/decrements the variable FIRST, then returns the updated value.
let c = 5;
console.log(++c); // 6 (c becomes 6, then returns 6)
console.log(c);   // 6

let d = 5;
console.log(--d); // 4 (d becomes 4, then returns 4)
console.log(d);   // 4

// Note: When used as a standalone statement (not part of an expression), prefix and postfix
// have the same effect on the variable - the difference only matters when the returned value is used.
let e = 5;
e++;
console.log(e); // 6

let f = 5;
++f;
console.log(f); // 6

// Gotcha: mixing pre/post increment in the same expression can be confusing
let g = 5;
console.log(g++ + ++g); // 5 + 7 = 12 (g: 5 -> used as 5, then becomes 6, then ++g makes it 7, used as 7)
console.log(g); // 7

// Increment/decrement also works on object properties and array elements
let counter = { count: 0 };
counter.count++;
console.log(counter.count); // 1

let arr = [10, 20, 30];
arr[0]++;
console.log(arr[0]); // 11

// Note: Increment/decrement operators only work on numbers (or values coercible to numbers).
// Applying them to non-numeric strings results in NaN.
let str = "abc";
console.log(str++); // NaN
