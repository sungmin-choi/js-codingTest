
//const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/js코딩테스트/이코테/그리디/input.txt', "utf8");
const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
input = input[0];

function solution(input){
    let zero=0;
    let one=0;
    for(let i=0;i<input.length;i++){
        if(input[i]==='1'){
            while(input[i]==='1') i++;
            zero++;
        }
    }
    for(let i=0;i<input.length;i++){
        if(input[i]==='0'){
            while(input[i]==='0') i++;
            one++;
        }
    }
    let answer = zero<one?zero:one;
    console.log(answer);
}

solution(input);