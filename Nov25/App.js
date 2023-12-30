import { BinarySearchTree } from "./BinarySearchTree.js";
import { DoubleLinkedList } from "./DoubleLinkedList.js";
import { Recursion } from "./Recursion.js";

let dl = new DoubleLinkedList();

dl.insertAtBeignning(10);
dl.insertAtBeignning(20);
// dl.traverse();


// Binary Search Tree 

let bst = new BinarySearchTree();

bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(1);
bst.insert(4);
bst.insert(6);
bst.insert(8);
bst.traverse();
console.log("Delete 5")
bst.delete(5);

bst.traverse();