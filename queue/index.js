
class Queue {

    constructor() {
        this.queue = []
    }

    enqueue(element) {
        this.queue.push(element);
    }
    dequeue() {
        if (this.isEmpty()) {
            return "Empty queue"
        }
        return this.queue.shift();
    }
    peek() {
        if (this.isEmpty()) {
            return "Empty queue"
        }
        return this.queue[0]
    }
    clear() {
        this.queue = []
    }
    isEmpty() {
        return this.queue.length === 0
    }

    printQueue() {
        let str = ""
        for (let i = 0; i < this.queue.length; i++) {
            str = str + this.queue[i] + "\n";
        }
        return str;
    }

}

let myQueue = new Queue();
myQueue.enqueue(2)
myQueue.enqueue(9)
myQueue.enqueue(4)
myQueue.enqueue(1)
console.log(myQueue.dequeue())
console.log(myQueue.printQueue())