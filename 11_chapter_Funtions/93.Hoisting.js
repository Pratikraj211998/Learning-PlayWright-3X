// var a;
console.log(a);
var a = "Pramod";
console.log(a);

// ---- Phase 1: Memory Creation ----
// var a  = undefined;
// var b  = undefined;
console.log(a); // undefind
var a = "Pramod";
console.log(a); // changed

// Hoisting does NOT physically move your code. 
// It is a mental model to understand how the
//  JS engine handles declarations during compilation.

// ---- Phase 2: Code Execution ----    
// explamation of the above code
// 1. During the memory creation phase, the variable a is declared and initialized with undefined.
// 2. When we log a before its assignment, it outputs undefined.
// 3. After assigning "Pramod" to a, logging a outputs "Pramod" as expected.