import { DoubleLinkedList } from './DoubleLinkedList.js'


const dll = new DoubleLinkedList();
dll.insertAtLast(10); //10,20
dll.insertAtLast(20);
dll.printList();
console.log("");
dll.insetAtBeginning(30);
dll.insetAtBeginning(40);
dll.printList();
console.log("");
dll.insertAtIndexI(50, 2);
dll.printList();
console.log("");
dll.remove(30);
dll.printList();
console.log("");