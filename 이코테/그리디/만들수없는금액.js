
const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/js코딩테스트/이코테/그리디/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
N=input[0];
input = input[1].split(' ').map(ele=>+ele);

function solution(N,input){
    input=input.sort((a,b)=>a-b);
    let answer=0;
    if(input[0]!==1) return answer=1;
    else answer=2;
    for(let i=1;i<N;i++){
        if(answer>=input[i]) answer+=input[i];
        else return answer;
    }
}

console.log(solution(N,input)); 