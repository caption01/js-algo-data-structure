class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index) {
    if (index < 0 || index > this.length - 1) return undefined;

    let mid = Math.floor(this.length / 2);
    let start = 0;
    let end = this.length;

    let current;

    if (index <= mid) {
      current = this.head;

      while (start !== index) {
        current = current.next;
        start++;
      }

      return current;
    }

    if (index > mid) {
      current = this.tail;

      while (end !== index) {
        current = current.prev;
        end--;
      }

      return current;
    }

    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);
    if (!foundNode) return false;

    foundNode.val = val;
    return true;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return;
    }

    let removed = this.tail;

    this.tail.next = null;
    this.tail = this.tail.prev;
    removed.prev = null; //cut connect prev of removed node
    this.length--;

    return removed;
  }

  shift() {
    if (!this.head) return undefined;

    let shiftedNode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return shiftedNode;
    }

    this.head = shiftedNode.next;
    this.head.prev = null;
    shiftedNode.prev = null;
    shiftedNode.next = null;
    this.length--;

    return shiftedNode;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, val) {
    if (index < 0 || index > this.length - 1) return false;

    if (index === 0) {
      this.unshift(val);
      return true;
    }

    if (index === this.length) {
      this.push(val);
      return true;
    }

    let newNode = new Node(val);
    let prevNode = this.get(index - 1);
    let nextNode = this.get(index + 1);

    prevNode.next = newNode;
    newNode.prev = prevNode;
    newNode.next = nextNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return undefined;

    if (index === 0) return this.shift();

    if (index === this.length - 1) return this.pop();

    let removedNode = this.get(index);
    let prevNode = removedNode.prev;
    let afterNode = removedNode.next;

    prevNode.next = afterNode;
    afterNode.prev = prevNode;

    this.length--;

    removedNode.prev = null;
    removedNode.next = null;

    return removedNode;
  }
}

const list = new DoublyLinkedList();

list.push("A");
list.push("B");
list.push("C");
