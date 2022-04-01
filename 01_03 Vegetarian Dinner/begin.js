/*
  WRITE YOUR SOLUTION HERE
*/
const menu = [
  {
    name: "Chicken parmesan",
    isVegetarian: false,
  },
  {
    name: "Penne a la vodka",
    isVegetarian: true,
  },
  {
    name: "Mushroom risotto",
    isVegetarian: true,
  },
  {
    name: "Veal saltambuca",
    isVegetarian: false,
  },
  {
    name: "Filet mignon",
    isVegetarian: false,
  },
];

const vegeOnlyMenu = menu.filter(m => m.isVegetarian);

const ulMenu = document.getElementById('menu');
vegeOnlyMenu.forEach((menu) => {
  const li = document.createElement('li');
  li.textContent = menu.name;
  ulMenu.appendChild(li);
});