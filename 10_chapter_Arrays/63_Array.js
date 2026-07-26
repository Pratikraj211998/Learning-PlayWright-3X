let fruit = [];
let browsers = ["chrome", "firefox", "webkit"];
console.log(browsers[0]);
console.log(browsers.at(-1));
console.log(browsers.length);
console.log(fruit.length);

// For the Negative indexedDB, use the at
console.log(browsers[-1]); // undefined
console.log(browsers.at(0));


// practics

let name=[];
let pratiksha=["cute","smart","intiligent","careing"]
console.log(pratiksha);
console.log(pratiksha[1]);
console.log(pratiksha.at(-1));










// notes_________________________________________________
// Arrays in java script

// An array is an ordered, index-based collection of values (can mix types).
// Arrays are a special kind of object - indices are just numeric-looking string keys under the hood.

// 1. Creating arrays
let empty = [];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "two", true, null, { key: "value" }]; // arrays can hold mixed types
let fromConstructor = new Array(3); // creates an array with length 3, all slots empty
console.log(fromConstructor.length); // 3
//1.practics
console.log("practics 1");
 let empty2=[];
 let num=[1,2,3,4,5,6];
 let mix=["pratik","pratiksha",4 ,6 ,0.6 ,true,null];
 let newarray =new Array();
 console.log(newarray.length);

// 2. Accessing elements - index-based, zero-indexed
console.log(numbers[0]); // 1 (first element)
console.log(numbers[numbers.length - 1]); // 5 (last element, old-school way)
console.log(numbers.at(-1)); // 5 (last element, modern way - supports negative indices)
console.log(numbers[10]); // undefined - out-of-range index doesn't throw

// 2.practics
console.log("practics 2");
console.log(num[0]);
console.log(num.at(-1));
console.log(num[10]);


// 3. Length
console.log(numbers.length); // 5
numbers.length = 3; // truncates the array
console.log(numbers); // [1, 2, 3]
numbers.length = 5; // extends it - new slots are "empty" (not undefined, but behave like it)
console.log(numbers); // [1, 2, 3, empty x2]
// 3.practics
console.log("practics 3 lenght");
console.log(num.length);

// 4. Adding / removing elements
let stack = [1, 2, 3];
stack.push(4); // adds to the end -> [1, 2, 3, 4]
stack.pop(); // removes from the end -> [1, 2, 3]
stack.unshift(0); // adds to the start -> [0, 1, 2, 3]
stack.shift(); // removes from the start -> [1, 2, 3]
console.log(stack); // [1, 2, 3]

// 4.practics
    console.log("practics 4adding and removing");
    let random=[1,3,5,7,4,8];
    random.push(11);
    random.pop();
    random.unshift(66);
    random.shift();
    console.log(random);
    
// 5. Checking if something is an array
console.log(Array.isArray(stack)); // true
console.log(typeof stack); // "object" - typeof can't distinguish arrays from plain objects

// 6. Iterating over an array
for (let i = 0; i < stack.length; i++) {
  console.log("for:", stack[i]);
}
for (const value of stack) {
  console.log("for-of:", value);
}
stack.forEach((value, index) => console.log("forEach:", index, value));

// 7. Common array methods
console.log(stack.includes(2)); // true - checks if a value exists
console.log(stack.indexOf(2)); // 1 - index of first match, -1 if not found
console.log(stack.slice(1)); // [2, 3] - returns a shallow copy, doesn't mutate original
console.log(stack.join("-")); // "1-2-3" - joins into a string
console.log([...stack, 4, 5]); // [1, 2, 3, 4, 5] - spread to create a new array

// Note: `slice` does NOT mutate the original array; `splice` DOES mutate it
// (splice(start, deleteCount, ...items) can remove and/or insert elements in place).
let letters = ["a", "b", "c", "d"];
letters.splice(1, 2); // removes 2 elements starting at index 1
console.log(letters); // ["a", "d"]

// 8. splice() in detail - splice(start, deleteCount, ...itemsToInsert)
// returns an array of the REMOVED elements; mutates the original in place.

// remove only
let removeDemo = ["a", "b", "c", "d"];
removeDemo.splice(1, 2); // removes "b","c"
console.log(removeDemo); // ["a", "d"]

// insert only (deleteCount = 0)
let insertDemo = ["a", "d"];
insertDemo.splice(1, 0, "b", "c");
console.log(insertDemo); // ["a", "b", "c", "d"]

// replace (remove + insert in one call)
let replaceDemo = ["a", "b", "c"];
replaceDemo.splice(1, 1, "X", "Y");
console.log(replaceDemo); // ["a", "X", "Y", "c"]

// capture the removed elements via the return value
let nums = [1, 2, 3, 4, 5];
const removed = nums.splice(1, 2);
console.log(nums);    // [1, 4, 5]
console.log(removed); // [2, 3]

// 9. Transformation methods (non-mutating - return a NEW array)
const src = [1, 2, 3, 4, 5];
console.log(src.map(n => n * 2));        // [2, 4, 6, 8, 10] - transform each element
console.log(src.filter(n => n % 2 === 0)); // [2, 4] - keep elements that pass a test
console.log(src.concat([6, 7]));          // [1,2,3,4,5,6,7] - merge arrays, returns new array
console.log(src.reverse());               // [5,4,3,2,1] - WARNING: reverse() mutates in place
console.log(src);                         // [5,4,3,2,1] - src itself changed above

