// Type 4 - With arg/ With return
// with argument/parameter and with return type.

function sumOfTwoNumbers(a,b){
    return a+b;
}

let c = sumOfTwoNumbers(4,5);
console.log(c);
console.log(sumOfTwoNumbers(4,5));

// Explaination
// 1. We defined a function called sumOfTwoNumbers which takes two parameters a and b.
// 2. Inside the function, we return the sum of a and b.
// 3. We call the function with arguments 4 and 5, and store the result in variable c.
// 4. Finally, we log the value of c to the console, which will output 9.   

// more examples of with argument/parameter and with return type.
function getResult(marks){
    if(marks >= 50){
        return "Pass";
    }else{
        return "Fail";
    }
}   

let result = getResult(85); // Pass
console.log(result);
result = getResult(45); // Fail
console.log(result);    

//2 examples
function getSum(num1, num2){
    return num1 + num2;
}

let sum = getSum(5, 10);
console.log(sum); // 15

sum = getSum(20, 30);
console.log(sum); // 50

sum = getSum(-5, 15);
console.log(sum); // 10 
