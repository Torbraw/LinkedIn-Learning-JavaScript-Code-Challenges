/*
  WRITE YOUR SOLUTION HERE
*/
function urlify(blogTitle) {
  const punctuation = /[.,/#!$%^&*;:=!\-_()`'"]/g;
  return blogTitle.replace(punctuation, "").toLowerCase().replaceAll(" ", "-");
}

console.log(urlify("How I Got Into Programming!!!"))