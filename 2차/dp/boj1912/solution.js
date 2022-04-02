// 백준용
//const filePath = require('fs').readFileSync('/dev/stdin', 'utf8');

const filePath = require('fs').readFileSync(__dirname + '/input.txt', 'utf8');
let input = filePath.trim().split('\n');
input = input.map((ele) => ele.replace(/(\r\n|\n|\r)/gm, ''));
const N = Number(input.shift());
input = input[0].split(' ').map((ele) => Number(ele));
const memo = [];
for (let i = 0; i < N; i++) {
  memo.push(input[i]);
}
for (let i = 1; i < N; i++) {
  if (input[i] <= memo[i - 1] + input[i]) {
    memo[i] = memo[i - 1] + input[i];
  }
}
console.log(Math.max(...memo));
