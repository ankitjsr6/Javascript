//very similar to array, but we do have certain controls over it i.e. how data gets in/out

class Stack {
    constructor() {
        this.stack = []
    }

    push(element) {
        this.stack.push(element) // element is puhsed at top
    }

    pop() {
        return this.stack.pop(); // last element is deleted and returned
    }

    peek() {
        return this.stack[this.stack.length - 1]
    }

    isEmpty() {
        return this.stack.length === 0
    }

    clear() {
        this.stack = []
    }

    reverse() {
        return this.stack.reverse();
    }

    contains(element) {
        return this.stack.includes(element)
    }

    printElement() {
        let str = ""
        for (let i = 0; i < this.stack.length; i++) {
            str = str + this.stack[i] + ",";
        }
        return str;
    }
}

let myStack = new Stack()

myStack.push(2)
myStack.push(4)
myStack.push(7)
myStack.push(9)
console.log(myStack.pop())
console.log(myStack.isEmpty())
console.log(myStack.contains(2))
console.log(myStack.contains(3))
console.log(myStack.printElement())
console.log(myStack.clear())
console.log(myStack.isEmpty())
