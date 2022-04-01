/*
  WRITE YOUR SOLUTION HERE
*/
const classroom =   {
  hasTeachingAssistant: false,
  classList: ["Rashida", "John", "Roman", "Lisa", "Omair", "Lukas"],
};

function getStudents(classroom) {
  const { hasTeachingAssistant, classList } = classroom;
  const [teacher, assisant, ...students] = classList;
  
  return hasTeachingAssistant ? [...students] : [assisant, ...students]
}

console.log(getStudents(classroom));