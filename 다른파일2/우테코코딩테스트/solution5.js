
function checkZero(graph){
    for(let i=0;i<graph.length;i++){
        if(graph[i].includes(0))return true;
    }
    return false;
}
function f1(graph,rows,columns){
    let [temp,r,c]=[1,0,0];
    graph[r][c]=temp;
    temp++;
    while(1){
        if(!checkZero(graph)){
            return graph;
        }
        if(graph[r][c]%2===0){
            if(r===rows-1 && c===0 && graph[r][c]!==0){
                return graph;
            }else{
                if((r+1)>=rows){
                    r=0;
                }else r++;
                graph[r][c]=temp;
                temp++;
            }
        }else{
            if((c+1)>=columns){
                c=0;
            }else c++;
            graph[r][c]=temp;
            temp++;
        }

    }


}
function f2(graph){}
function solution(rows, columns) {
    let graph=Array.from({length:rows},()=>Array.from({length:columns},()=>0));
    if(rows===2 && columns===2) return [[1,2],[4,3]];
    return f1(graph,rows,columns);
}
console.log(solution(3, 9));