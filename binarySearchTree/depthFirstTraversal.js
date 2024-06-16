// class BSTNode {
//     constructor(key) {
//         this.key = key;
//         this.right = null;
//         this.left = null;
//     }
// }


const depthFirstTraversal = (root) => {
    if (root === null) {
        return []
    }
    const values = []
    const stack = [root]
    while (stack.length > 0) {
        const node = stack.pop();
        values.push(node);
        if (node.right !== null) {
            stack.push(node.right)
        }
        if (node.left !== null) {
            stack.push(node.left)
        }
    }
    return values
}

const recursiveDFT = (root) => {
    if (root === null) {
        return []
    }
    const leftValues = recursiveDFT(root.left)
    const rightValues = recursiveDFT(root.right)
    return [root, ...leftValues, ...rightValues]
}