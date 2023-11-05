import { Node } from './Node.js'

export class DoubleLinkedList {

    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Add data at the last 
    insertAtLast(data){
        let newNode = new Node(data);
        if(!this.head) {
            this.head = this.tail = newNode;
        } else {
            newNode.pervious = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;          
    }

    // Add node at the beginning 
    insetAtBeginning(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = this.tail = newNode;
        } else{
            this.head.pervious = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.size++;
    }

    // Add node at the middle using index 
    insertAtIndexI(data, index){

        if(index < 0 || index > this.size){
            console.log("Error: Index out of bound");
            return;
        }

        let newNode = new Node(data);

        if(index === 0) {
            this.indexAtBeginning(data);
            return;
        }
        
        if(index === this.size){
            this.indexAtLast(data);
            return;
        }

        let current = this.head;
        let count = 0;

        while(count < index - 1){
            current = current.next;
            count++;
        }

        newNode.next = current.next;
        newNode.pervious = current;
        current.next.pervious = newNode;
        current.next = newNode;

        this.size++;
    }

    remove(data){
        if(!this.head){
            console.log("DoubleLinkedList is Not Found");
            return;
        }

        let current = this.head;

        /**
         * Divide and Conqure 
         * 1. Remove Head 
         * 2. Remove Tail
         * 3. Remove index i
         */

        // Remove from head
        if(this.head.data === data){
            this.head = this.head.next;

            if(!this.head){
                this.head.pervious = null;
            }else {
                this.tail = null;
            }
            this.size--;
        }

        // Remove from tail
        if(this.tail.data === data){
            this.tail = this.tail.pervious;
            this.tail.next = null;
            this.size--;
        }

        // Remove index i
        while(current.next != null){
            if(data === current.next.data){
                current.next = current.next.next;
                if(current.next){
                    current.next.pervious = current;
                }else{
                    this.tail = current;
                }
               
                this.size--;
                return;
            }
            current = current.next;
        }
    }

    find(data){
        if(!this.head){
            console.log("Double Linked List Not Found");
            return;
        }

        let current = this.head;
        while(current != null){
            if(current.data === data){
                return data;
            }
            current = current.next;
        }
        return null;
    }

    printList(){
        if(!this.head){
            console.log("Double LinkedList Not Found");
        }

        let current = this.head;

        while(current != null){
            console.log(current.data);
            current = current.next;
        }
    }

    printListReverse(){
        if(!this.head){
            console.log("Double LinkedList Not Found");
        }

        let current = this.tail;

        while(current != null){
            console.log(current.data);
            current = current.pervious;
        }
    }
}