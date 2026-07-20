// ==========================================
// Practice Questions — Identifiers, Data Types, Operators, Statements
// Solve each question below its comment block.
// ==========================================

// ---------- Identifiers & Variables ----------

// Q1. Declare a `const` for your name and a `let` for your age.
//     Try reassigning both — explain what happens and why.
const Name="Pratik";
//Name="rohit"; we cant reassign the again in const

let myAge=27;
myAge=28; // in let we can reassign the value
// let myAge=76: reinition not allowed 




// Q2. Write 3 valid and 3 invalid identifier names, and explain why each invalid one fails.
let myName="pratik" // valid
let ar=5; // valid
let $name="raj" // valid

//let 4pratik="pratik" // not valid
//let pratik name="rah" // not valid
//let first-name="pratik" // not valid

// ---------- Data Types & Literals ----------

// Q3. Create one variable each for string, number, boolean, null, undefined, and array.
//     Log `typeof` for each — which result surprises you and why?
// string
  let name1="pratik"
  console.log(name1);
  console.log(typeof(name1));
 
// number
  let number=5;
  console.log(number);
  console.log(typeof(number)); // number

// boolean
  let pass=true;
  console.log(pass);
  console.log(typeof(pass)); //boolean

// null
   let n=null;
   console.log(n);
   console.log(typeof(n)); // object

// undefined
   let u;
   console.log(u);
   console.log(typeof(u));

// array
   let bike=["shine" , "cd100" , "splender", "activa"];
   console.log(bike);
    console.log(typeof(bike)); // object

// Q4. Write a line of code where `0.1 + 0.2 === 0.3` would need a workaround to return true.
    let sum=(0.1 + 0.2);
    console.log(sum===0.3);



// ---------- Operators ----------
console.log("operator");


// Q5. Given `let a = 5;`, predict the output of `console.log(a++ + ++a);` then run it to check.
    let a=5;
    console.log(a++ + ++a);


// Q6. Write code that shows the difference between `5 == "5"` and `5 === "5"`.
console.log(5 == "5"); // it will compare value
console.log(5 ==="5"); // it will compare value as will type


// Q7. Given `let x = 0;`, write one line using `??` and one using `||` that produce DIFFERENT results.
    let x = 0;

    console.log(x ?? 5); // 0  -> ?? only falls back on null/undefined, and 0 is neither
    console.log(x || 5); // 5  -> || falls back on any falsy value, and 0 IS falsy


// Q8. Predict and verify: `console.log(null >= 0);` and `console.log(null == 0);` — why do they differ?
    console.log(null >= 0); // true 
    console.log(null == 0);  // false 


// Q9. Use the modulus operator to check if a number is even or odd.
    let b=10;
    if(b%2==0){
        console.log("its even number")
    }else
        console.log("its odd numer")

// ---------- Conditional Statements ----------

// Q10. Write an if/else to check if a person can vote (age >= 18).
    let age= 27;

    if(age>=18){
        console.log("person can vote");
    }else console.log("you cant vote");

// Q11. Write nested if/else to categorize a person as: minor, adult, or senior citizen
//      (age < 18, 18-59, 60+).
    let agee = 19;

    if (agee < 18) {
        console.log("minor");
    } else if (agee <= 59) {
        console.log("adult");
    } else {
        console.log("senior citizen");
    }

// Q12. Write an if/else if/else chain to assign a grade (A/B/C/D/F) based on a numeric score.

    let grade=85;
    if (grade>=90){
        console.log("A");
    }else if(grade>=80){
        console.log("B");
    }else if(grade>=70){
        console.log("C");
    }else if(grade>=60){
        console.log("D");
    }else{
        console.log("F")
    }
// Q13. Write a program using a ternary operator to check if a number is positive, negative, or zero
//      (hint: you'll need nested ternaries).
    let num = -5;

    let result = num > 0 
        ? "positive" 
        : num < 0 
            ? "negative" 
            : "zero";

    console.log(result);

// Q14. Write a program that checks if a year is a leap year using if/else and the modulus operator.
    let year = 2024;

    if (year % 4 === 0 && year % 100 !== 0) {
        console.log(year + " is a leap year");
    } else if (year % 400 === 0) {
        console.log(year + " is a leap year");
    } else {
        console.log(year + " is not a leap year");
    }