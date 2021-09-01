const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/js코딩테스트/이코테/DFSBFS/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
let [N,M] = input[0];
N=+N;
M=+M;
input.shift();
input=input.map(ele=>ele.split(' ').map(e=>+e));

function getZeroPoint(N,M,input){
    let zeroPoint=[];
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            if(input[i][j]===0) zeroPoint.push([i,j])
        }
    }
    return zeroPoint;
}
function combination(arr,num){
    let result=[];
    if(num===1) return arr.map((ele)=>[ele]);
    arr.forEach((ele,idx,arr) => {
        const fixed = ele;
        const restArr = arr.slice(idx+1);
        const combinArr = combination(restArr,num-1);
        const fixedArr = combinArr.map((ele)=>[fixed,...ele]);
        result.push(...fixedArr)
    });
    return result;
}
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

function getBlockInput(input,posArr){
    let inputCopy=JSON.parse(JSON.stringify(input));
    for(let i=0;i<3;i++){
        inputCopy[posArr[i][0]][posArr[i][1]]=1;
    }
    return inputCopy;
}
const dx=[0,0,1,-1];
const dy=[1,-1,0,0];
function checkRange(x,y){
    if(x>=0&&x<N && y>=0&&y<M) return true;
    else return false;
}
function bfs(i,j){
    let q=new Queue();
    q.enqueue([i,j]);
    while(!q.isEmpty()){
        let [x,y]=q.dequeue();
        for(let i=0;i<4;i++){
            let nx=x+dx[i];
            let ny=y+dy[i];
            if(checkRange(nx,ny)){
                if(blockInput[nx][ny]===0 || blockInput[nx][ny]===2){
                    q.enqueue([nx,ny]);
                    blockInput[ny][nx]=2;
                }
            }

        }
    }
}

function solution(N,M,input){
    let zeroPoint=getZeroPoint(N,M,input);
    let combiZeroPoint = combination(zeroPoint,3);
    for(let i=0;i<combiZeroPoint.length;i++){
        let posArr = combiZeroPoint[i];
        let blockInput = getBlockInput(input,posArr);
        for(let j=0;j<N;j++){
            for(let k=0;k<M;k++){
                if(blockInput[j][k]===2){
                    bfs(i,j);
                }
            }
        }

        //내일 여기다가
        

    }
}