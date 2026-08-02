// Shallow Copy
// Original array will not change if you change the copy.

let original = [1, 2, 3];
let copy1 = [...original]; // spread — creates a brand new array with the same elements
console.log(original);
console.log(copy1);

// .slice() with no args returns a new array containing all elements — another shallow copy
let copy2 = original.slice();
console.log(copy2);

// Array.from() builds a new array from an iterable — also a shallow copy
let copy3 = Array.from(original);
 console.log(copy3);

// .concat() with no args just returns a new array with original's elements copied in
 let copy4 = original.concat();
console.log(copy4);

console.log(" ---- ");
// Proof these are real copies: mutating copy1 does NOT touch original,
// because copy1 is a separate array in memory, just with matching values.
copy1.push(99);
console.log(original); // [1, 2, 3]        — unchanged
console.log(copy1);    // [1, 2, 3, 99]    — only the copy grew

// Deep cOPY
// ⚠️ Mislabeled: this is NOT a copy at all — it's a reference assignment.
// Arrays are objects, so `=` just copies the reference (the memory address),
// not the data. Both variables now point to the exact same array.
let deep_copy_array = original;
// Deep copy

// So mutating "deep_copy_array" also mutates "original" — they're the same array.
deep_copy_array.push(91);
console.log(original);         // [1, 2, 3, 99, 91] — changed too!
console.log(deep_copy_array);  // [1, 2, 3, 99, 91] — same array, same reference
// A real deep copy (for nested arrays/objects) needs structuredClone(original)
// or JSON.parse(JSON.stringify(original)) — spread/slice/concat/Array.from
// are only "shallow": nested objects inside would still be shared references.
