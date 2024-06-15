class Node {
    constructor(data, next = null, prev = null) {
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }
}

// insert as start of list

DoublyLinkedList.prototype.insertAtBeginning = function (data) {

    const newNode = new Node(data, this.head, null)

    if (this.head !== null) {// if old data is there, then link its prev to new node.
        this.head.prev = newNode;
    }
    this.head = newNode;
    if (this.tail === null) {
        this.tail = newNode;
    }
}

// insert at end

DoublyLinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data, null, this.tail);

    if (this.tail !== null) {

    }
}

// insert at given node

DoublyLinkedList.prototype.insertAtGivenNode = function (prevNode, data) {
    if (prevNode === null) {
        return "wrong node"
    }

    const newNode = new Node(data, prevNode.next, prev);

    if (prevNode.next !== null) {
        prevNode.next.next = newNode
    }
    if (prevNode.next === null) {
        this.tail = newNode
    }
    prevNode.next = newNode;

}