class MaxHeap {
  constructor() {
    this.heap = [null]; // 인덱스 위치를 1로 시작하기 편하기 0번 위치는 null 로 할당.
  }

  push(value) {
    this.heap.push(value); //처음에 맨 마지막에 값을 넣어준다.
    let currentIndex = this.heap.length - 1; //추가된 값 위치.
    let parentIndex = Math.floor(currentIndex / 2); //추가된 노드의 부모노드의 위치

    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      // 부모 위치가 0보다 작지 않으면서 부모노드가 새로추가된 값보다 작을때까지 while문 실행.
      this._swap(parentIndex, currentIndex); // 임시값으로 부모노드 값 가져온다.
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  pop() {
    if (this.isEmpty()) return; // 예외 로직
    if (this.heap.length === 2) return this.heap.pop(); // 루트 정점만 남은 경우
    const returnValue = this.heap[1]; // root노드 가져오기.
    this.heap[1] = this.heap.pop(); // 맨마지막 노드를 pop하고 rootnode로 삽입.

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      // 현재 부모노드가 자기 자식노드(왼쪽노드, 오른쪽노드) 둘중 하나의 값보다 작을때 까지 while문 실행
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        // 오른쪽이 왼쪽보다 클때 부모노드와 오른쪽노드와 스왑.
        [this.heap[currentIndex], this.heap[rightIndex]] = [
          this.heap[rightIndex],
          this.heap[currentIndex],
        ];
        currentIndex = rightIndex;
      } else {
        [this.heap[currentIndex], this.heap[leftIndex]] = [
          this.heap[leftIndex],
          this.heap[currentIndex],
        ];
        currentIndex = leftIndex;
      }
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }
    return returnValue;
  }

  _swap(a, b) {
    // 배열의 요소를 swap하는 함수 작성
    [this.heap[a], this.heap[b]] = [this.heap[b], this.heap[a]];
  }
  isEmpty() {
    return this.heap.length === 1;
  }
}
const heap = new MaxHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap); //[ null, 63, 54, 45, 27, 36 ]

const array = [];
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
console.log(array); //[ 63, 54, 45, 36, 27 ]
