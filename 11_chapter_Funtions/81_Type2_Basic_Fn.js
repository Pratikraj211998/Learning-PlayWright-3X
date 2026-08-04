// Type 2 Functions

// So with argument/parameter but no return type. 

function greetByName(name){
      console.log("Hi", name);
}
greetByName("Pramod"); // argument
greetByName("Dipak");
greetByName("Meeti");
greetByName("Sangeetha");

let name1 = greetByName("Sumit");
console.log(name1);


//explaning the above code
// 1. We defined a function called greetByName which takes one parameter called name.
// 2. Inside the function, we log a greeting message that includes the name.
// 3. We call the function multiple times with different names as arguments.
// 4. The function does not return any value, so when we try to assign its result to name1, it will be undefined.   


