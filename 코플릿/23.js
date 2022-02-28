const spiralTraversal = function (matrix) {
    // TODO: 여기에 코드를 작성합니다.
    const result = [];
    const dir =[[0,1],[1,0],[0,-1],[-1,0]];
    const M = matrix.length;
    const N = matrix[0].length;
    const visitedMatrix = [];
    for(let i=0;i<M;i++){
      visitedMatrix.push(Array(N).fill(0));
    }
    let x=0;
    let y=0;
    let direction=0;
    let [a,b] = dir[direction];
    visitedMatrix[x][y] = 1;
    result.push(matrix[x][y]);
    while(1){
      if(x+a>=M || x+a<0 || y+b>=N || y+b<0 || visitedMatrix[x+a][y+b]===1){
        direction = direction===3?0:direction+1; 
        [a,b] = dir[direction];
        if(visitedMatrix[x+a][y+b] === 1){
          return result.join('');
        } 
      }
      result.push(matrix[x+a][y+b]);
      visitedMatrix[x+a][y+b] =1;
      x = x+a;
      y = y+b;
    }
  };
  