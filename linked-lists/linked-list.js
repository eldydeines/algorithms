/** Node: node for a singly linked list. */

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/** LinkedList: chained together nodes. */

class LinkedList {
    constructor(vals = []) {
        this.head = null;
        this.tail = null;
        this.length = 0;

        for (let val of vals) this.push(val);
    }

    /** push(val): add new value to end of list. */

    push(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length += 1;
    }

    /** unshift(val): add new value to start of list. */

    unshift(val) {
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length += 1;
    }

    /** pop(): return & remove last item. */

    pop() {
        let current = this.head;

        if (this.length == 1) {
            let value = current.val;
            this.tail = null;
            this.head = null;
            this.length -= 1;
            return value;
        }
        else {
            for (let x = 0; x < this.length; x++) {

                if (x == (this.length - 2)) {
                    let value = current.next.val;
                    this.tail = current;
                    current.next = null;
                    this.length -= 1;
                    return value;
                }

                current = current.next;
            }
        }

    }

    /** shift(): return & remove first item. */

    shift() {
        let value = this.head.val;
        if (this.length == 1) {
            this.tail = null;
            this.head = null;
            this.length -= 1;
            return value;
        }
        else {
            this.head = this.head.next;
            this.length -= 1;
            return value;
        }

    }

    /** getAt(idx): get val at idx. */

    getAt(idx) {
        let current = this.head;
        if (idx < this.length) {
            for (let x = 0; x <= idx; x++) {
                if (idx == x) {
                    return current.val;
                }
                current = current.next;
            }
        }
        else
            return "Error: Invalid idx";
    }

    /** setAt(idx, val): set val at idx to val */

    setAt(idx, val) {
        let current = this.head;
        if (idx < this.length) {
            for (let x = 0; x <= idx; x++) {
                if (idx == x) {
                    current.val = val;
                    return "Message: changed";
                }
                current = current.next;
            }
        }
    }

    /** insertAt(idx, val): add node w/val before idx. */

    insertAt(idx, val) {
        let newNode = new Node(val);
        if (idx == 0 && this.head === null) {
            this.head = newNode;
            this.tail = newNode;
            this.length += 1;
            return;
        }
        if (idx == this.length) {
            this.push(val);
            return;
        }
        let current = this.head;
        if (idx <= this.length - 1) {

            for (let x = 0; x <= idx; x++) {
                if ((x + 1) == idx) {
                    newNode.next = current.next;
                    current.next = newNode;
                    this.length += 1;
                    return;
                }

                current = current.next;
            }
        }

    }

    /** removeAt(idx): return & remove item at idx, */

    removeAt(idx) {
        let current = this.head;
        if (idx == 0 && this.length == 1) {
            this.tail = null;
            this.head = null;
            this.length -= 1;
            return;
        }
        if (idx < this.length) {
            for (let x = 0; x <= idx; x++) {
                if ((x + 1) == idx) {
                    current.next = current.next.next;
                    this.length -= 1;
                    return this.LinkedList;
                }
                current = current.next;
            }
        }
        else
            return "Error: Invalid idx";
    }

    /** average(): return an average of all values in the list */

    average() {
        let current = this.head;
        let average = 0;
        if (this.length >= 1) {
            while (current !== null) {
                average += current.val;
                current = current.next;
            }
            average = average / this.length;
            return average;
        }
        return 0;
    }

    showList() {
        let current = this.head;
        while (current !== null) {
            current = current.next;
        }
    }
}

module.exports = LinkedList;
