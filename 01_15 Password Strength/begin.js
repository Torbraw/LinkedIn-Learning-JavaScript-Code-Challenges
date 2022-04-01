/*
  WRITE YOUR SOLUTION HERE
*/
function isPasswordValid(password) {
  return new RegExp(/(?=.+[a-z])(?=.+[A-Z])(?=.+[0-9])(?=.+[!@#$%^&*])(?=.{8,})/g).test(password) ? "Your password is valid" : "Your password is not valid, try again";
}

console.log(isPasswordValid("abc"));
console.log(isPasswordValid("9Ab!4567"));