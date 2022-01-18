// 백준용
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");

const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/js코딩테스트/boj1789수들의합/input.txt', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
let N = +input;

function solution(N){
    let answer=0;
    let temp =1;
    while(1){
        if(N>=0){
        N -=temp;
        answer ++;
        temp ++;
        }
        else break;
    }
    console.log(answer-1);
}

solution(N);


