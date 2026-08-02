let scores = [45, 82, 91, 60, 73];

let grades = scores.map(item_score => item_score > 70 ? "Pass": "Fail");
console.log(grades);

// Map My app is generally used whenever we want to 
// transform the array into a new array of the same size. 

// Filter

let passing = scores.filter(s => s >= 70);
console.log(passing);


console.log("practices");


let scoreee=[32,43,56,54,76,54];

let gradesss =scoreee.map(a => a>40 ? "pass": "fail");
console.log(gradesss);

let pass =scoreee.filter(g => g >=40);
console.log(pass);

