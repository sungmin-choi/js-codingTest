let v=[[1, 1], [2, 2], [1, 2]];
function solution(v) {
    let answer = [];
    let x=new Set();
    let y=new Set();
    for(let i=0;i<3;i++){
        if(x.has(v[i][0])){
            x.delete(v[i][0]);
        }else{
            x.add(v[i][0]);
        }
        if(y.has(v[i][1])){
            y.delete(v[i][1]);
        }else{
            y.add(v[i][1]);
        }
    }
    answer=[...x,...y];
    return answer;
}

console.log(solution(v));