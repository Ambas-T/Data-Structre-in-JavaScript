import { Node } from '../LinkedList/Node'

export class SingleLinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    _recursiveInsertAtLastHelper(node, data) {
        if(node.next === null){
            node.next = new Node(data);
        } else {
            this._recursiveInsertAtLastHelper(node.next, data);
        }
    }

    // Add a node to the end of the list 
    insertAtLast(data){
        if(this.head === null){
            this.head =  new Node(data);
        }else {
            this._recursiveInsertAtLastHelper(this.head, data);
        }
    }

    // Add a node to the beginning of the list 
    /**
     * 
     * Insert at the beginning does lead to recursion since the time complexity is consant
     * - time complexity is O(1)
     * 
     */
    insertAtBeginning(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    _recursiveRemoveByElementHelper(node, prev, data){
        if(node.data === data){
            prev.next = node.next;
            this.size--;
            return data;
        }
        return this._recursiveRemoveByElementHelper(node.next, node, data)
    }

    remove(data) {
        if(this.head === null){
            console.log("error");
            return; 
        } 

        if(this.head.data === data){
            this.head == this.head.next;
            return this.head.data;
        }

        this._recursiveRemoveByElementHelper(this.head, null, data);
        
        return null;
    }

    _recursiveFindHelper(node, data){
        if(node.data === data){
            return data;
        }
        this._recursiveFindHelper(node.next, data);
    }

    find(data){
        if(this.head === null){
            return null;
        }
        return this._recursiveFindHelper(this.data, data);
    }

}