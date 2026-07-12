// JavaScript identifiers rules and naming conventions


let validName1 = "Valid Identifier"; // Valid identifier
let validName2 = 42; // Valid identifier
let validName3 = true; // Valid identifier

// Invalid identifiers (uncommenting these lines will cause errors)
// let 1invalidName = "Invalid Identifier"; // Invalid identifier (starts with a number)
// let invalid-name = "Invalid Identifier"; // Invalid identifier (contains a hyphen)
// let invalid name = "Invalid Identifier"; // Invalid identifier (contains a space)
// let var = "Invalid Identifier"; // Invalid identifier (reserved keyword)

// Naming conventions
// 1. camelCase (standard for variable names)
let myVariable = "Camel Case Variable";

// 2. PascalCase (standard for class names)
let MyClass = "Pascal Case Class";


// 3. snake_case (underscore separated)
let my_variable = "Snake Case Variable";


// 4. SCREAMING_SNAKE_CASE (uppercase underscore separated, often used for constants)
const MAX_LIMIT = 100;

// 5. Hungarian Notation (prefixing variable names with a type indicator)
let strName = "Hungarian Notation String"; // string
let intAge = 30; // integer
let boolIsActive = true; // boolean

// Note: While Hungarian Notation is less common in modern JavaScript, it can still be found in some codebases.     

//let class= 5; class is a reserved keyword in JavaScript, so it cannot be used as an identifier.
// let const= 10; const is a reserved keyword in JavaScript, so it cannot be used as an identifier. 
// let function= 15; function is a reserved keyword in JavaScript, so it cannot be used as an identifier.   
let FUNCTION= 20;

let MyVar=24;
let myvar=25; // JavaScript is case-sensitive, so MyVar and myvar are considered different identifiers.

// unicode letters can be used in identifiers, but it's generally recommended to stick to ASCII characters for better readability and compatibility.
let café = "Unicode Identifier"; // Valid identifier with a Unicode character
let caféPrice = 5.99; // Valid identifier with a Unicode character
// let 变量 = "Variable in Chinese"; // Valid identifier with a Unicode character (Chinese)
//let 价格 = 10.99; // Valid identifier with a Unicode character (Chinese)
let unicodeIdentifier = "Unicode Identifier"; // Valid identifier
let chineseIdentifier = "变量"; // Valid identifier with a Unicode character (Chinese)
//let pratik-raj =87; // Invalid identifier (contains a hyphen)
// let pratk raj=76; // Invalid identifier (contains a space)
// let 123pratik=45; // Invalid identifier (starts with a number)
// let pratik@raj=90; // Invalid identifier (contains a special character '@')
// let pratik#raj=100; // Invalid identifier (contains a special character '#') 
// let pratik$raj=110; // Invalid identifier (contains a special character '$') 

