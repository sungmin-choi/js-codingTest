//순열
/*
1.입력받은 arr을 forEach로 순회하며 처음에 뽑을 fixer를 선택한다.
2.fixer를 제외한 남은 애들을 갖고 새로운 restArr을 만든다.
3.permutationArr에는 restArr로 selectNum-1의 순열이 들어있다.
4.combineFixer에 fixer와 permutationArr과 합친 순열을 만든다.
5.result에 넣는다.
끝의 수까지 반복한다. 



이 규칙만 이해한다면 조합과 중복 순열은 손쉽게 생각할 수 있을 것이다.

조합은 선택했던 모든 것들은 다시는 선택하면 안되기 때문에 restArr이 fixer의 뒤에 값이면 된다.
중복 순열은 현재 fixer까지 다시 선택할 수 있기 때문에 restArr이 기본 arr이면된다. (기본 arr은 forEach구문의 3번째 인자를 활용하면 된다.)*/
function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((ele) => [ele]);
  arr.forEach((ele, index, arr) => {
    const fixer = ele;
    const restArr = arr.filter((_, idx) => idx !== index);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combinFixer = permuationArr.map((ele) => [fixer, ...ele]);
    result.push(...combinFixer);
  });
  return result;
}

//조합

function combination(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((ele) => [ele]);
  arr.forEach((ele, index, arr) => {
    const fixer = ele;
    const restArr = arr.slice(index + 1);
    const combinationArr = combination(restArr, selectNum - 1);
    const combinFixer = combinationArr.map((ele) => [fixer, ...ele]);
    result.push(...combinFixer);
  });
  return result;
}

//중복순열

function permutation2(arr, selectNum) {
  const result = [];
  if (selectNum === 1) return arr.map((v) => [v]);
  arr.forEach((v, idx, arr) => {
    const fixed = v;
    const restArr = arr;
    const permutationArr = permutation(restArr, selectNum - 1);
    const combineFix = permutationArr.map((v) => [fixed, ...v]);
    result.push(...combineFix);
  });
  return result;
}

console.log(permutation([1, 2, 3], 3));
