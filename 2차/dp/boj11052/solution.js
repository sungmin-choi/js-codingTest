// 백준용
//const filePath = require('fs').readFileSync('/dev/stdin', 'utf8');

const filePath = require('fs').readFileSync(__dirname + '/input.txt', 'utf8');
let input = filePath.trim().split('\n');
input = input.map((ele) => ele.replace(/(\r\n|\n|\r)/gm, ''));
const N = Number(input.shift());
input = input[0].split(' ').map((ele) => Number(ele));
const memo = Array(N + 1).fill(0);
memo[1] = input[0];

for (let i = 2; i <= N; i++) {
  const arr = [];
  for (let j = 1; j <= i; j++) {
    arr.push(memo[i - j] + input[j - 1]);
  }
  memo[i] = Math.max(...arr);
}
console.log(memo[N]);
