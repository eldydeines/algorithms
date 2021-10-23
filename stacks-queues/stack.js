/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    let newNode = new Node(val);
    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    }
    else {
      let current = this.first;
      this.first = newNode;
      this.first.next = current;
    }
    this.size++;
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    let top = this.first;
    if (this.first == null && this.last == null) {
      throw new Error("Empty Queue");
    }
    else if (this.first == this.last) {

      this.first == null;
      this.head == null;
      this.size--;
      return top.val;
    }
    else {
      this.first = this.first.next;
      this.size--;
      return top.val;
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    return (this.first == null && this.last == null) ? true : false;
  }

  print() {
    let current = this.first;
    for (let x = 0; x < this.size; x++) {
      console.log(current);
      if (current.next == null) {
        break;
      }
      current = current.next;
    }
  }
}

module.exports = Stack;

const stack = new Stack();
stack.push(10);
stack.push(100);
stack.push(1000);
console.log(stack.print());
console.log('Start Popping');
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.print());
