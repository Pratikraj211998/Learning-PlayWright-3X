let arr = [1, 2, 3];
console.log(arr); // [ 1, 2, 3 ]

// Add to END
arr.push(4); // adds 4 after the last element
console.log(arr); // [ 1, 2, 3, 4 ]

// Remove from END
arr.pop(); // removes the last element (4)
console.log(arr); // [ 1, 2, 3 ]

arr.push(5, 6); // push can take multiple args, all appended in order
console.log(arr); // [ 1, 2, 3, 5, 6 ]

// Add to BEGINNING
arr.unshift(0); // adds 0 before the first element, shifts everything else right by 1
console.log(arr); // [ 0, 1, 2, 3, 5, 6 ]

// Remove from BEGINNING
arr.shift(); // removes the first element (0), shifts everything else left by 1
console.log(arr); // [ 1, 2, 3, 5, 6 ]

// [ 1, 2, 3, 5, 6 ]

// splice(start, deleteCount) - removes elements in place, returns the removed ones
arr.splice(2, 1); // starting at index 2, delete 1 element -> removes the "3"
console.log(arr); // [ 1, 2, 5, 6 ]

// splice(start, deleteCount, ...items) - deleteCount 0 means pure insertion, nothing removed
arr.splice(2, 0, 99); // at index 2, delete 0, insert 99 -> [1, 2, 99, 5, 6]
console.log(arr); // [ 1, 2, 99, 5, 6 ]

// splice(start, deleteCount, ...items) - replace: delete 2 elements, insert 2 new ones at the same spot
arr.splice(1, 2, 10, 20); // at index 1, delete 2 (2 and 99), insert 10, 20
console.log(arr); // [ 1, 10, 20, 5, 6 ]