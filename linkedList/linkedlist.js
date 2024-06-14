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

// delete first node/head

LinkedList.prototype.deleteFirstNode = function () {
    if (!this.head) {
        return;
    }
    this.head = this.head.next;
}

// delete last node
LinkedList.prototype.deleteLastNode = function () {
    if (!this.head) {
        return; // list is empty
    }
    if (!this.head.next.next) {
        this.head.next = null; // only one node is present
        return;
    }

    // find out the second last element and then make its pointer null.
    let secondlast = this.head;
    while (secondlast.next.next) {
        secondlast = secondlast.next
    }
    secondlast.next = null;
}

// delete node by a given key

LinkedList.prototype.deleteByGivenKey = function (key) {
    if (this.head === null) return
    if (this.head.data === key) {
        this.head = this.head.next;
        return;
    }
    let current = this.head;
    while (current.next != null) {
        if (current.next.data === key) {
            current.next = current.next.next;
            return
        }
        current = current.next;
    }
}


// search a given element

LinkedList.prototype.searchelement = function (key) {
    let current = this.head;
    while (current) {
        if (current.data === key) {
            return true;
        }
        current = current.next;
    }
    return false;

}




// traversal

LinkedList.prototype.traversal = function () {
    let current = this.head
    let traversal = []
    while (current) {
        traversal.push(current.data)
        current = current.next;
    }
    return traversal
}


// reversal

LinkedList.prototype.reversal = function () {
    let current = this.head;
    let prev = null;
    let next = null;
    while (current) {
        // first move next 
        next = current.next;
        // point current to previous point
        current.next = prev;
        // move the previous ahead
        prev = current;
        // move the current using next
        current = next;
    }
    this.head = prev;
}
