/*
  WRITE YOUR SOLUTION HERE
*/
const masterMenu = [['Tacos', 'Burgers'], ['Pizza'], ['Burgers', 'Fries']];
const menuUl = document.getElementById('combined-menu');
let masterMenuSet = new Set();

masterMenu.forEach(menu => masterMenuSet = new Set([...masterMenuSet, ...menu]));
masterMenuSet.forEach(menu => {
  const li = document.createElement('li');
  li.textContent = menu;
  menuUl.appendChild(li);
})