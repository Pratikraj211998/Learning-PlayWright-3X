//  Assignment Operators in JavaScript

// Assignment operators are used to assign values to variables. The most common assignment operator is the equal sign (=), which assigns the value on the right to the variable on the left. There are also compound assignment operators that combine an arithmetic operation with assignment.

let x = 10; // Assigning the value 10 to variable x
console.log(x); // Output: 10       

// Compound assignment operators

x += 5; // Equivalent to x = x + 5
console.log(x); // Output: 15

x -= 3; // Equivalent to x = x - 3
console.log(x); // Output: 12

x *= 2; // Equivalent to x = x * 2
console.log(x); // Output: 24

x /= 4; // Equivalent to x = x / 4
console.log(x); // Output: 6

x %= 4; // Equivalent to x = x % 4
console.log(x); // Output: 2

// Note: Assignment operators can be used with different data types, including numbers, strings, and objects. They can also be used in combination with other operators to perform more complex operations. 

// Example of using assignment operators with strings
let str = "Hello";
str += " World"; // Equivalent to str = str + " World"
console.log(str); // Output: "Hello World"

// Example of using assignment operators with objects
let obj = { a: 1, b: 2 };
obj.a += 3; // Equivalent to obj.a = obj.a + 3
console.log(obj); // Output: { a: 4, b: 2 }     

// Example of using assignment operators with arrays
let arr = [1, 2, 3];
arr[0] += 5; // Equivalent to arr[0] = arr[0] + 5
console.log(arr); // Output: [6, 2, 3]                      

// Note: Assignment operators can also be used with other data types, such as booleans and symbols, but their behavior may vary depending on the specific data type and operation being performed.  

// Example of using assignment operators with booleans
let isTrue = true;
isTrue &&= false; // Equivalent to isTrue = isTrue && false
console.log(isTrue); // Output: false

// Example of using assignment operators with symbols
let sym1 = Symbol("sym1");
let sym2 = Symbol("sym2");
let symObj = { [sym1]: "value1", [sym2]: "value2" };
symObj[sym1] += " updated"; // Equivalent to symObj[sym1] = symObj[sym1] + " updated"
console.log(symObj[sym1]); // Output: "value1 updated"      