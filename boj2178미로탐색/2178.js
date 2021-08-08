const fs = require('fs');
const filePath = process.platform ==='linux' ? '/dev/stdin' : 'C:/Users/USER/Desktop/js코딩테스트/boj2178/input.txt';

let input = fs.readFileSync(filePath).toString().split('\n');

let arr = input[0].split(" ").map((element)=> +element);
input.shift();
let N=arr[0];
let M=arr[1];
let graph=[];
for(let i=0;i<N;i++){
    graph[i] = input[i].trim().split('').map((element)=>+element);
    
}
dx=[0,1,0,-1];
dy=[1,0,-1,0];

class Queue{
    constructor(){
        this.array=[]
    }
    enqueue(data){
        this.array.push(data);
    }
    dequeue(){
        return this.array.shift();
    }
}
function range_check(x,y){
    if(x>=0 && x<N && y>=0 &&y<=M) return true;
    else return false;
}

function bfs(graph){
    let q=new Queue();
    let position =[0,0];
    graph[0][0]+=1;
    q.enqueue(position);
    while(q){
        position=q.dequeue();
        if(!position) break;
        x=position[0];
        y=position[1];
        for(let i=0;i<4;i++){
            let kx=x+dx[i];
            let ky=y+dy[i];
            if(range_check(kx,ky)){
                if(graph[kx][ky] === 1){
                    graph[kx][ky] = graph[x][y]+1;
                    position = [kx,ky];
                    q.enqueue(position);
                }
            }
        }

    }



}
function solution(graph){
    bfs(graph);
    console.log(graph[N-1][M-1]-1);
}

solution(graph);