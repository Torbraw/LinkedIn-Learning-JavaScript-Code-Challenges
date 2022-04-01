/*
  WRITE YOUR SOLUTION HERE
*/
const username = Symbol("username");
const password = Symbol("password");

class User {
  [username] = "test";
  [password] = "test";
  age = 10;
}

const user = new User();
console.log(user.age);
console.log(user.username);