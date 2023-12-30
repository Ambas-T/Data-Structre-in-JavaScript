import { Node } from './Node.js';

export class LinkedList {

    /**
     * Double Linked List 
     * Queue 
     * Stack 
     * Array
     */
    constructor(){
        this.head = null;
        this.size = 0;
    }

    insertAtBeginning(data){
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++
    }

    insertAtEnd(data){
        let newNode = new Node(data);
        let current = this.head;

        while(current.next !== null){
            current = current.next;
        }
        current.next = newNode;
        this.size++
    }

    insertAtIndex(data, index){
        if(this.getSize() < index || index < 0){
            console.log("Index out of bound Exception.");
            return;
        }

        if(index === 0) {
            this.insertAtBeginning(data);
            return;
        }

        let newNode = new Node(data);
        let current = this.head;
        let previous = null;
        let count = 0;

        while(count < index && current != null){
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = newNode;
        newNode.next = current;
        this.size++;
    }

    deleteAtBeignning(){
        if(!this.head){
            console.log("LinkedList Not Found.");
        }
        let data = this.head.data;
        this.head = this.head.next;
        this.size--;
        return data;
    }

    deleteAtEnd(){
        if(!this.head){
            console.log("LinkedList Not Found.");
        }

        let current = this.head;
        let previous = null;

        while(current.next !== null){
            previous = current;
            current = current.next;
        }

        previous.next = null;
        this.size--;
        return current.data;
    }

    deleteByElement(element){
        if(!this.head){
            console.log("LinkedList Not Found.");
        }

        if(this.head.data === element) this.deleteAtBeignning();

        let current = this.head;
        let previous = null;

        while(current.data !== element && current.next !== null){
            previous = current;
            current = current.next;
        }

        if(current.next == null) return null;

        let data = current.data;
        
        previous.next = current.next;

        return data;
    }

    traverse(){
        let current = this.head;

        while(current != null){
            console.log(current.data);
            current = current.next;
        }
    }

    getSize(){
        let current = this.head;
        let count = 0;

        while(current != null){
            count++;
            current = current.next;
        }
        return count;
    }

}