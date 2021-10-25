class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {

    let newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (current) {

      if (val > current.val && current.right !== null) {
        current = current.right;
      }
      else if (val < current.val && current.left !== null) {
        current = current.left
      }
      else if (val > current.val && current.right == null) {
        current.right = newNode;
        return this;
      }
      else {
        current.left = newNode;
        return this;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  //  .insertRecursively(15)
  //  .insertRecursively(20)
  //  .insertRecursively(10)
  //  .insertRecursively(12);

  insertRecursively(val, current = this.root) {

    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    else if (current.right !== null && val > current.val) {
      current = this.insertRecursively(val, current.right);
    }
    else if (current.left !== null && val < current.val) {
      current = this.insertRecursively(val, current.left);
    }
    else if (val > current.val && current.right == null) {
      current.right = new Node(val);
      return this;
    }
    else {
      current.left = new Node(val);
      return this;
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {

    if (this.root === null) {
      return undefined;
    }

    let current = this.root;

    while (current) {
      if (current.val === val) {
        return current;
      }
      else if (current.right !== null && val > current.val) {
        current = current.right;
      }
      else if (current.left !== null && val < current.val) {
        current = current.left;
      }
      else {
        return undefined;
      }
    }

  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {

    if (this.root === null) {
      return undefined;
    }

    let foundNode;
    let isFound = false;

    function findIt(current) {
      if (current.val === val) {
        isFound = true;
        foundNode = current;
        return;
      }
      else if (current.right !== null && val > current.val) {
        findIt(current.right);
      }
      else if (current.left !== null && val < current.val) {
        findIt(current.left);
      }
      else {
        return;
      }
    }

    findIt(this.root);
    if (isFound) {
      return foundNode;
    }
    return undefined;

  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let visitedNodes = [];

    function traverse(node) {
      visitedNodes.push(node.val);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visitedNodes;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let visitedNodes = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      visitedNodes.push(node.val);
      if (node.right) traverse(node.right);
    }

    traverse(this.root);
    return visitedNodes;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    let visitedNodes = [];

    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      visitedNodes.push(node.val);
    }

    traverse(this.root);
    return visitedNodes;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let queue = [this.root];
    let visited = [];

    while (queue.length) {
      let current = queue.shift();
      visited.push(current.val);
      if (current.left) {
        queue.push(current.left);
      }
      if (current.right) {
        queue.push(current.right)
      }
    }
    return visited;
  }
}

module.exports = BinarySearchTree;
