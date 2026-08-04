// function as a expression
// function expression is a function that is assigned to a variable. 
// It can be anonymous or named. 
// It can be used as a value, passed as an argument, or returned from another function.


function greet(name){
    return `Hello, ${name}`;
}

// Function as Expression
const greet1 = function (name1){
    return `Hello, ${name1}`;
}


console.log(greet("Bob"));
console.log(greet1("Bob"));

//explaning the above code  
// 1. We defined a function called greet which takes one parameter called name and returns a greeting message.
// 2. We defined a function expression called greet1 which takes one parameter called name1 and returns a greeting message.
// 3. We call both functions with the argument "Bob" and log their return values to the console, which will output "Hello, Bob" for both.   