

const filePath = require("fs").readFileSync('C:/Users/USER/Desktop/js코딩테스트/이코테/DFSBFS/input.txt', "utf8");
//const filePath = require("fs").readFileSync('/dev/stdin', "utf8");
let input = filePath.trim().split("\n");
input = input.map((ele)=>ele.replace(/(\r\n|\n|\r)/gm, ""));

input = input.map((ele)=>{
    return ele.split(' ').map((ele)=>+ele);
})
const [N,K] = input.shift();
const [S,X,Y]= input[input.length-1];
input=input.slice(0,input.length-1);


function dfs(input,x,y,visited,num){
    if(x>=N || x<0 || y>=N || y<0) return false;
    if(input[x][y]===num && !visited[x][y]){
        visited[x][y]=true;
        dfs(input,x-1,y,visited,num);
        dfs(input,x+1,y,visited,num);
        dfs(input,x,y-1,visited,num);
        dfs(input,x,y+1,visited,num);
        return true;
    }
    if(input[x][y]===0){
        input[x][y]=num;
        visited[x][y]=true;
        return true;
    }
}

function solution(input,N,K,S,X,Y){
    let solution =0;
    for(let i=0;i<S;i++){
        let num=0;
        for(let j=1;j<=K;j++){
            num++;
            let visited = Array.from({length:N},()=>[]);
            visited=visited.map((ele)=>Array.from({length:N},()=>false));
            for(let x=0;x<N;x++){
                let flag=false;
                for(let y=0;y<N;y++){
                    if(input[x][y]===num){
                        dfs(input,x,y,visited,num);
                        flag = true;
                    }
                    if(flag) break;
                }
                if(flag) break;
            }
        }

        
    }
    solution=input[X-1][Y-1];
    console.log(solution);
    
}

solution(input,N,K,S,X,Y);
