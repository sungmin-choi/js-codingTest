
//const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/js코딩테스트/이코테/그리디/input.txt', "utf8");
const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
N=input;

function solution(N){
    const trans_N = (N+'').split('');
    const middle = trans_N.length/2;
    const left = trans_N.slice(0,middle);
    const right = trans_N.slice(middle);
    let left_sum=0;
    let right_sum=0;
    left.forEach((ele)=>left_sum +=+ele);
    right.forEach((ele)=>right_sum +=+ele);
    if(left_sum===right_sum) console.log("LUCKY");
    else console.log("READY");
}

solution(N);


