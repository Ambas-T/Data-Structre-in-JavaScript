import { Node } from './Node.js';


export class Queue {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    enQueue(data){
        let newNode = new Node(data);

        if(!this.head){
            this.head = this.tail = newNode;
            this.size++;
            return;
        }
        this.tail.next = newNode;
        newNode.previous = this.tail;
        this.tail = newNode;
        this.size++;
    }

    deQueue(){
        if(!this.head){
            console.log("Queue Not Found");
            return;
        }

        this.head = this.head.next;
        this.head.previous = null;
        this.size--;
    }

    traverse(){
        let current = this.head;
        let response = "";
        while(current != null){
            response = response + "<-" + current.data;
            current = current.next;
        }

        console.log(response);
    }
}
