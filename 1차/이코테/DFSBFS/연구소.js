const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/js코딩테스트/이코테/DFSBFS/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));
let [N,M] = input[0].split(' ');
N=+N;
M=+M;
input.shift();

input=input.map(ele=>ele.split(' ').map(e=>+e));
function getZeroPoint(N,M,input){
    let result=[];
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            if(input[i][j]===0) result.push([i,j]);
        }
    }
    return result;
}

function combination(arr,num){
    let result=[];
    if(num===1)return arr.map(ele=>[ele]);
    arr.forEach((ele,idx,arr) => {
        const fixed =ele;
        const restArr = arr.slice(idx+1);
        const combinationArr = combination(restArr,num-1);
        const combinFixer = combinationArr.map(ele=>[fixed,...ele]);
        result.push(...combinFixer);
    });
    return result;
}


function dfs(x,y,checked,graph){
    if(x>=N || x<0 || y<0 || y>=M ) return false;
    if(checked[x][y]===1) return false;
    if(graph[x][y]===0 || graph[x][y]===2){
        graph[x][y]=2;
        checked[x][y]=1;
        dfs(x-1,y,checked,graph);
        dfs(x,y-1,checked,graph);
        dfs(x+1,y,checked,graph);
        dfs(x,y+1,checked,graph);
        return true;
    }
    return false;
}

function getSafeNum(N,M,graph){
    let result=0;
    for(let i=0;i<N;i++){
        for(let j=0;j<M;j++){
            if(graph[i][j]===0) result++;
        }
    }
    return result;
}
function solution(N,M,input){
    let result=0;
    let arr=getZeroPoint(N,M,input);
    let combiArr=combination(arr,3);
    let map=[];
    for(let i=0;i<combiArr.length;i++){
        let graph = JSON.parse(JSON.stringify(input));
        let checked = Array.from({length:N},()=>[]);
        checked= checked.map((ele)=>Array.from({length:M},()=>0));
        combiArr[i].map(ele=>graph[ele[0]][ele[1]]=1);
        combiArr[i].map(ele=>checked[ele[0]][ele[1]]=1);
        for(let j=0;i<N;i++){
            for(let k=0;j<M;j++){
                if(graph[j][k]===2 && checked[j][k]===0) dfs(j,k,checked,graph);
            }
        }
        let num = getSafeNum(N,M,graph);
        if(result<num){
            result=num;
            map=graph;
            console.log(result,map);
        }

    }

    
}

solution(N,M,input);