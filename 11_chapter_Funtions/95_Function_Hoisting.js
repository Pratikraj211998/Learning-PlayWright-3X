// Step 1 - Defination of functions
function getUserStatus(){
    // var status_code = undefined; - not shown to you.
    console.log(status_code);
    var status_code = "Active";
    console.log(status_code);

}

// Step 2 - Calling of the functions
getUserStatus();

// Behind the scenes:
// var status_code;              <-- hoisted with undefined
// console.log(status_code);    <-- undefined
// status_code = "Active";      <-- assignment stays in place
// console.log(status_code);    <-- "Active"

// ---- Phase 1: Memory Creation ----
// 1. The JS engine scans the code and finds the function declaration for getUserStatus.
// 2. It also finds the variable declaration for status_code inside the function, but it does not assign any value yet.
// 3. The variable status_code is hoisted to the top of the function scope and initialized with undefined.  