import { Queue } from './Queue.js'

const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30)
queue.enqueue(40);
queue.printQueue();
console.log("");
console.log("Dequeue -> " + queue.dequeue());
queue.printQueue();
console.log("");
queue.peek();
queue.printQueue();
console.log("");
console.log(queue.peek());
