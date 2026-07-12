let age =67; // its number literal
let name = "John"; // its string literal
let isActive = true; // its boolean literal 
let isNull = null; // its null literal
let isUndefined; // its undefined literal
let isSymbol = Symbol("mySymbol"); // its symbol literal
let isBigInt = 1234567890123456789012345678901234567890n; // its BigInt literal 
let isObject = { key: "value" }; // its object literal  
let isArray = [1, 2, 3]; // its array literal
let isFunction = function() { return "Hello"; }; // its function literal
let isArrowFunction = () => "Hello"; // its arrow function literal
let isClass = class MyClass {}; // its class literal


// typeof operator is used to check the type of a variable or literal in JavaScript. It returns a string indicating the type of the operand.it will tell you what type of data type a variable or literal is. Here are some examples:

console.log(typeof age); // "number"
console.log(typeof name); // "string"
console.log(typeof isActive); // "boolean"
console.log(typeof isNull); // "object" (this is a known quirk in JavaScript)
console.log(typeof isUndefined); // "undefined"
console.log(typeof isSymbol); // "symbol"
console.log(typeof isBigInt); // "bigint"
console.log(typeof isObject); // "object"
console.log(typeof isArray); // "object" (arrays are a type of object in JavaScript)
console.log(typeof isFunction); // "function"
console.log(typeof isArrowFunction); // "function"
console.log(typeof isClass); // "function" (classes are a special type of function in JavaScript)   