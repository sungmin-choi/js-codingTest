function pepoleContains(office, x, y, k) {
  let num = 0;
  for (let i = x; i < x + k; i++) {
    for (let j = y; j < y + k; j++) {
      if (office[i][j] === 1) num++;
    }
  }
  return num;
}

function solution(office, k) {
  let answer = 0;
  const N = office.length;

  for (let i = 0; i <= N - k; i++) {
    for (let j = 0; j <= N - k; j++) {
      const number = pepoleContains(office, i, j, k);
      answer = answer < number ? number : answer;
    }
  }
  return answer;
}

const office = [
  [1, 0, 0],
  [0, 0, 1],
  [1, 0, 0],
];
const k = 2;

console.log(solution(office, k));
