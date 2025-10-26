// Create a function called calcDistance that calculates the distance between two unique elements
// Make sure to implement Stack principle (LIFO)

const Stack = require("../lib/Stack");

function calcDistance(stack, a, b) {
  // your code here
  const tempStack = new Stack();
  let index = 0;
  let posA = 0;
  let posB = 0;

  while (!stack.isEmpty()) {
    let removeEl = stack.pop();
    if (removeEl === a) {
      posA = index;
    } else if (removeEl === b) {
      posB = index;
    }
    index++;
    tempStack.push(removeEl);
  }

  while (!tempStack.isEmpty()) {
    stack.push(tempStack.pop());
  }

  return posA - posB;
}

const students = new Stack();
students.push("John");
students.push("Joe");
students.push("Jane");
students.push("Jill");
students.push("Jim");

const distance = calcDistance(students, "Joe", "Jim");
console.log(distance); // 3
const distance2 = calcDistance(students, "Joe", "Jill");
console.log(distance2); // 2
