/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if (this.root == null) {
      return 0;
    }

    function checkChildren(node) {

      if (node.right === null || node.left === null) {
        return 1;
      }
      if (node.left === null) {
        return 1 + checkChildren(node.right);
      }
      if (node.right === null) {
        return 1 + checkChildren(node.left);
      }
      //I had to look at the solution for this return line as my answer kept coming up short.
      return (
        Math.min(checkChildren(node.left), checkChildren(node.right)) + 1
      );
    }
    return 1 + Math.min(checkChildren(this.root.left), checkChildren(this.root.right));
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {

    if (this.root == null) {
      return 0;
    }

    function checkChildren(node) {

      if (node.right === null || node.left === null) {
        return 1;
      }
      if (node.left === null) {
        return 1 + checkChildren(node.right);
      }
      if (node.right === null) {
        return 1 + checkChildren(node.left);
      }
      //I had to look at the solution for this return line as my answer kept coming up short.
      return (
        Math.max(checkChildren(node.left), checkChildren(node.right)) + 1
      );
    }
    return 1 + Math.max(checkChildren(this.root.left), checkChildren(this.root.right));
  }


  /** maxSum(): return the maximum sum you can obtain by traveling along a path in the tree.
   * The path doesn't need to start at the root, but you can't visit a node more than once. */
  //referenced solution as I kept coming up short.
  maxSum() {

    if (this.root == null) {
      return 0;
    }

    let maxSum = 0;

    function add(node) {

      //----------------------
      if (node === null) {
        return 0;
      }
      //----------------------

      let rightSum = add(node.right);
      let leftSum = add(node.left);
      if (rightSum == undefined || rightSum < 0) {
        rightSum = 0;
      }
      if (leftSum == undefined || leftSum < 0) {
        leftSum = 0;
      }
      //----------------------
      maxSum = Math.max(maxSum, (rightSum + leftSum + node.val));
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    add(this.root);
    return maxSum;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound) {
    if (this.root == null) {
      return null;
    }

    let queue = [this.root];
    let closest = null;
    //referenced solution as I kept coming up short.
    while (queue.length) {

      let currentNode = queue.shift();
      let currentVal = currentNode.val;

      //start evaluting currentVal - make it closest if nothing to compare to, or 
      //if it is closer reassign to "Should Reassign"
      let higherThanLowerBound = currentVal > lowerBound;
      let shouldReassignClosest = currentVal < closest || closest === null;

      if (higherThanLowerBound && shouldReassignClosest) {
        closest = currentVal;
      }
      //keeping track of stack and adding to queue if it exists
      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return closest;

  }

}
module.exports = { BinaryTree, BinaryTreeNode };
