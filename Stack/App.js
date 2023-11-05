import { Stack } from './Stack.js'

const stack = new Stack();
stack.push(10);
stack.push(30);
stack.push(40);
stack.printStack();
console.log("");
stack.pop();
stack.printStack();
console.log("");
stack.peek();
stack.printStack();
console.log("");
console.log(stack.peek());