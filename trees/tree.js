/** TreeNode: node for a general tree. */

class TreeNode {

  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }



}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {

    if (this.root == null) {
      return 0;
    }

    let toAddStack = [this.root];
    let sum = 0;
    while (toAddStack.length) {
      let current = toAddStack.pop();
      for (let child of current.children) {
        toAddStack.push(child);
      }
      sum += current.val;
    }

    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

    if (this.root == null) {
      return 0;
    }

    let toAddStack = [this.root];
    let evens = 0;
    while (toAddStack.length) {
      let current = toAddStack.pop();
      for (let child of current.children) {
        toAddStack.push(child);
      }
      if (current.val % 2 == 0) {
        evens += 1;
      }
    }

    return evens;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {

    if (this.root == null) {
      return 0;
    }

    let toAddStack = [this.root];
    let count = 0;
    while (toAddStack.length) {
      let current = toAddStack.pop();
      for (let child of current.children) {
        toAddStack.push(child);
      }
      if (current.val > lowerBound) {
        count += 1;
      }
    }

    return count;
  }
}

module.exports = { Tree, TreeNode };
