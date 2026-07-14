// Data tyepe in js

// types of data types in JavaScript   
//primitives: number, string, boolean, null, undefined, symbol, bigint
// non-primitives: object (including arrays, functions, and other objects)


//source code:
// 1. Number
let num = 42;   
// 2. String
let str = "Hello, World!";  
// 3. Boolean
let isTrue = true;
// 4. Null
let emptyValue = null;  
// 5. Undefined
let notDefined;     
// 6. Symbol
let sym = Symbol("mySymbol");  
// 7. BigInt
let bigIntNum = 1234567890123456789012345678901234567890n;  
// 8. Object
let obj = { key: "value" };     
// 9. Array
let arr = [1, 2, 3];  
// 10. Function
let func = function() { return "Hello"; };  
// 11. Arrow Function
let arrowFunc = () => "Hello";  
// 12. Class
class MyClass {}            


// rules of data types in JavaScript        
// 1. JavaScript is a dynamically typed language, which means that you don't need to specify the data type of a variable when you declare it. The data type is determined at runtime based on the value assigned to the variable.
// 2. JavaScript has a single number type, which is a floating-point number. It can represent both integers and decimals. However, there is also a separate BigInt type for representing large integers that exceed the range of the Number type.
// 3. JavaScript has a single string type, which is used to represent text. Strings are enclosed in either single quotes (' '), double quotes (" "), or backticks (` `) for template literals.
// 4. JavaScript has a boolean type, which can have one of two values: true or false.
// 5. JavaScript has a null type, which represents the intentional absence of any object value.
// 6. JavaScript has an undefined type, which represents a variable that has been declared but has not yet been assigned a value.
// 7. JavaScript has a symbol type, which is used to create unique identifiers for object properties.
// 8. JavaScript has an object type, which is used to store collections of data and more complex entities. Objects can contain properties and methods.
// 9. JavaScript has an array type, which is a special kind of object used to store ordered collections of values.
// 10. JavaScript has a function type, which is a special kind of object that can be called to perform a specific task.
// 11. JavaScript has a class type, which is a blueprint for creating objects with shared properties and methods.   

// Note: In JavaScript, all data types are objects except for the primitive types (number, string, boolean, null, undefined, symbol, and bigint). This means that you can use methods and properties on objects, but not on primitive types. However, JavaScript automatically wraps primitive types in their corresponding object wrappers when you try to access methods or properties on them. For example, when you call a method on a string primitive, JavaScript automatically creates a String object to handle the method call.

// Note: JavaScript is a loosely typed language, which means that you can change the data type of a variable by assigning a value of a different type to it. For example, you can assign a number to a variable and then later assign a string to the same variable. This flexibility can lead to unexpected behavior if not managed carefully.


// some programs to check the data types in JavaScript
// 1. Using typeof operator
console.log(typeof num); // "number"
console.log(typeof str); // "string"
console.log(typeof isTrue); // "boolean"
console.log(typeof emptyValue); // "object" (this is a known quirk in JavaScript)
console.log(typeof notDefined); // "undefined"
console.log(typeof sym); // "symbol"
console.log(typeof bigIntNum); // "bigint"
console.log(typeof obj); // "object"
console.log(typeof arr); // "object" (arrays are a type of object in JavaScript)
console.log(typeof func); // "function"
console.log(typeof arrowFunc); // "function"
console.log(typeof MyClass); // "function" (classes are a special type of function in JavaScript)
