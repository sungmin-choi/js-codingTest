// 백준용
//const filePath = require('fs').readFileSync('/dev/stdin', 'utf8');

const filePath = require('fs').readFileSync(__dirname + '/input.txt', 'utf8');
let input = filePath.trim().split('\n');
input = input.map((ele) => ele.replace(/(\r\n|\n|\r)/gm, ''));
const N = Number(input.shift());
input = input[0].split(' ').map((ele) => Number(ele));
const memo = Array(N).fill(1);

for (let i = 1; i < N; i++) {
  for (let j = 0; j < i; j++) {
    if (input[j] < input[i]) {
      memo[i] = memo[i] < memo[j] + 1 ? memo[j] + 1 : memo[i];
    }
  }
}

console.log(Math.max(...memo));
