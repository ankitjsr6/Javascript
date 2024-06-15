class BSTNode {
    constructor(key) {
        this.key = key;
        this.right = null;
        this.left = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insertAtNode(node, newNode)//node -> root
    {
        if (node.key > newNode.key) {
            if (node.left === null) {
                node.left = newNode
            }
            else {
                this.insertAtNode(node.left, newNode)// recursion
            }
        }
        else {
            if (node.right === null) {
                node.right = newNode;
            }
            else {
                this.insertAtNode(node.right, newNode)// recursion
            }
        }
    }
}

// insertion in binary search tree

BinarySearchTree.prototype.insert = function (key) {
    // create node
    const newNode = new BSTNode(key);
    if (this.root === null) {
        this.root = newNode;
    }
    else {
        this.insertAtNode(this.root, newNode);
    }
}

