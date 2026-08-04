function add(a, b, c) {
    return a + b + c;
}
let num = [1, 2, 3,5];
console.log(add(...num));// output: 6

// The above code defines a function called add that takes three parameters: a, b, and c. It returns the sum of these three parameters.

// We then create an array called num that contains four numbers: 1, 2, 3, and 5.

// Finally, we call the add function using the spread operator (...) to pass the elements of the num array as individual arguments to the function. The spread operator allows us to expand the array into separate values.

// In this case, the add function will receive 1, 2, and 3 as arguments, and it will return their sum, which is 6. The result is then logged to the console.    

// ----
function hasError(...codes) {
    return codes.some(c => c >= 400);
}


let responseCodes = [200, 201, 404];
let responseCodes2 = [200, 201, 404, 500];
hasError(...responseCodes);

// The above code defines a function called hasError that takes a variable number of arguments using the rest parameter syntax (...codes). It checks if any of the provided codes are greater than or equal to 400, indicating an error status code. The function uses the some() method to iterate through the codes and returns true if any code meets the condition, otherwise it returns false.

// We then create two arrays: responseCodes and responseCodes2, which contain different sets of status codes.

// Finally, we call the hasError function using the spread operator (...) to pass the elements of the responseCodes array as individual arguments to the function. The function will check if any of the codes in the array are greater than or equal to 400 and return true or false accordingly.  