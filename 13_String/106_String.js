let url = "https://app.vwo.com";
let status = 'pass';
let message = `Test completed in ${320}ms`;

// Single quotes
let a = 'hello';

// Double quotes
let b = "world";

// Template literals (backticks) — allows expressions & multiline
let name1 = "Alice";
let msg = `Hello, ${name1}! 2 + 2 = ${2 + 2}`;
let message2=`hello, ${name1}!`;

console.log(msg);
console.log(message2);

// Multiline
let report = `
  Test: Login
  Status: Pass
  Duration: 320ms
`;

console.log(String(200));
String(true); //  "true"
String(null); // "null"
String([1, 2]); // "[1,2]"