// 아래 코드는 수정하지 마세요.
function swap(idx1, idx2, arr) {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  }
  
  function getParentIdx(idx) {
    return Math.floor((idx-1)/2);
  }
  
  function insert(heap, item) {
    heap.push(item);
    let parentIdx = getParentIdx(heap.length-1);
    let curIdx = heap.length-1;
    while(parentIdx>=0 && heap[parentIdx]>heap[curIdx]){
        swap(curIdx,parentIdx,heap);
        curIdx = parentIdx;
        parentIdx = getParentIdx(curIdx);
    }
    return heap;
  }
  
  function removeRoot(heap) {
    // TODO: 여기에 코드를 작성합니다.
    return heap.shift();

  }
  