// 10. reduce() - fold an array down to a single value
const total = [1, 2, 3, 4].reduce((acc, curr) => acc + curr, 0);
console.log(total); // 10 (0 is the initial value of acc)
const grouped = ["a", "b", "a", "c", "b"].reduce((acc, val) => {
  acc[val] = (acc[val] || 0) + 1;
  return acc;
}, {});
console.log(grouped); // { a: 2, b: 2, c: 1 }
// Note: without an initial value, reduce() uses index 0 as acc and starts at index 1 -
// this throws a TypeError on an empty array, so always pass an initial value.

// 11. Searching / testing methods
const people = [{ name: "Tom", age: 20 }, { name: "Amy", age: 30 }];
console.log(people.find(p => p.age > 25));       // { name: "Amy", age: 30 } - first match
console.log(people.findIndex(p => p.age > 25));   // 1 - index of first match
console.log(people.findLast(p => p.age > 0));      // { name: "Amy", age: 30 } - last match
console.log(people.findLastIndex(p => p.age > 0)); // 1 - index of last match
console.log(people.some(p => p.age > 25));          // true - at least one passes
console.log(people.every(p => p.age > 25));          // false - not all pass
console.log([1, [2, 3], [4, [5, 6]]].flat());          // [1,2,3,4,[5,6]] - flattens 1 level deep
console.log([1, [2, [3, [4]]]].flat(Infinity));          // [1,2,3,4] - flattens all levels
console.log([1, 2, 3].flatMap(n => [n, n * 10]));         // [1,10,2,20,3,30] - map then flat(1)

// 12. Sorting - sort() mutates in place and compares as STRINGS by default
let sortNums = [10, 1, 21, 2];
console.log(sortNums.sort()); // [1, 10, 2, 21] - WRONG for numbers! sorted lexicographically
console.log(sortNums.sort((a, b) => a - b)); // [1, 2, 10, 21] - correct numeric ascending sort
console.log(sortNums.sort((a, b) => b - a)); // [21, 10, 2, 1] - numeric descending sort

// 13. fill() and copyWithin() - mutate in place
console.log(new Array(5).fill(0));        // [0, 0, 0, 0, 0] - fill all slots with a value
console.log([1, 2, 3, 4, 5].fill(9, 1, 3)); // [1, 9, 9, 4, 5] - fill(value, start, end)
console.log([1, 2, 3, 4, 5].copyWithin(0, 3)); // [4, 5, 3, 4, 5] - copies a slice over another position

// 14. Immutable (non-mutating) counterparts (ES2023+) - return a new array, leave original untouched
let original = [3, 1, 2];
console.log(original.toSorted());   // [1, 2, 3] - like sort(), but doesn't mutate
console.log(original.toReversed()); // [2, 1, 3] - like reverse(), but doesn't mutate
console.log(original);              // [3, 1, 2] - untouched

// 15. Array.from / Array.of - creating arrays from other things
console.log(Array.from("abc"));            // ["a", "b", "c"] - from an iterable (string)
console.log(Array.from({ length: 3 }, (_, i) => i * 2)); // [0, 2, 4] - from array-like + mapper
console.log(Array.of(7));                   // [7] - unlike `new Array(7)`, which makes length 7
console.log(new Array(7).length);            // 7 (empty slots, NOT [7])

// 16. Destructuring arrays
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first, second, rest); // 1 2 [3, 4, 5]
const [, , third] = [1, 2, 3]; // skip elements with empty commas
console.log(third); // 3
let p = 1, q = 2;
[p, q] = [q, p]; // classic swap trick using destructuring
console.log(p, q); // 2 1

// 17. Array of arrays (multi-dimensional / matrix)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix[1][2]); // 6 (row 1, col 2)
for (const row of matrix) {
  console.log(row.join(" "));
}

// 18. Array <-> Set (removing duplicates)
const withDupes = [1, 2, 2, 3, 3, 3];
const unique = [...new Set(withDupes)];
console.log(unique); // [1, 2, 3]

// 19. Comparing arrays - no built-in deep equality
console.log([1, 2] === [1, 2]); // false - arrays compare by reference, not contents
console.log(JSON.stringify([1, 2]) === JSON.stringify([1, 2])); // true - common workaround

// 20. Sparse arrays (holes) vs dense arrays with undefined
const sparse = [1, , 3]; // hole at index 1
console.log(sparse.length); // 3
console.log(sparse[1]); // undefined
// forEach/map SKIP holes entirely, but a for loop or for...of still visits the index:
sparse.forEach(v => console.log("forEach sees:", v)); // logs only for index 0 and 2
for (const v of sparse) console.log("for-of sees:", v); // logs undefined for the hole too

// Note: `typeof` can't tell arrays apart from objects - always use Array.isArray().
// Most transformation methods (map/filter/slice/concat/flat) return NEW arrays;
// push/pop/shift/unshift/splice/sort/reverse/fill/copyWithin all MUTATE in place - know which is which.
