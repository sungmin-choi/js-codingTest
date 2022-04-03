// 백준용
//const filePath = require('fs').readFileSync('/dev/stdin', 'utf8');

// const filePath = require('fs').readFileSync(__dirname + '/input.txt', 'utf8');
// let input = filePath.trim().split('\n');
// input = input.map((ele) => ele.replace(/(\r\n|\n|\r)/gm, ''));
// const N = Number(input.shift());
// input = input.map((ele) => Number(ele));
// const memo = [input[0]];
// if (N > 3) {
//   memo[1] = input[0] + input[1];
//   memo[2] = Math.max(input[0], input[1]) + input[2];
// }
// for (let i = 3; i < N; i++) {
//   const dp1 = memo[i - 3] + input[i - 1] + input[i];
//   const dp2 = memo[i - 2] + input[i];
//   memo[i] = Math.max(dp1, dp2,memo[i-1]);
// }

// console.log(Math.max(...memo));

const solve = (n, wine) => {
  if (n === 1) return wine[0];
  else if (n === 2) return wine[0] + wine[1];
  const dp = new Array(n).fill(0);
  dp[1] = wine[0];
  dp[2] = wine[0] + wine[1];
  for (let i = 3; i <= n; i++) {
    dp[i] = Math.max(
      dp[i - 3] + wine[i - 2] + wine[i - 1],
      dp[i - 2] + wine[i - 1],
      dp[i - 1]
    );
  }
  return dp[n];
};

// const [n, ...wine] = require('fs')
//   .readFileSync('/dev/stdin')
//   .toString()
//   .trim()
//   .split('\n')
//   .map((v) => +v);
console.log(solve(6, [100, 100, 1, 1, 100, 100]));
