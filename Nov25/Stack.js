import { Node } from './Node.js'


export class Stack {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }


    push(data){

        let newNode = new Node(data);

        if(!this.head){
            this.head = this.data = newNode;
            this.size++;
            return;
        }

        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.size++;
    }

    pop(){
        if(!this.head){
            console.log("Stack Not Found.");
            return;
        }

        let data = this.head.data;

        this.head = this.head.next;
        this.head.previous = null;

        return data;
    }

    peek(){
        if(!this.head){
            console.log("Stack Not Found.");
            return;
        }

        return this.head.data;
    }

    
    traverse(){
        let current = this.head;
        let response = "";
        while(current != null){
            response = response + "->" + current.data;
            current = current.next;
        }

        console.log(response);
    }
}