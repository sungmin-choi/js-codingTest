function boardGame(board, operation) {
  const opObj = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };
  let count = 0;
  let [cx, cy] = [0, 0];
  const N = board.length;
  const M = board[0].length;
  const ops = operation.split('');
  ops.forEach((op) => {
    const [dx, dy] = opObj[op];
    const [nx, ny] = [cx + dx, cy + dy];
    if (nx >= 0 && nx < N && ny >= 0 && ny < M) {
      count += board[nx][ny];
      board[nx][ny] = 0;
      [cx, cy] = [nx, ny];
    }
  });
  return count;
}

const board1 = [
  [72, 0, 80, 1],
  [1, 9, 11, 10],
  [1, 1, 792, 0],
  [13, 44, 27, 0],
];
const output1 = boardGame(board1, 'RRDLLD');
console.log(output1); // 102

const board2 = [
  [567, 6734, 132],
  [789, 243, 6],
  [89, 33333, 0],
];
const output2 = boardGame(board2, 'UUUDD');
console.log(output2); // 878

const board3 = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 0, 0, 0, 0],
];
const output3 = boardGame(board3, 'DDRRRUDUDUD');
console.log(output3); // 0
