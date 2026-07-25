let tests = ["login", "checkout", "search"];

// classic for loop — you control the index, so you get both position and value
for (let i = 0; i < tests.length; i++) {
    console.log(i, tests[i]); // tests[i] = plain property lookup by index, e.g. tests["0"]
    // 0 'login'
    // 1 'checkout'
    // 2 'search'
}

console.log("----");

// for...of (cleanest for values)
for (let test of tests) {
    console.log(test) // value = pulled from tests[Symbol.iterator]().next().value, no index exposed
    // "login"
    // "checkout"
    // "search"
}
console.log("----");

// forEach (no return value) — same output as for...of, but as a callback;
// can't `break`/`continue` out of it (return inside the callback only skips that one iteration)
tests.forEach((test, index) => {

    console.log(`${index}: ${test}`); // internally just a for loop 0..length calling your callback(value, index, array)
    // 0: login
    // 1: checkout
    // 2: search
});

// entries() — index + value, returned together as an [index, value] pair per iteration

for (let [i, test] of tests.entries()) {
    console.log(i, test); // [i, test] destructures the [index, value] pair yielded by the entries() iterator
    // 0 'login'
    // 1 'checkout'
    // 2 'search'
}

console.log("----");


let students = ["methis", "senthil", "ajay", "rahul"];

// for...in — iterates over the KEYS (here, the numeric indices as STRINGS), not the values
for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
    // '0' -> methis
    // '1' -> senthil
    // '2' -> ajay
    // '3' -> rahul
}
// Note: `student` above is the string "0", "1", "2", "3" (typeof student === "string"),
// so students[student] does a string-to-index lookup under the hood. for...in also picks up
// any extra enumerable properties added to the array, which is why for...of/forEach are
// generally preferred for plain array iteration.