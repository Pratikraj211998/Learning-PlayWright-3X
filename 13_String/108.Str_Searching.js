// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";
// includes()
url.includes("staging");  
url.includes("production");

// startsWith / endsWith
url.startsWith("https");
url.startsWith("http://"); 
url.endsWith("true"); 

// indexOf / lastIndexOf
console.log(url.indexOf("a"));
console.log(url.lastIndexOf("a"));
console.log(url.indexOf("nothere"));

// ASCII -> A -> 65

//practice

let url2 = "https://staging.vwo.com/api/login?retry=true";
console.log(url2.includes("staging"));  // true
console.log(url2.includes("production")); // false

console.log(url2.startsWith("https")); // true
console.log(url2.startsWith("http://")); // false
console.log(url2.endsWith("true")); // true

console.log(url2.indexOf("a")); // 8
console.log(url2.lastIndexOf("a")); // 25
console.log(url2.indexOf("nothere")); // -1 