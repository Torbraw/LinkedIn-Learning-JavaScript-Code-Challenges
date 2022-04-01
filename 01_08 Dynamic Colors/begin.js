/*
  WRITE YOUR SOLUTION HERE
*/
function changeColor(color) {
  return function () {
    document.body.style.background = color;
  };
}

const buttonColors = ['blue', 'pink', 'green',];
buttonColors.forEach(color => {
  document.getElementById(color).addEventListener('click', changeColor(color)); 
});
