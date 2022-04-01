/*
  WRITE YOUR SOLUTION HERE
*/
const coffeOrdered = [2, 10, 1, 5, 5];

let sum = coffeOrdered.reduce((prev, curr) => prev += curr);

console.log(`The total bill is ${sum * 1.25}`)