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

    deleteNode(node, key) {
        if (node === null) {
            return null;
        }

        if (key < node.key) {
            node.left = this.deleteNode(node.left, key)
        }
        if (key > node.key) {
            node.right = this.deleteNode(node.right, key)
        }
        else {
            if (node.left === null && node.right === null) {
                return null
            }
            else if (node.left === null) {
                return node.right
            }
            else if (node.right === null) {
                return node.left
            }
            else {
                let tempNode = this.findMinNode(node.right)
                node.key = tempNode.key
                node.right = this.deleteNode(node.right, tempNode.key)
            }
        }
        return node;
    }

    findMinNode(node) {
        while (node.left !== null) {
            node = node.left;
        }
        return node;
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

// deletion in binary search tree

BinarySearchTree.prototype.delete = function (key) {
    this.root = this.deleteNode(this.root, key)
}

