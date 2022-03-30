const createMatrix = (village) => {
  const matrix = [];
  const homesIs2 = [];
  village.forEach((line, idx) => {
    const row = [];
    for (let i = 0; i < line.length; i++) {
      row.push(line[i]);
      if (line[i] === '2') homesIs2.push([idx, i]);
    }
    matrix.push(row);
  });
  return [matrix, homesIs2];
};

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

const BFS = (protocol, matrix) => {
  const q = [];
  const dx = [0, 1, -1, 0];
  const dy = [1, 0, 0, -1];
  for (let i = 0; i < protocol.length; i++) {
    q.push(protocol[i]);
  }
  while (q.length > 0) {}
};

const gossipProtocol2 = function (village, num) {
  const result = Number.MAX_SAFE_INTEGER;
  const [matrix, homesIs2] = createMatrix(village);
  const protocols = combination(homesIs2, num);
  for (let i = 0; i < protocols.length; i++) {
    let curMatrix = [...matrix];
    for (let j = 0; j < num; j++) {
      const [x, y] = protocols[i][j];
      curMatrix[x][y] = '3';
    }
  }
};

gossipProtocol2(
  [
    '0022', // 첫 번째 줄
    '0020',
    '0020',
    '0220',
  ],
  2
);
