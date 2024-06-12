// create a Node
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
}

// insert at start
LinkedList.prototype.insertAtBeginning = function (data) {
    //create new Node
    const newNode = new Node(data);
    //assign to head
    this.head = newNode;
}


// insert at end
LinkedList.prototype.insertAtEnd = function (data) {
    const newNode = new Node(data)

    //check if head is null
    if (!this.head) {
        this.head = newNode;
        return;
    }

    // find out the last element and then assign newNode.
    let last = this.head;// assume head as last
    while (last.next) {
        last = last.next;
    }
    last.next = newNode;

}

// insert at any given node
LinkedList.prototype.insertAtAnyGivenNode = function (data, prevNode) {

    // we copy the address of next of previous node to newNode and then point prevNode.next to newNode
    if (prevNode.next == null) {
        return "Incorrect prev node"
    }

    const newNode = new Node(data, prevNode.next)
    prevNode.next = newNode;

}