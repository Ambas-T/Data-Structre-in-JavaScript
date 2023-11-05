import { Node } from './Node.js'

export class SingleLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    //Add a node to the end of the list 
    append(data) {
        let node = new Node(data);
        let current;

        if(!this.head){
            this.head = node;
        }else {
            current = this.head;
            while(current.next) {
                current = current.next;
            }
            current.next = node;
        }
    }

    // Add a node to the beginning of the list 
    prepend(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    // Remove 
    remove(data){
        let current = new Node(data);
        let previous = null;

        while(current !== null){
            if(current.data === data){
                if(!pervious){
                    this.head = current.next;
                } else {
                    pervious.next = current.next;
                }
                this.size++;
                return current.data;
            }

            pervious = current;
            current = current.next;
        }
    }

    // Print the list data 
    printListData(){
        let current = this.head;
        
        while(current != null){
            console.log(current.data);
            current = current.next;
        }
    }

    // Find a node 
    find(data){
        let current = this.head;

        while(current != null){
            if(current.data === data){
                return data;
            }
            current = current.next;
        }
        return null;
    }

    // Get the size of the list 
    getSize(){
        return this.size;
    }

}