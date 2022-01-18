
let rows=3;
let colums=3;
let queries=[[1,1,2,2],[1,2,2,3],[2,1,3,2],[2,2,3,3]];
function solution(rows, columns, queries) {
    var answer = [];
    let graph=[];
    for(let i=0;i<rows;i++){
        let list=[];
        for(let j=0;j<columns;j++) {
            list.push(i*columns+j+1);
        }
        graph.push(list);
    }
    let copy=JSON.parse(JSON.stringify(graph));
    for(let item of queries){
    let test=item;
    let x1=test[0]-1;
    let y1=test[1]-1;
    let x2=test[2]-1;
    let y2=test[3]-1;
    for(let i=y1;i<y2;i++) copy[x1][i+1]=graph[x1][i];
    for(let i=x1;i<x2;i++) copy[i+1][y2]=graph[i][y2];
    for(let i=y2;i>y1;i--) copy[x2][i-1]=graph[x2][i];
    for(let i=x2;i>x1;i--) copy[i-1][y1]=graph[i][y1];
    let min=10000;
    for(let i=y1;i<=y2;i++) min=min>copy[x1][i] ?copy[x1][i]:min;
    for(let i=x1;i<=x2;i++) min=min>copy[i][y2] ?copy[i][y2]:min;
    for(let i=y2;i>=y1;i--)  min=min>copy[x2][i] ?copy[x2][i]:min;
    for(let i=x2;i>=x1;i--) min=min>copy[i][y1] ?copy[i][y1]:min;
    answer.push(min);
    graph=JSON.parse(JSON.stringify(copy));
    }
    return answer;
}

solution(rows,colums,queries);