function permutation(arr, selectNum){
    let result =[];
    if(selectNum===1) return arr.map((ele)=>[ele]);
    arr.forEach((ele,index,arr)=>{
        const fixer = ele;
        const restArr = arr.filter((_,idx)=>idx!==index);
        const permuationArr = permutation(restArr,selectNum-1);
        const combinFixer = permuationArr.map(ele=>[fixer,...ele]);
        result.push(...combinFixer);
    });
    return result;
}
function bfs(x,y,edges,n){
    const q =[];
    const visited = Array(n+1).fill(0);
    const countEdges = Array(n+1).fill(0);
    edges.forEach((edge)=>{
        const [cx,cy] = edge;
        if(cx===x){
            q.push([cx,cy]);
        }else if(cy===x){
            q.push([cy,cx]);
        }
    })
    while(q.length>0){
        const [cx,cy] = q.shift();
        visited[cx] = true;
        if(cy === y){
            return countEdges[cx]+1;
        }
        edges.forEach((edge)=>{
            const [nx,ny] = edge;
            if(nx===cy && visited[]){
                q.push([cx,cy]);
            }else if(ny===cy){
                q.push([cy,cx]);
            }
        })

    }
}

function solution(n, edges) {
    let answer = 0;
    let nodeArr = [];
    for(let i=0;i<n;i++){
        nodeArr.push(i);
    }
    const permuEdges = permutation(nodeArr,3);

    return answer;
}