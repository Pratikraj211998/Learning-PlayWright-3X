//Searching

let results = ["pass", "fail", "pass", "error", "fail"];
// indices:      0       1       2        3       4

// indexOf — returns first index, or -1 if not found

results.indexOf("fail"); //1 - first "fail" is at index 1 (index 4 is ignored, only the first match counts)
results.indexOf("skip");  // -1 - "skip" isn't in the array at all

// lastIndexOf — searches from the end
results.lastIndexOf("fail"); // 4 - scans backward, finds "fail" at index 4 first (its last occurrence)

// includes — returns boolean
results.includes("error"); // true - just checks presence, doesn't tell you WHERE (use indexOf/findIndex for that)


//practics
console.log("practics");


let res =["pass","fail","pass","error","fail"];
console.log(res.indexOf("fail"));

console.log(res.lastIndexOf("fail"));

console.log(res.includes("error"));
