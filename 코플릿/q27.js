const createMatrix = (village) => {
    const matrix = [];
    const visited =[];
    village.forEach((line) => {
      const row = [];
      visited.push(Array(line.length).fill(0));
      for (let i = 0; i < line.length; i++){
          if(line[i]==='1') row.push(9999);
          else row.push(0);
      }
      matrix.push(row);
    });
    return [matrix,visited];
  };
  
  const gossipProtocol = function (village, row, col) {
    // TODO: 여기에 코드를 작성합니다.
    const N = village.length;
    const M = village[0].length;
    const dx=[0,1,0,-1];
    const dy=[1,0,-1,0];
    const [matrix,visited] = createMatrix(village);
    let result =0;
    const q = [[row,col]];
    matrix[row][col] = 1;
    while(q.length>0){
        const [cx,cy] = q.shift();
        
        for(let i=0;i<4;i++){
            const [nx,ny] = [cx+dx[i],cy+dy[i]];
            if(nx<N && nx>=0 && ny<M && ny>=0){
                if(matrix[nx][ny]!==0 && visited[nx][ny] === 0){
                    
                    matrix[nx][ny] = matrix[cx][cy]+1;
                    visited[cx][cy] =1;
                    if(matrix[cx][cy]+1>result)result = matrix[cx][cy]+1;
                    q.push([nx,ny]);
                }
            }
        }
    }
    return result-1;
   
  };


  const village = [
    '0010000',
    '0011000',
    '0001100',
    '1011111',
    '1111011',
    '0011100',
    '0011100',
    '0001000',
  ];
  const row = 2;
  const col = 4;
  const output = gossipProtocol(village, row, col)
  console.log(output); // --> 3