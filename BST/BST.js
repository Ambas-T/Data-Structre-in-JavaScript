import { Node } from './Node.js';

export class BST {
    constructor(){
        this.root = null;
    }

    _recursiveInsert(root, node){

        if(root === null){
            return node;
        }

        if(root.data > node.data){
            root.left = this._recursiveInsert(root.left, node);
        }else if(root.data < node.data){
            root.insert = this._recursiveInsert(root.right, node);
        }else {
            console.log("Value - " + node.data + " is already in the BST.");
        }
        return root;
    }

    insert(data){
        let newNode = new Node(data);
        if(!this.root){
            this.root = newNode;
        }else{
            this._recursiveInsert(this.root, newNode);
        }
    }

    _findMinNode(node){
        while(node.left != null){
            node = node.left;
        }
        return node;
    }

    _recursiveDelete(root, data) {
        if(root == null){
            return root;
        }

        if(root.data > data){
            root.left = this._recursiveDelete(root.left, data);
        }else if(root.data < data){
            root.right = this._recursiveDelete(root.right, data);
        }else {
            /**
             * 1. Leaf node
             * 2. One child node 
             * 3. Two child node 
             */
            if(root.left === null){
                return root.right;
            } else if(root.right == null){
                return root.left;
            }

            let minNode = this._findMinNode(root.right);
            root.data = minNode.data;
            root.right = this._recursiveDelete(root.right, minNode.data);
        }
        return root;
    }

    delete(data){
        if(!this.root){
            console.log("BST Not Found.");
            return;
        }
        return this._recursiveDelete(this.root, data);
    }

    _recuriveFind(root, data){
        if(root === null){
            return null;
        }

        if(root.data > data){
            return this._recuriveFind(root.left, data);
        }else if(root.data < data){
            return this._recuriveFind(root.right, data);
        }else {
            return root;
        }
    }

    find(data){
        if(!this.root){
            console.log("BST Not Found");
            return;
        }
        
        return this._recuriveFind(this.root, data);
    }

    _recuriveInorderPrintBST(root){
        if(root !== null){
            this._recuriveInorderPrintBST(root.left);
            console.log(root.data);
            this._recuriveInorderPrintBST(root.right);
        }
    }
    
    printBST(){
        if(!this.root){
            console.log("BST Not Found");
        }

        return this._recuriveInorderPrintBST(this.root);
    }
}