class MinHeap {
  constructor() {
    this.heap = [null];
  }

  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    while (
      parentIndex !== 0 &&
      this.heap[currentIndex].cost < this.heap[parentIndex].cost
    ) {
      this._swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.isEmpty()) return;
    if (this.heap.length === 2) return this.heap.pop();
    const resultvalue = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    while (
      (this.heap[leftIndex] &&
        this.heap[currentIndex].cost > this.heap[leftIndex]) ||
      (this.heap[rightIndex] &&
        this.heap[currentIndex].cost > this.heap[rightIndex])
    ) {
      if (this.heap[leftIndex] === undefined) {
        this._swap(rightIndex, currentIndex);
        currentIndex = rightIndex;
      } else if (this.heap[rightIndex] === undefined) {
        this._swap(leftIndex, currentIndex);
        currentIndex = leftIndex;
      } else if (this.heap[leftIndex].cost < this.heap[rightIndex].cost) {
        this._swap(leftIndex, currentIndex);
        currentIndex = leftIndex;
      } else {
        this._swap(rightIndex, currentIndex);
        currentIndex = rightIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return resultvalue;
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

function solution(jobs) {
  const count = jobs.length;
  const minHeap = new MinHeap();
  jobs.sort((a, b) => a[0] - b[0]);

  let time = 0;
  let total = 0;
  let complete = 0;

  while (jobs.length || !minHeap.isEmpty()) {
    while (jobs.length) {
      if (jobs[0][0] === time) {
        const curJob = jobs.shift();
        minHeap.push({ start: curJob[0], cost: curJob[1] });
      } else break;
    }

    if (!minHeap.isEmpty() && time >= complete) {
      const { start, cost } = minHeap.pop();
      complete = cost + time;
      total += complete - start;
    }
    time++;
  }
  return (total / count) >> 0;
}
