import { Node } from './Node.js'

export class BinarySearchTree {
    /**
     * Insertion
     * Deletion
     * Find 
     * Traverse
     * 
     */

    constructor(){
        this.root = null;
    }

    //Insertion

    _insertRecursively(root, node){

        if(root == null) root = node;

        if(root.data > node.data){
            root.left = this._insertRecursively(root.left, node);
        } else if(root.data < node.data){
            root.right = this._insertRecursively(root.right, node);
        }

        return root;
    }

    insert(data){

        let node = new Node(data);

        if(!this.root){
            this.root = node;
            return;
        }
        
        return this._insertRecursively(this.root, node);
    }

    //delete
    findMinNode(root){
        while(root.left != null){
            root = root.left;
        }

        return root;
    }

    _deleteRecursively(root, node){
        if(!root) return null;

        if(root.data > node.data){
            root.left = this._deleteRecursively(root.left, node);
        }else if(root.data < node.data){
            root.right = this._deleteRecursively(root.right, node);
        }else {
            if(root.left == null){
                root = root.right;
                //To protect the code from NullPointerException 
                if(root != null) root.right = null;
                return root;
            }

            if(root.right == null){
                root = root.left;
                if(root != null) root.left = null;
                return root;
            }

            let minNode = this.findMinNode(root.right);
            root.data = minNode.data;

            root = this._deleteRecursively(root.right, minNode);

            return minNode.data;
        }

    }

    delete(data){
        if(!this.root){
            console.log("Binary Search Tree is Empty.");
            return;
        }

        let node = new Node(data);

        return this._deleteRecursively(this.root, node);
    }

    //traverse
    _traverseRecursively(root){
        if(!root){
            return;
        }

        this._traverseRecursively(root.left);
        console.log(root.data);
        this._traverseRecursively(root.right);
        
    }


    traverse(){
        if(!this.root){
            console.log("Binary Search Tree is Empty");
            return;
        }

        return this._traverseRecursively(this.root);
    }
}