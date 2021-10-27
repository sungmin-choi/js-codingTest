const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/코테협업js/JS-ThinkStack/sungmin/4주차/boj16918/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

const [R,C,N] = input[0].split(" ").map(e=>+e);
input.shift();
input = input.map(ele=>ele.split(""));
console.log(input);