import { AVLTree } from "./AVLTree.js";

// Usage
const avlTree = new AVLTree();
avlTree.insert(30);
avlTree.insert(20);
avlTree.insert(40);
avlTree.insert(10);
avlTree.insert(25);
avlTree.insert(35);
avlTree.insert(50);

console.log(avlTree.search(25)); // true
avlTree.delete(20);
console.log(avlTree.search(20)); // false