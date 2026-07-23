// ==========================================
// Practice Questions — Set 2
// Identifiers, Data Types, Operators, Statements
// Solve each question below its comment block.
// ==========================================

// ---------- Identifiers & Variables ----------

// Q1. Declare 3 variables using var, let, and const with the same value.
//     Try redeclaring each one in the same scope — which ones fail, and why?
    // var
        var v=10;
        var v=11; // we can redeclaring 
        v=12;
        console.log(v);
    // let
        let l=10;
        //let l=11; we cant redeclaring 
        l=11; // we can chnage value
        console.log(l);

    const c=10;
    //const c=11; //we cant redeclarin
    //c=11; we cant chnage value


// Q2. Write an identifier using `$` and one using `_` as the very first character.
//     Are both valid? Log their values to confirm.
    //$
    let $sign="doller"
    console.log($sign);

    let _text="allowed"
    console.log(_text);


// ---------- Data Types & Literals ----------

// Q3. Create a variable holding a BigInt value and one holding a Symbol.
//     Log `typeof` for both.
     let bigint=2145332523543654645654663466575765789676456769854368768789798798;
     console.log(typeof(bigint));

    let bol=Symbol("sign");
    console.log(typeof(bol));



// Q4. Write two variables that look equal but are actually different types
//     (e.g. a number and a string version of the same number).
//     Prove they're different types using typeof.
        let num=5
        let str="5"

        console.log(num===str);


// Q5. Create an object `{ a: 1 }` and a copy of it using `= ` (not spread).
//     Change a property on the copy — does the original change too? Explain why.


// ---------- Operators ----------

// Q6. Write code showing the difference between `"10" + 5` and `"10" - 5`.


// Q7. Use the ternary operator to check if a number is even or odd (no if/else allowed).


// Q8. Given `let count = 0;`, write code using the logical assignment operator `||=`
//     to set a default value of 10 — then explain why this is risky when 0 is a valid value.


// Q9. Predict the output before running:
//     console.log(true + true);
//     console.log("5" * "2");
//     console.log([] == false);


// Q10. Write a bitwise AND (`&`) example and explain what it's doing at the bit level
//      for two small numbers like 5 and 3.


// ---------- Conditional Statements ----------

// Q11. Write an if/else to check if a number is divisible by both 3 and 5.


// Q12. Write a nested if/else to determine ticket price:
//      - age < 5   -> free
//      - age 5-17  -> half price
//      - age 18-59 -> full price
//      - age 60+   -> senior discount


// Q13. Write an if/else if/else chain to classify BMI:
//      < 18.5 underweight, 18.5-24.9 normal, 25-29.9 overweight, 30+ obese.


// Q14. Write a switch statement to print the day name for a number 1-7 (1 = Monday).
//      Include a default case for invalid input.


// Q15. Combine logical operators (&&, ||) with if/else to check login access:
//      allow access only if (isAdmin is true) OR (isMember is true AND hasPaid is true).
