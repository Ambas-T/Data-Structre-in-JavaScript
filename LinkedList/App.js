import { SingleLinkedList } from './SingleLinkedList.js'

// Create a new instance of SingleLinkedList
const linkedList = new SingleLinkedList();

// Insert some data into the linked list
linkedList.append(10);
linkedList.append(20);
linkedList.append(30);

linkedList.printListData();

console.log("Find ten -> " + linkedList.find(10))