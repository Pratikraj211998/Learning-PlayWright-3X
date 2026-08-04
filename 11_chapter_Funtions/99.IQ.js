var a = "Pratik";

if(true){
    console.log(a);
    var a = "temp";
    console.log(a);
}
// Global Scope
// a = "Pratik"
// Enter Block , Block Scope
//  a = TDZ (exist but not initialized)
// console.log(a);

//let 

let a = 10
console.log(a)
if (true){ 
    console.log(a); 
    let a = 20;
}
