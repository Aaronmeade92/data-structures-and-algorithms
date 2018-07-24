class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {

    constructor() {
        this.root = null;
    }

    insert(data) {

        var newNode = new Node(data);

        if (this.root === null) {
            this.rooot = newNode;
        } else {
            this.insertNode(this.root, newNode);
        } return newNode;

    };

    remove(data) {
        this.root = this.removeNode(this.root, data);
    };

    find(value) {
        return contain(this.root, value);
    }
};


function removeNode(node, data) {

}

function contains(node, data) {
    if (node.value === data) {
        return true;
    }
    if (n < node.value) {
        if (!node.right) {
            return false
        } else {
            return contain(node.right, data);
        }
    } else {
        if (!node.left) {
            return false
        } else {
            return contain(node.left, data);
        }
    }
}
// Tree.prototype.Traversal = function (filter) {

//     let queue = [];
//     let results = [];
//     const nextNode;


// };