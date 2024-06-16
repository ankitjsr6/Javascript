// class BSTNode {
//     constructor(key) {
//         this.key = key;
//         this.right = null;
//         this.left = null;
//     }
// }

const breadthFirstTraversal = (root) => {
    if (root === null) {
        return []
    }

    const values = [];
    const queue = [root];

    while (queue.length > 0) {
        let node = queue.shift() // optimization.
        values.push(node.key)

        if (node.left !== null) {
            queue.push(node.left)
        }
        if (node.right !== null) {
            queue.push(node.right)
        }
    }
    return values

}