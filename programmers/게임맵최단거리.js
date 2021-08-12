
let maps=[[1,1,1,1,1],
          [0,0,0,0,1],
          [1,1,1,1,1],
          [1,1,1,1,1],
          [1,1,1,1,1]];	
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
    isempty(){
        return this.array.length===0;
    }
}
let dx=[0,0,1,-1];
let dy=[-1,1,0,0];
function check_range(x,y){
    if(x>=0 && x<n && y>=0 && y<m) return true;
    else return false;

}

function bfs(maps){
    let v_maps=[];
    let n=maps.length;
    let m=maps[0].length;
    for(let i=0;i<n;i++) {
        let array=Array.from({length:m},()=>0);
        v_maps.push(array);
    }
    let q=new Queue();
    q.enqueue([0,0]);
    v_maps[0][0]=1;
    while(!q.isempty()){
        let pos=q.dequeue();
        let x=pos[0];
        let y=pos[1];
        for(let i=0;i<4;i++){
            let nx=x+dx[i];
            let ny=y+dy[i];
            if(check_range(nx,ny)){
                if(maps[nx][ny]===1 &&v_maps[nx][ny]===0){
                    v_maps[nx][ny]=v_maps[x][y]+1;
                    q.enqueue([nx,ny]);
                }
            }
        }
    }
    console.log(v_maps);
    if(v_maps[n-1][m-1]===0) return -1;
    else return v_maps[n-1][m-1];

}

function solution(maps) {
    var answer = 0;
    answer=bfs(maps);
    console.log(answer);
    return answer;
}
solution(maps);