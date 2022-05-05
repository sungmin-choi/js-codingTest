const binarySearch = function (arr, target, start, end) {
  if (start > end) return -1;
  const pivot = parseInt((start + end) / 2);
  if (arr[pivot] === target) return pivot;
  if (target > arr[pivot]) return binarySearch(arr, target, pivot + 1, end);
  else if (target < arr[pivot])
    return binarySearch(arr, target, start, pivot - 1);
};

let output = binarySearch([0, 1, 2, 3, 4, 5, 6], 100, 0, 6);
console.log(output); // --> 2
