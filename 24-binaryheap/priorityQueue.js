class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorirtQueue {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let el = this.values[idx];

    while (idx > 0) {
      let parantIdx = Math.floor((idx - 1) / 2);
      let parentEl = this.values[parantIdx];

      if (this.values[parantIdx].priority < el.priority) {
        let temp = parentEl;
        this.values[parantIdx] = el;
        this.values[idx] = temp;
      }

      idx = parantIdx;
    }
  }

  sinkDown() {
    let idx = 0;
    let length = this.values.length;
    let el = this.values[idx];

    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;

      let leftChild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftChild.priority = this.values[leftChildIdx].priority;

        if (leftChild.priority > el.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild.priority = this.values[rightChildIdx].priority;

        if (
          (swap === null && rightChild.priority > el.priority) ||
          (swap !== null && rightChild.priority > leftChild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;
      this.values[idx] = this.values[swap];
      this.values[swap] = el;
      idx = swap;
    }
  }

  enqueue(value, priority) {
    let newNode = new Node(value, priority);
    this.values.push(newNode);
    this.bubbleUp();
  }

  dequeue() {
    let max = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }
}

const ER = new PriorirtQueue();

ER.enqueue("common cold", 3);
ER.enqueue("gunshot wound", 1);
ER.enqueue("high fever", 2);

console.log(ER);
