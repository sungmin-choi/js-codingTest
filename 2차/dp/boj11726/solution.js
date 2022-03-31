// 백준용
//const filePath = require('fs').readFileSync('/dev/stdin', 'utf8');

const filePath = require('fs').readFileSync(__dirname + '/input.txt', 'utf8');
let input = filePath.trim().split('\n');
//input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
input = Number(input[0]);

const memo = [0, 1, 2, 3];
for (let i = 4; i <= input; i++) {
  memo.push((memo[i - 1] % 10007) + (memo[i - 2] % 10007));
}
console.log(memo[input] % 10007);
