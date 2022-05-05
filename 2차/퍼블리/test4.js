function combination(arr, selectNum, n) {
  let result = [];
  if (selectNum === 1) return arr.map((ele) => [ele]);
  arr.forEach((ele, index, arr) => {
    const fixer = ele;

    if (index + n - 1 < arr.length) {
      const restArr = arr.slice(index + n - 1);
      const combinationArr = combination(restArr, selectNum - 1, n - 1);
      combinFixer = combinationArr.map((ele) => [fixer, ...ele]);
      result.push(...combinFixer);
    }
  });
  return result;
}

function isCorrect(combinEle) {
  const rowArr = combinEle.map((e) => e[1]);
  const colArr = combinEle.map((e) => e[0]);

  for (ele of combinEle) {
    let rowCount = 0;
    let colCount = 0;
    const [x, y] = ele;
    for (let i = 0; i < colArr.length; i++) {
      if (colArr[i] === x && colCount === 0) colCount++;
      else if (colArr[i] === x && colCount === 1) return false;
    }
    for (let i = 0; i < rowArr.length; i++) {
      if (rowArr[i] === y && rowCount === 0) rowCount++;
      else if (rowArr[i] === y && rowCount === 1) return false;
    }
  }
  return true;
}

function solution(n, k) {
  let count = 0;
  const mapPos = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      mapPos.push([i, j]);
    }
  }
  const combinArr = combination(mapPos, k, n);
  combinArr.map((combinEle) => {
    if (isCorrect(combinEle)) {
      count++;
    }
  });
  return count % 10007;
}

console.log(solution(3, 2));
