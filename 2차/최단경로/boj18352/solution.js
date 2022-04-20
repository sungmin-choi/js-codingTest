// 백준용
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");

const filePath = require('fs').readFileSync(__dirname + '/input.txt', 'utf8');
let input = filePath.trim().split('\n');
input = input.map((ele) => ele.replace(/(\r\n|\n|\r)/gm, ''));
const [N, M, K, X] = input
  .shift()
  .split(' ')
  .map((e) => Number(e));
input = input.map((e) => e.split(' ').map((v) => Number(v)));

class MinHeap {
  constructor() {
    this.heap = [null];
  }
  push(value) {
    this.heap.push(value);
    let currentIdx = this.heap.length - 1;
    let parentIdx = Math.floor(currentIdx / 2);

    while (
      parentIdx !== 0 &&
      this.heap[parentIdx].cost > this.heap[currentIdx].cost
    ) {
      this._swap(parentIdx, currentIdx);
      currentIdx = parentIdx;
      parentIdx = Math.floor(currentIdx / 2);
    }
  }

  pop() {
    if (this.isEmpty()) return;
    if (this.heap.length === 2) return this.heap.pop();
    let returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      (this.heap[leftIndex] &&
        this.heap[currentIndex].cost > this.heap[leftIndex].cost) ||
      (this.heap[rightIndex] &&
        this.heap[currentIndex].cost > this.heap[rightIndex].cost)
    ) {
      if (this.heap[leftIndex] === undefined) {
        this._swap(currentIndex, rightIndex);
      } else if (this.heap[rightIndex] === undefined) {
        this._swap(currentIndex, leftIndex);
      } else if (this.heap[leftIndex].cost < this.heap[rightIndex]) {
        this._swap(currentIndex, leftIndex);
      } else {
        this._swap(currentIndex, rightIndex);
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }

  isEmpty() {
    return this.heap.length === 1;
  }

  _swap(a, b) {
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
}

function dijkstra(input, N, X) {
  const heap = new MinHeap();
  heap.push({ node: X, cost: 0 });
  const dist = [...Array(N + 1)].map(() => Infinity);
  dist[X] = 0;
  while (!heap.isEmpty()) {
    const { node: current, cost: currentCost } = heap.pop();

    for (const [src, dest] of input) {
      const nextCost = currentCost + 1;
      if (src === current && nextCost < dist[dest]) {
        dist[dest] = nextCost;
        heap.push({ node: dest, cost: nextCost });
      } else if (dest === current && nextCost < dist[src]) {
        dist[src] = nextCost;
        heap.push({ node: src, cost: nextCost });
      }
    }
  }
  return dist;
}

const dist = dijkstra(input, N, X);

const result = [];

let idx = 0;
for (v of dist) {
  if (v === K) result.push(idx);
  idx++;
}

if (result.length === 0) console.log(-1);
else {
  for (v of result) console.log(v);
}
