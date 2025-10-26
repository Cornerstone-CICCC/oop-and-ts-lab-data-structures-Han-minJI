// Create a function called findMiddle that returns the middle node of a singly linked list
// Tip: Create two runners (one runner moves one node at a time, the other one moves two nodes at a time)

const SLL = require("../lib/SLL");

function findMiddle(list) {
  // your code here
  let runner1 = list.head;
  let runner2 = list.head;

  while (runner1 !== null && runner1.next !== null) {
    runner1 = runner1.next.next;
    runner2 = runner2.next;
  }
  return runner2.data;
}

const list = new SLL();
list.insertAtBack(1);
list.insertAtBack(2);
list.insertAtBack(3);
list.insertAtBack(4);
list.insertAtBack(5);

console.log(findMiddle(list)); // Output: 3
