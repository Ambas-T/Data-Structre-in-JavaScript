import { BST } from "./BST.js";

const bst = new BST();
bst.insert(50);
bst.insert(70);
bst.insert(60);
bst.insert(40);
bst.insert(45);
bst.insert(30);
bst.insert(35);
bst.insert(80);

bst.printBST();
console.log("");

bst.delete(70);
bst.printBST();
console.log("");