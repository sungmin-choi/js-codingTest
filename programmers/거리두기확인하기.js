let places=[["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], 
["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"],
 ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]];

let dx=[0,1,0,-1];
let dy=[1,0,-1,0];
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

function check_range(x,y){
    if(x>=0 && x<5 && y>=0 && y<5) return true;
    else return false;
}

function check_safe(place,x,y){

    let q=new Queue();
    let copy_place=JSON.parse(JSON.stringify(place));
    copy_place[x][y]='C';
    for(let i=0;i<4;i++){
        let nx=x+dx[i];
        let ny=y+dy[i];
        if(check_range(nx,ny)){
            if(copy_place[nx][ny]==='O'){
                let pos=[nx,ny];
                q.enqueue(pos);
                copy_place[nx][ny]='C';
            }else if(copy_place[nx][ny]==='P') return  false;
        }
    }
    while(!q.isempty()){
        let pos=q.dequeue();
        x=pos[0];
        y=pos[1];
        for(let i=0;i<4;i++){
            let nx=x+dx[i];
            let ny=y+dy[i];
            if(check_range(nx,ny)){
                if(copy_place[nx][ny]==='P') return  false;
            }
        }

    }
    return true;
}

function solution(places) {
    var answer = [];
    for(let place of places){
        for(let i=0;i<5;i++){
            place[i]=place[i]+'';
            place[i]=place[i].split(''); 
        }
        let flag=1;
        for(let i=0;i<5;i++){
            for(let j=0;j<5;j++){
                if(place[i][j]==='P') {
                    if(!check_safe(place,i,j)) flag=0;
                }
            }
        }
        answer.push(flag);
    }
    console.log(answer);
    return answer;
}

solution(places);