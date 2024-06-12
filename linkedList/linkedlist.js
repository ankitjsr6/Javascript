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

//insert at start
LinkedList.prototype.insertAtBeginning = function (data) {
    //create new Node
    const newNode = new Node(data);
    //assign to head
    this.head = newNode;
}


//insert at end
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