//const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/js코딩테스트/이코테/DFSBFS/input.txt', "utf8");
const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

const [n,m,k,x] = input[0].split(' ');
input.shift();
input=input.map(ele=>ele.split(' ').map(e=>+e));

class Queue{
    constructor(){
        this.arr=[];
    }
    enqueue(data){
        this.arr.push(data);
    }
    dequeue(){
        return this.arr.shift();
    }
    isEmpty(){
        return this.arr.length===0?true:false;
    }
}
function solution(n,m,k,x,input){
    let result=[];
    let distance = new Array(+n+1).fill(99999);
    let visited = new Array(+n+1).fill(0);
    distance[+x]=0;
    let q=new Queue();
    input.map((ele)=>{
        if(ele[0]===+x) q.enqueue(ele);
    })
    visited[+x]=1;
    while(!q.isEmpty()){
        let node = q.dequeue();
        let nPos=node[0];
        let gPos=node[1];
        distance[gPos]=distance[gPos]>(distance[nPos]+1)?(distance[nPos]+1):distance[gPos];
        input.map((ele)=>{
            if(ele[0]===gPos && visited[gPos]===0) q.enqueue(ele);
        })
        visited[gPos] = 1;
    }

    distance.map((ele,idx)=>{if(ele===+k)result.push(idx)});
    if(result.length===0)console.log(-1);
    else{
        result.sort((a,b)=>a-b);
        result.map((ele)=>console.log(ele));
    }

}

solution(n,m,k,x,input);