import { Node } from './Node.js'
/**
 * Last in First out - LIFO 
 * 
 * Time Complexity : O(1) for push, pop, and peek  
 * Space Complexity : O(1) for push, pop, and peek
 * 
 */
export class Stack{
    constructor(){
        this.size = 0;
        this.head = null;
    }

    // Push 
    push(data){

        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
        }else{
            newNode.next = this.head;
            this.head = newNode; 
        }
        this.size++;
    }

    // Pop 
    pop(){
        if(!this.head){
            console.log("Stack Not Found");
            return;
        }

        let popNode = this.head;
        this.head = this.head.next;
        this.size--;
        return popNode.data;
    }

    // Peek
    peek(){
        if(!this.head){
            console.log("Stack Not Found");
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

    printStack(){
        if(this.isEmpty()){
            console.log("Stack is Empty");
            return;
        }

        let current = this.head;
        let response 

        while(current != null){
            console.log(current.data);
            current = current.next;
        }
    }
}