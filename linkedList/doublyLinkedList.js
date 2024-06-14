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