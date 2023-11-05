import { Node } from './Node.js'

export class Queue {
    constructor(){
        this.size = 0;
        this.head = null;
        this.tail = null;
    }

    /**
     * enqueue -> Insert data at the beginning 
     * dequeue -> Insesrt data at last 
     * peek -> Show data at the top
     */

    // Enqueue 
    enqueue(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = this.tail = newNode;
        }else {
           this.tail.next = newNode;
           this.tail = newNode;
        }
        this.size++;
    }

    // Dequeue
    dequeue(){
        if(!this.head){
            console.log("Queue Not Found.");
            return;
        }

        let current = this.head;
        this.head = this.head.next;
        this.size--;

        if(!this.head) {
            this.tail = null;
        }

        return current.data;
    }

    // Peek
    peek(){
        if(!this.head){
            console.log("Queue Not Found.");
            return;
        }
        return this.head.data;
    }

    // Check if the stack is empty
    isEmpty(){
        return this.size === 0;
    }

    // get size 
    getSize(){
        return this.size;
    }

    printQueue(){
        if(this.isEmpty()){
            console.log("Queue is Empty");
            return;
        }

        let current = this.head;

        while(current != null){
            console.log(current.data);
            current = current.next;
        }
    }
}