//const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
//const fs = require('fs');
//const filePath = process.platform ==='linux' ? '/dev/stdin' : 'C:/Users/USER/Desktop/js코딩테스트/boj2468/input.txt';

// 백준용
const filePath = require("fs").readFileSync('/dev/stdin', "utf8");

//const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/js코딩테스트/boj2468/input.txt', "utf8");
let input = filePath.trim().split("\n");
//let input = fs.readFileSync(filePath).toString().split('\n');


let N= Number(input[0]);
input.shift();
let graph =[];
let max=0;
let min=100;
for(let i=0;i<N;i++){
    graph[i] =input[i].trim().split(' ').map((Element)=>Number(Element));
    //console.log(typeof graph[i][1]);
    //console.log(graph[i]);
    //console.log(Math.max(graph[i]));
    if(max<Math.max.apply(Math,graph[i])) max = Math.max.apply(Math,graph[i]);//  그냥 Math.max(graph[i]) 로 실행하면 반환이 NaN 으로 반환됨.
    if(min>Math.min.apply(Math,graph[i])) min = Math.min.apply(Math,graph[i]);
}


dx=[0,1,0,-1];
dy=[1,0,-1,0];
let visitedMap =[]
function visitedMapInit(){
    for(let i=0;i<N;i++){
        visitedMap[i] = Array.from({length:N},()=>0);
    }
}

function range_check(x,y){
    if(x>=0 && x<N && y>=0 && y<N) return true;
    else return false;
}
function dfs(graph,visitedMap,x,y,num){
    visitedMap[x][y] = 1;
    for(let i=0;i<4;i++){
        let kx = x+dx[i];
        let ky = y+dy[i];
        if(range_check(kx,ky)){
            if(graph[kx][ky]>num && visitedMap[kx][ky] === 0){
                dfs(graph,visitedMap,kx,ky,num);
            }
        }
    }
}
function solution(graph,N){
    let answer=0;
    let count =0;
    for(let i=min;i<max;i++){
        visitedMapInit();
        count =0;
        for(let j=0;j<N;j++){
            for(let k=0;k<N;k++){
                if(graph[j][k]>i && visitedMap[j][k] === 0){
                    dfs(graph,visitedMap,j,k,i);
                    count++;
                }
            }
        }
        if(answer<count) answer = count;
    }
    console.log(answer);
}

visitedMapInit();
solution(graph,N);