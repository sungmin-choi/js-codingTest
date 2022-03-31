function combination(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((ele) => [ele]);
  arr.forEach((ele, index, arr) => {
    const fixer = ele;
    const restArr = arr.filter((_, idx) => idx !== index);
    const combinationArr = combination(restArr, selectNum - 1);
    const combinFixer = combinationArr.map((ele) => [fixer, ...ele]);
    result.push(...combinFixer);
  });
  return result;
}

function test2(n, m) {
  // TODO: 여기에 코드를 작성하세요.
  const arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  let result = combination(arr, m);
  result = result.map((ele) => Number(ele.join('')));
  return result;
}

test2(10, 1);

//console.log([1, 3, 4].join(''));
