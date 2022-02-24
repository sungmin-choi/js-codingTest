const rotateMatrix = function (matrix,rotateNum =1) {
    // TODO: 여기에 코드를 작성합니다.
    if(matrix.length === 0) return [];
    if(matrix.length === 1) return matrix;
    const N = matrix[0].length;
    const rotatedMatrix = [];
    for(let i=0;i<N;i++){
      rotatedMatrix.push(Array(N).fill(0));
    }
    for(let i=0; i<N ;i++){
      for(let j=0; j<N ; j++){
        const number = matrix[i][j];
        rotatedMatrix[j][Math.abs(i-(N-1))] = number;
      }
    }
    return rotatedMatrix
};

const matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
  ];
  console.log(matrix[0][0]); // --> 1
  console.log(matrix[3][2]); // --> 15
  
  const rotatedMatrix = rotateMatrix([[1, 2, 3]]);
//   console.log(rotatedMatrix[0][0]); // --> 13
//   console.log(rotatedMatrix[3][2]); // --> 8
console.log(rotatedMatrix)