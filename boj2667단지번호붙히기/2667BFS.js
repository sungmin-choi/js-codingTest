const fs = require('fs');
const filePath = process.platform ==='linux' ? '/dev/stdin' : 'C:/Users/USER/Desktop/js코딩테스트/boj2667/input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

let N = input[0];
let graph =[];
for(let i=1;i<=N;i++){
    graph[i-1] = input[i].trim().split("").map((Element)=>+Element);
}
dx=[0,1,0,-1];
dy=[1,0,-1,0];
let numArray=[];

class Queue{
   constructor(){
       this.array=[];
   }
   enqueue(data){
       this.array.push(data);
   }
   dequeue(){
       return this.array.shift();
   }

}


function solution(graph,N){
    let num=2;
    for(let i=0;i<N;i++){
        for(let j=0;j<N;j++){
            if(graph[i][j]===1){
                numArray[num-2]=0;
                bfs(graph,num,i,j);
                num++;
            }
        }
    }
    console.log(num-2);
    numArray.forEach((Element)=>console.log(Element));
}

function bfs(graph,num,x,y){
    graph[x][y]=num;
    numArray[num-2]++;
    let position =[x,y];
    let q=new Queue();
    q.enqueue(position);
    while(q){
        let pos=q.dequeue();
        if(!pos) break; // 고민해봐야할 문제
        x=pos[0];
        y=pos[1];
        for(let i=0;i<4;i++){
            let kx=x+dx[i];
            let ky=y+dy[i];
            if(range_check(kx,ky)){
                if(graph[kx][ky] === 1){
                    position = [kx,ky];
                    graph[kx][ky]=num;
                    numArray[num-2]++;
                    q.enqueue(position);
                }
            }
        }
    }


}
function range_check(x,y){
    if(x>=0 && x<N && y>=0 && y<N)return true;
    else return false;
}

solution(graph,N);