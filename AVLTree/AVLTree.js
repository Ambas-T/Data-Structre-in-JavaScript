import { Node } from './Node.js'

export class AVLTree {
    constructor(){
        this.root = null;
    }

    getHeight(node){
        if(!node) return 0;
        return node.height;
    }

    updateHeight(node){
        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1;
    }

    getBalance(node){
        if(!node) return 0;
        return this.getHeight(node.left) - this.getHeight(node.right);
    }

    rotateRight(y){
        let x = y.left;
        let T2 = x.right;

        x.right = y;
        y.left = T2;

        this.updateHeight(y);
        this.updateHeight(x);

        return x;
    }

    rotateLeft(x){
        let y = x.right;
        let T2 = y.left;

        y.left = x;
        x.right = T2;

        this.updateHeight(x);
        this.updateHeight(y);

        return y;
    }

    _insert(node, data){
        if(!node){
            return new Node(data);
        }

        if(data < node.data){
            node.left = this._insert(node.left, data);
        }else if(data > node.data){
            node.right = this._insert(node.right, data);
        }else {
            return node;
        }

        this.updateHeight(node);

        let balance = this.getBalance(node);

        // Left Left Case 
        if(balance > 1 && data < node.left.data) {
            return this.rotateRight(node);
        }

        // Right Right Case 
        if(balance < -1 && data > node.right.data){
            return this.rotateLeft(node);
        }

        // Left Right Case 
        if(balance > 1 && data > node.left.data){
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // right Left Case 
        if(balance < -1 && data < node.right.data){
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }
        
        return node;
    }

    insert(data){
        this.root = this._insert(this.root, data);
    }

    getMinValueNode(node){
        while(node.left){
            node = node.left;
        }
        return node;
    }

    _delete(node, data){
        if(!node)return node;

        if(data < node.data){
            node.left = this._delete(node.left, data);
        }else if(data > node.data){
            node.right = this._delete(node.right, data);
        }else{
            if(!node.left || !node.right){
                node = node.left || node.right;
            } else {
                let tempNode = this.getMinValueNode(node.right);
                node.data = tempNode.data;
                node.right = this._delete(node.right, tempNode.data);
            }
        }

        if(!node) return node;

        this.updateHeight(node);

        // Calculate the balance factor of the node
        const balance = this.getBalance(node); // This line defines the 'balance' variable


        // Left Left Case
        if (balance > 1 && this.getBalance(node.left) >= 0) {
            return this.rotateRight(node);
        }

        // Left Right Case
        if (balance > 1 && this.getBalance(node.left) < 0) {
            node.left = this.rotateLeft(node.left);
            return this.rotateRight(node);
        }

        // Right Right Case
        if (balance < -1 && this.getBalance(node.right) <= 0) {
            return this.rotateLeft(node);
        }

        // Right Left Case
        if (balance < -1 && this.getBalance(node.right) > 0) {
            node.right = this.rotateRight(node.right);
            return this.rotateLeft(node);
        }

        return node;

    }

    delete(data){
        this.root = this._delete(this.root, data);
    }

    search(data) {
        return this._search(this.root, data);
    }

    _search(node, data) {
        if (!node) {
            return false;
        }

        if (data < node.data) {
            return this._search(node.left, data);
        } else if (data > node.data) {
            return this._search(node.right, data);
        } else {
            return true; // Found the data
        }
    }

}