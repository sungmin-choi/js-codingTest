
//const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/js코딩테스트/이코테/구현/input.txt', "utf8");
const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
let [N,M] =input[0].split(' ');
M=+M;
N=+N;
input.shift();
let graph = [];
input.forEach((ele)=>{
    graph.push(ele.split(' ').map(ele=>+ele));
});

function getPosition(graph,N){
    let chikenPos=[];
    let homePos=[];
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(graph[i][j]===2){
                chikenPos.push([i,j]);
            }else if(graph[i][j]===1){
                homePos.push([i,j]);
            }
        }
    }
    return [chikenPos,homePos];
}

//조합
function combination(arr,num){
    let result=[];
    if(num===1) return arr.map((ele)=>[ele]);
    arr.forEach((ele,idx,arr)=>{
        const fixed = ele;
        const restArr = arr.slice(idx+1);
        const combinationArr  = combination(restArr,num-1);
        const combinFixer = combinationArr.map((ele)=>[fixed,...ele])  
        result.push(...combinFixer);
    });
    return result;
}
function solution(graph,N,M){
    let answer =9999;
    let [chikenPos,homePos] = getPosition(graph,N);
    let combiChikenPos=[];
    //if(M===1) chikenPos.map((ele)=>console.log(ele));
    combiChikenPos = combination(chikenPos,M);
    combiChikenPos.forEach((chiken)=>{
        let totalDis=0;
        homePos.forEach((home)=>{
            let short=9999;
            for(let i=0;i<chiken.length;i++){
                let distance =Math.abs(chiken[i][0]-home[0])+ Math.abs(chiken[i][1]-home[1]);
                short = short>distance?distance:short;
            }
            totalDis +=short;
        })
        answer = answer>totalDis?totalDis:answer;
    })

    return answer;

}

console.log(solution(graph,N,M));