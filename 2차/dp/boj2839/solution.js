// 백준용
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");

const filePath = require('fs').readFileSync(__dirname + '/input.txt', 'utf8');
let input = filePath.trim().split('\n');
//input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
input = Number(input[0]);

const memo = Array(input + 1).fill(-1);
memo[3] = 1;
memo[5] = 1;

function solution(N) {
  for (let i = 3; i <= N; i++) {
    let curNum = memo[i];
    if (i - 5 >= 0) {
      if (memo[i - 5] !== -1) curNum = memo[i - 5] + 1;
    }
    if (i - 3 >= 0) {
      if (memo[i - 3] !== -1) {
        if (curNum > 0) {
          curNum = curNum > memo[i - 3] + 1 ? memo[i - 3] + 1 : curNum;
        } else {
          curNum = memo[i - 3] + 1;
        }
      }
    }
    memo[i] = curNum;
  }
}

solution(input);

console.log(memo[input]);
