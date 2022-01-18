const fs = require('fs');
const filePath = process.platform ==='linux' ? '/dev/stdin' : 'C:/Users/USER/Desktop/js코딩테스트/boj10819/input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

let N = input[0];
let graph =[];
for(let i=1;i<=N;i++){
    graph[i-1] = input[i].trim().split("").map((Element)=>+Element);
}
dx=[0,1,0,-1];
dy=[1,0,-1,0];
let numArray=[];

function solution(graph,N){
    let num =2;
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(graph[i][j] === 1){
                numArray[num-2]=0;
                dfs(graph,i,j,num);
                num++;
            }
        }
    }
    console.log(num-2);
    numArray.forEach((Element)=>console.log(Element));
}
function range_check(x,y){
    if(x>=0 && x<N && y>=0 && y<N)return true;
    else return false;
}
function dfs(graph,x,y,num){
    graph[x][y] = num;
    numArray[num-2]++;
    for(let i=0;i<4;i++){
        let kx = x+dx[i];
        let ky = y+dy[i];
        if(range_check(kx,ky)){
            if(graph[kx][ky]===1)dfs(graph,kx,ky,num);

        }
    }
}

solution(graph,N);
