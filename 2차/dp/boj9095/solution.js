// 백준용
//const filePath = require('fs').readFileSync('/dev/stdin', 'utf8');

const filePath = require('fs').readFileSync(__dirname + '/input.txt', 'utf8');
let input = filePath.trim().split('\n');
input = input.map((ele) => ele.replace(/(\r\n|\n|\r)/gm, ''));
input.shift();
input.map((num) => {
  num = Number(num);
  const memo = Array(num + 1).fill(0);
  memo[1] = 1;
  for (let i = 2; i <= num; i++) {
    if (i === 2) memo[2] = 2;
    else if (i === 3) memo[3] = 4;
    else memo[i] = memo[i - 3] + memo[i - 2] + memo[i - 1];
  }
  console.log(memo[num]);
});
