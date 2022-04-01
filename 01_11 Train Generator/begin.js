/*
  WRITE YOUR SOLUTION HERE
*/
function* getStop() {
  yield 'Poughkeepsie'
  yield 'Newburgh'
  yield 'Peekskill'
  yield 'Yonkers'
  yield 'Bronx'
  yield 'Grand Central'
}
const iterator = getStop();

function getNextStop() {
  const nextStop = iterator.next();
  if (nextStop.done) {
    console.log('We made it!');
    document.getElementById('next-stop').disabled = true;
  } else {
    console.log(nextStop.value);
  }
}

document.getElementById('next-stop').addEventListener('click', getNextStop);