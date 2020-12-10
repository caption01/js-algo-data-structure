class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  bubbleUp() {
    let idx = this.values.length - 1;
    let el = this.values[idx];

    while (idx > 0) {
      let parantIdx = Math.floor((idx - 1) / 2);
      let parentEl = this.values[parantIdx];

      if (this.values[parantIdx] < el) {
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
        leftChild = this.values[leftChildIdx];

        if (leftChild > el) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];

        if (
          (swap === null && rightChild > el) ||
          (swap !== null && rightChild > leftChild)
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

  insert(value) {
    this.values.push(value);
    this.bubbleUp();
  }

  extractMax() {
    let max = this.values[0];
    let end = this.values.pop();

    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }

    return max;
  }
}

const heap = new MaxBinaryHeap();

heap.insert(20);
heap.insert(30);
heap.insert(10);
heap.insert(8);
heap.insert(19);
heap.insert(1);
heap.insert(11);

console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap.extractMax());
console.log(heap);
