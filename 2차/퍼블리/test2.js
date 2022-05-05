const binarySearch = function (arr, target, start, end) {
  if (start > end) return -1;
  const pivot = parseInt((start + end) / 2);
  if (arr[pivot] === target) return pivot;
  if (target > arr[pivot]) return binarySearch(arr, target, pivot + 1, end);
  else if (target < arr[pivot])
    return binarySearch(arr, target, start, pivot - 1);
};

function solution(price) {
  let answer = [];
  for (let i = 0; i < price.length; i++) {
    let result = -1;
    const curPrice = price[i];
    for (let j = i + 1; j < price.length; j++) {
      if (price[j] > curPrice) {
        result = j - i;
        break;
      }
    }
    answer.push(result);
  }
  return answer;
}

console.log(solution([13, 7, 3, 7, 5, 16, 12]));
