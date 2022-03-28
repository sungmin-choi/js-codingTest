const BFS = (i,j,visited,grid,R,N) =>{
    const q = [];
    const dx = [0,1,0,-1];
    const dy = [1,0,-1,0];
    q.push([i,j]);
    visited[i][j] = 1;
    while(q.length>0){
        const [x,y] = q.shift();
        visited[x][y] = 1;
        for(let i=0;i<4;i++){
            const nx = dx[i]+x;
            const ny = dy[i]+y;
            if(nx>=0 && nx<R && ny>=0 && ny<N){
                if(visited[nx][ny]===0 && grid[nx][ny]==='1'){
                    q.push([nx,ny])
                    
                }
            }
        }
    }

}

const countIslands = function (grid) {
    const R = grid.length;
    const N = grid[0].length;
    let count =0;
    const visited =[]
    for(let i=0;i<=R;i++){
        visited.push(Array(N).fill(0));
    }
    for(let i=0;i<R;i++){
        for(let j=0;j<N;j++){
            if(grid[i][j] === '1' && visited[i][j] === 0){
                BFS(i,j,visited,grid,R,N);
                count++;
            }
        }
    }
    return count;
};


console.log(countIslands([
    ['0', '1', '1', '1'],
    ['0', '1', '1', '1'],
    ['1', '1', '0', '0'],
  ]));