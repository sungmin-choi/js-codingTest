const rotateMatrix = function (matrix,rotateNum =1) {
    // TODO: 여기에 코드를 작성합니다.
    if(matrix.length === 0) return [];
    if(matrix.length === 1) return matrix;

    let result=[];
    
    const count = rotateNum%4;
    if(count === 0) return matrix;

    let preMatrix = matrix;
    let i =0;
    while(i<count){
      const rotatedMatrix = [];
      ++i;
      const N = preMatrix.length;
      const M = preMatrix[0].length;
      for(let i=0;i<M;i++){
          rotatedMatrix.push(Array(N).fill(0));
      }
      for(let i=0; i<N ;i++){
        for(let j=0; j<M ; j++){
          const number = preMatrix[i][j];
          rotatedMatrix[j][Math.abs(i-(N-1))] = number;
      }
    }
    preMatrix = rotatedMatrix;
    }
    return preMatrix
};

const matrix = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
  ];
//   console.log(matrix[0][0]); // --> 1
//   console.log(matrix[3][2]); // --> 15
  
  const rotatedMatrix = rotateMatrix(matrix);
//   console.log(rotatedMatrix[0][0]); // --> 13
//   console.log(rotatedMatrix[3][2]); // --> 8
console.log(rotatedMatrix)