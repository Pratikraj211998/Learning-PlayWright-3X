// Bitwise Operator

// Bitwise operators work on the individual bits of a number. JavaScript first converts the number
// to a 32-bit signed integer, performs the operation bit by bit, then converts the result back to a Number.

// The main bitwise operators in JavaScript are:
// 1. AND (&)  : Returns 1 for each bit position where BOTH bits are 1.
// 2. OR  (|)  : Returns 1 for each bit position where AT LEAST ONE bit is 1.
// 3. XOR (^)  : Returns 1 for each bit position where the bits are DIFFERENT.
// 4. NOT (~)  : Inverts every bit (flips 0 to 1 and 1 to 0).
// 5. Left shift (<<)          : Shifts bits left, filling with 0s on the right.
// 6. Right shift (>>)         : Shifts bits right, keeping the sign bit (sign-propagating).
// 7. Unsigned right shift (>>>): Shifts bits right, filling with 0s on the left (ignores sign).

// truth table for bitwise operators (per bit)
// A   B   A & B   A | B   A ^ B
// 1   1     1       1       0
// 1   0     0       1       1
// 0   1     0       1       1
// 0   0     0       0       0

// Example 1: AND (&), OR (|), XOR (^)
let a = 5;  // binary: 0101
let b = 3;  // binary: 0011

console.log(a & b); // 1  -> 0101 & 0011 = 0001
console.log(a | b); // 7  -> 0101 | 0011 = 0111
console.log(a ^ b); // 6  -> 0101 ^ 0011 = 0110
console.log(typeof (a & b)); // number

// Example 2: NOT (~) — inverts all bits, equivalent to -(x + 1)
console.log(~5); // -6  -> ~0101 = ...11111010 (two's complement) = -6
console.log(~0); // -1
console.log(typeof ~5); // number

// Example 3: left shift (<<) and right shift (>>)
let num = 4; // binary: 0100

console.log(num << 1); // 8  -> 0100 shifted left by 1  = 1000 (multiplies by 2)
console.log(num << 2); // 16 -> 0100 shifted left by 2  = 10000 (multiplies by 4)
console.log(num >> 1); // 2  -> 0100 shifted right by 1 = 0010 (divides by 2)

// Example 4: unsigned right shift (>>>) — useful with negative numbers
console.log(-8 >> 1);  // -4 -> keeps the sign bit (sign-propagating shift)
console.log(-8 >>> 1); // 2147483644 -> ignores sign, treats as unsigned 32-bit

// Note: a common real-world use of bitwise operators is flag/permission checking,
// where each bit in a number represents a separate on/off setting.
const READ = 1;    // binary: 001
const WRITE = 2;   // binary: 010
const EXECUTE = 4; // binary: 100

let userPermission = READ | WRITE; // combine flags -> binary: 011 (3)

console.log(userPermission); // 3
console.log((userPermission & WRITE) !== 0); // true  -> has WRITE permission
console.log((userPermission & EXECUTE) !== 0); // false -> does not have EXECUTE permission
