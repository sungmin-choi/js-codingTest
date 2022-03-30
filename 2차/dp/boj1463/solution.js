// 백준용
//const filePath = require('fs').readFileSync('/dev/stdin', 'utf8');
const filePath = require('fs').readFileSync(__dirname + '/input.txt', 'utf8');
let input = filePath.trim().split('\n');
//input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
input = Number(input[0]);

const memo = Array(input + 1).fill(Number.MAX_SAFE_INTEGER);
memo[1] = 0;

for (let i = 2; i <= input; i++) {
  if (i % 3 === 0) {
    if (memo[i] > memo[i / 3] + 1) memo[i] = memo[i / 3] + 1;
  }
  if (i % 2 === 0) {
    if (memo[i] > memo[i / 2] + 1) memo[i] = memo[i / 2] + 1;
  }
  if (memo[i] > memo[i - 1] + 1) memo[i] = memo[i - 1] + 1;
}

console.log(memo[input]);
