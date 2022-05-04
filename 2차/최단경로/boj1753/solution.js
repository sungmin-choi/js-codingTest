// 백준용
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");

const filePath = require('fs').readFileSync(__dirname + '/input.txt', 'utf8');
let input = filePath.trim().split('\n');
input = input.map((ele) => ele.replace(/(\r\n|\n|\r)/gm, ''));
const [N, M] = input
  .shift()
  .split(' ')
  .map((v) => Number(v));
const K = Number(input.shift());
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

function dijkstra(graph, N, K) {
  let distance = new Array(N + 1).fill(Infinity);
  const queue = [];
  distance[K] = 0;
  const minHeap = new MinHeap();
  minHeap.push({
    vertex: K,
    cost: 0,
  });
  while (!minHeap.isEmpty()) {
    const { node: currentNode, cost: currentCost } = minHeap.pop();
    if (graph[currentNode] === undefined) continue;
    if (distance[currentNode] < currentCost) continue;
    for (let i = 0; i < graph[start].length; i++) {
      const { node: next, cost: nextCost } = graph[start][i];
      if (distance[next] > cost + nextCost) {
        distance[next] = cost + nextCost;
        minHeap.push({
          node: next,
          cost: distance[next],
        });
      }
    }
  }
  return distance;
}

const graph = Array.from(Array(N + 1), () => new Array());

input.forEach((value) => {
  const [start, end, cst] = value;
  graph[start].push({
    node: end,
    cost: cst,
  });
});

const answer = dijkstra(graph, N, K);
console.log(answer);
// answer.shift();
// answer.forEach((v) => {
//   if (v === Infinity) {
//     console.log('INF');
//   } else {
//     console.log(v);
//   }
// });
