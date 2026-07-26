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



// ---------- Operators ----------

// Q6. Write code showing the difference between `"10" + 5` and `"10" - 5`.
   console.log("10"+ 5);  //"10 " will act as string 
   console.log("10"-5);  // "10" will act as number

// Q7. Use the ternary operator to check if a number is even or odd (no if/else allowed).
    let n = 7;
    console.log(n % 2 === 0 ? "even" : "odd");

// Q8. Given `let count = 0;`, write code using the logical assignment operator `||=`
//     to set a default value of 10 — then explain why this is risky when 0 is a valid value.
    let count = 0;
    count ||= 10;
    console.log(count); // 10 — but count was legitimately 0, not "missing"!
    // Risky because `||=` treats any falsy value (0, "", null, undefined, NaN, false)
    // as "no value", so a valid 0 gets overwritten with the default.
    // Use `??=` instead — it only falls back on null/undefined, so 0 is preserved.

// Q9. Predict the output before running:
    console.log(true + true); // 2
    console.log("5" * "2");   //10
   console.log([] == false);  //true


// Q10. Write a bitwise AND (`&`) example and explain what it's doing at the bit level
//      for two small numbers like 5 and 3.


// ---------- Conditional Statements ----------

// Q11. Write an if/else to check if a number is divisible by both 3 and 5.

  let x=30;
  console.log(x % 3===0 && x%5 ===0);


// Q12. Write a nested if/else to determine ticket price:
//      - age < 5   -> free
//      - age 5-17  -> half price
//      - age 18-59 -> full price
//      - age 60+   -> senior discount
    let age=78;
        if (age<5){
            console.log("free");

        }else if(age>5 && age<17 ){
            console.log("half price");
        }else if (age>18 && age<59){
            console.log("full price");
        }else{
            console.log("60+")
        }

// Q13. Write an if/else if/else chain to classify BMI:
//      < 18.5 underweight, 18.5-24.9 normal, 25-29.9 overweight, 30+ obese.
    let bmi = 27.3;
    if (bmi < 18.5) {
        console.log("underweight");
    } else if (bmi < 25) {
        console.log("normal");
    } else if (bmi < 30) {
        console.log("overweight");
    } else {
        console.log("obese");
    }

// Q14. Write a switch statement to print the day name for a number 1-7 (1 = Monday).
//      Include a default case for invalid input.
            let num1=4;
            switch(num1){
                case 1:{
                    console.log("monday");
                    break;
                }case 2:{
                    console.log("tuesday");
                    break;
                }case 3:{
                    console.log("wednesday");
                    break;
                }case 4:{
                    console.log("thursday");
                    break;
                }case 5:{
                    console.log("friday");
                    break;
                }case 6:{
                    console.log("saturday");
                    break;
                }default:
                    {console.log("sunday")}
            }


// Q15. Combine logical operators (&&, ||) with if/else to check login access:
//      allow access only if (isAdmin is true) OR (isMember is true AND hasPaid is true).
    let isAdmin = false;
    let isMember = true;
    let hasPaid = true;

    if (isAdmin || (isMember && hasPaid)) {
        console.log("access granted");
    } else {
        console.log("access denied");
    }
