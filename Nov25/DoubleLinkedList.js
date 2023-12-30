import { Node } from './Node.js'


export class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertAtBeignning(data){
        let newNode = new Node(data);

        if(!this.head){
            this.head = this.tail = newNode;
            this.size++;
            return;
        }

        newNode.next = this.head;
        this.head.previous = newNode;
        this.head = newNode;
        this.head.previous = this.tail;
        this.tail.next = this.head;
        this.size++;
    }

    insertAtEnd(data){
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

    insetAtIndex(data, index){
        if(index < 0 || index > this.getSize()){
            console.log("Index Out of Bound Exception");
            return;
        }

        if(index === 0) this.insertAtBeignning(data);
        if(index === this.getSize()) this.insertAtEnd(data);

        let newNode = new Node(data);

        let current = this.head;
        let previous = null;
        let count = 0;

        while(current !== null && count !== index){
            count++;
            previous = current;
            current = current.next;
        }

        if(current === null) return null;

        previous.next = newNode;
        newNode.previous = previous;

        newNode.next = current;
        current.previous = newNode;

        this.size++;
    }

    deleteByElement(data){
        if(!this.head){
            console.log("Linked List Not Found");
            return;
        }

        let responseData = 0;

        if(this.head.data === data){
            responseData = this.head.data;
            this.head = this.head.next;
            this.head.previous = null;
            this.size--;
            return responseData;
        }else if(this.tail.data === data){
            responseData = this.tail.data;
            this.tail = this.tail.previous;
            this.tail.next = null;
            this.size--;
            return responseData;
        }else {
            let current = this.head;
            let previous = null;

            while(current != null && current.data !== data){
                previous = current;
                current = current.next;
            }

            if(current === null){
                console.log("The element is not found");
                return;
            }

            responseData = current.data;

            current = current.next;

            previous.next = current;
            current.previous = previous;
            this.size--;

            return responseData;
        }
    }

    getSize(){
        return this.size;
    }

    traverse(){
        let current = this.head;
        let response = "";

        let count = 10;
        let index = 0;

        while(current != null && count != index){
            response = response + "->" + current.data;
            current = current.next;
            index++;
        }

        console.log(response);
    }
}