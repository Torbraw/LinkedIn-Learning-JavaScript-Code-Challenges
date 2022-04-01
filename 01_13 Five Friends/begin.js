/*
  WRITE YOUR SOLUTION HERE
*/
async function displayApiData() {
  const response = await fetch("https://randomuser.me/api/?results=5", {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const timelineDiv = document.getElementById('timeline');
  (await response.json()).results.forEach((r) => {
    const img = document.createElement('img');
    img.src = r.picture.medium;
    timelineDiv.appendChild(img);
  });
}

displayApiData();