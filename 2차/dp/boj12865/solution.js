// 백준용
//const filePath = require('fs').readFileSync('/dev/stdin', 'utf8');

const filePath = require('fs').readFileSync(__dirname + '/input.txt', 'utf8');
let input = filePath.trim().split('\n');
input = input.map((ele) => ele.replace(/(\r\n|\n|\r)/gm, ''));
const [N, K] = input.shift().split(' ').map(Number);
input = input.map((v) => v.split(' ').map(Number));

let memo = new Array(N + 1).fill(null).map((_) => new Array(K + 1).fill(0));

console.log(memo);
for (let i = 1; i <= N; i++) {
  for (let j = 1; j <= K; j++) {}
}
