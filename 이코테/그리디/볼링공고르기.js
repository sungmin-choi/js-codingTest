const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/js코딩테스트/이코테/그리디/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

let [N,M]=input[0].split(' ');
input = input[1].split(' ').map(ele=>+ele);

function solution(N,M,input){
    let answer=0;
    for(let i=0;i<N-1;i++){
        for(let j=i+1;j<N;j++){
            if(input[i]!==input[j]) answer++;
        }
    }
    return answer;
}

console.log(solution(N,M,input));