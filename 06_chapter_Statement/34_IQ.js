let age =27;

if (age>18){
    console.log("go goa");
}else{
    console.log("not goa")
}

// practices
let input = "";
if (input) {
  console.log("has input");
} else {
  console.log("empty input"); // "" is falsy
}


let hasAccount = true;
let isVerified = false;
if (hasAccount) {
  if (isVerified) {
    console.log("Access granted");
  } else {
    console.log("Please verify your account");
  }
} else {
  console.log("Please create an account");
}
