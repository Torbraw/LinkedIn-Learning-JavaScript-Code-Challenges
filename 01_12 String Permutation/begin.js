/*
  WRITE YOUR SOLUTION HERE
*/
function getPossibleLettersCombination(string) {
  return string.length > 0 ? string.length * getPossibleLettersCombination(string.slice(1)) : 1;
}

console.log(getPossibleLettersCombination('test'))