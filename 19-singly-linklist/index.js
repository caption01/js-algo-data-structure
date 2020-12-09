class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  get(index) {
    if (index < 0 || index > this.length) return undefined;

    let counter = 0;
    let current = this.head;

    while (counter !== index) {
      current = current.next;
      counter++;
    }

    return current;
  }

  set(index, val) {
    let foundNode = this.get(index);

    if (foundNode) {
      foundNode.val = val;
      return true;
    }

    return false;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
      this.length = this.length + 1;
      return;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length = this.length + 1;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }

    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    // in case we have only 1 item in list
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;

    // my-code
    // while (current) {
    //   if (current.next === this.tail) {
    //     let temp = this.tail;
    //     this.tail = current;
    //     this.tail.next = null;
    //     return temp;
    //   }
    //   current = current.next;

    // }
  }

  shift() {
    if (!this.head) {
      return undefined;
    }

    let currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
      return;
    }

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insert(index, val) {
    let newNode = new Node(val);

    if (index < 0 || index > this.length) return false;

    // index same length -> push method
    if (index === this.length) return !!this.push(val);

    // index is 0 -> unshift method
    if (index === 0) return !!this.unshift(val);

    let prevNode = this.get(index - 1);
    let current = this.get(index);

    prevNode.next = newNode;
    newNode.next = current;
    this.length++;
    return true;
  }

  remove(index) {
    // index < 0 || index > length -> not accept
    if (index < 0 || index > this.length) return false;

    // index = length -1 => use pop method
    if (index === this.length - 1) return !!this.pop();

    // index = 0 -> use shift method
    if (index === 0) return !!this.shift();

    let prev = this.get(index - 1);
    let removed = this.get(index);
    prev.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let prev = null;
    let next;

    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }

    return this;
  }
}

const linkedList = new SinglyLinkedList();

linkedList.push("A");
linkedList.push("B");
linkedList.push("C");
linkedList.push("D");

console.log(linkedList);
console.log("=====");
linkedList.reverse();
console.log(linkedList);
