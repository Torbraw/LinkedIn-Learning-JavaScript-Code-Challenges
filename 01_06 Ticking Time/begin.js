/*
  WRITE YOUR SOLUTION HERE
*/
const clockDiv = document.getElementById('clock');

setInterval(function() {
  const currentDate = new Date();

  clockDiv.textContent = currentDate.toLocaleTimeString();
}, 1000);
