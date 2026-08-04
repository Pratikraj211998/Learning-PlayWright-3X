function greet(name){
    return `Hello. ${name}`;
}

let op = greet('Alice');
console.log(op);

//explaning the above code
// 1. We defined a function called greet which takes one parameter called name.
// 2. Inside the function, we return a string that includes the name using template literals.
// 3. We call the function with the argument 'Alice' and store its return value in the variable op.
// 4. Finally, we log the value of op to the console, which will output "Hello. Alice". 

// more examples of template literals
function greetByHi(name){
    return `Hi. ${name}`;
}

let op1 = greetByHi('Bob');
console.log(op1);

//2.examples
function greetByHello(name){
    return `Hello. ${name}`;
}

let op2 = greetByHello('Charlie');
console.log(op2);   