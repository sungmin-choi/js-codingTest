// 백준용
//const filePath = require('fs').readFileSync('/dev/stdin', 'utf8');

const filePath = require('fs').readFileSync(__dirname + '/input.txt', 'utf8');
let input = filePath.trim().split('\n');
//input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
input = Number(input[0]);

const memo = Array(input + 1).fill(BigInt(0));
memo[1] = BigInt(1);
memo[2] = BigInt(1);
for (let i = 3; i <= input; i++) {
  memo[i] = memo[i - 1] + memo[i - 2];
}

console.log(memo[input].toString());
