let nums = [10, 25, 30, 45];
// indices:    0   1   2   3

// find — scans left to right, returns the first VALUE that passes the test (not its index)
let result = nums.find(temp => temp > 20);
console.log(result); // 25 - first element greater than 20

// findIndex — same left-to-right scan, but returns the INDEX of the first match instead of the value
let index = nums.findIndex(n => n > 20);
console.log(index); // 1 - 25 is at index 1

// findLast — scans right to left, returns the first VALUE it hits that passes (i.e. the last match overall)
nums.findLast(n => n > 20); //  45 - scanning from the end, 45 is the first (and here also the last) match

// findLastIndex — same right-to-left scan, but returns the INDEX of that match
nums.findLastIndex(n => n > 20); // 3 - 45 is at index 3

// Note: all four return undefined/-1 respectively if nothing matches, they never throw.