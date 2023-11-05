import { SingleLinkedList } from './SingleLinkedList.js'

// Create a new instance of SingleLinkedList
const linkedList = new SingleLinkedList();

// Insert some data into the linked list
linkedList.insertAtLast(10);
linkedList.insertAtLast(20);
linkedList.insertAtLast(30);

linkedList.printListData();

console.log("Find ten -> " + linkedList.find(10))