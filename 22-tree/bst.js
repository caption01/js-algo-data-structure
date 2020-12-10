class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current.left || current.right) {
      if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }

      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      }
    }

    if (val < current.val) {
      current.left = newNode;
    } else {
      current.right = newNode;
    }

    return this;
  }
}

const trees = new BinarySearchTree();

trees.insert(10);
trees.insert(5);
trees.insert(13);

console.log(trees);
