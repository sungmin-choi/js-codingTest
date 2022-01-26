const board = [
    [3, 5, 1, 0, 0, 8, 7, 0, 6],
    [0, 4, 0, 7, 0, 0, 1, 0, 0],
    [0, 7, 0, 0, 0, 0, 9, 5, 4],
    [8, 0, 4, 0, 2, 0, 6, 0, 0],
    [0, 3, 2, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 3],
    [7, 1, 0, 0, 4, 6, 0, 0, 5],
    [0, 0, 6, 0, 5, 9, 0, 7, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ];

const fillSquare =(board,x,y)=>{
    const squareArr = [];
    const sqArr =[];
    let row=0;
    let col=0;
    if(x<3)row=0
    else if(x<6 && x>2)row=3;
    else row=6;
    if(y<3)col=0
    else if(y<6 && y>2)col=3;
    else col=6;
    for(let i=row ;i<row+3;i++){
        for(let j=col ;j<col+3; j++){
            if(board[i][j] !==0 && typeof board[i][j] === 'number'){
                squareArr.push(board[i][j])
            }else if(Array.isArray(board[i][j])){
                sqArr.push([...board[i][j],i,j]);
                
            }
        }
    }

    return squareArr;
}

const fillBoard = (board,x,y)=>{
    const arr=[1,2,3,4,5,6,7,8,9];
    let result=[];
    const rowArr = board[x].filter((ele)=>ele!==0 && typeof ele === 'number');
    const colArr = [];
    for(let i=0;i<9;i++){
        if(board[i][y] !==0 && typeof board[i][y] === 'number'){
            colArr.push(board[i][y]);
        }else if(Array.isArray(board[i][y])){
            
        }
    }
    const squareArr = fillSquare(board,x,y);
    arr.forEach(ele=>{
        if(!rowArr.includes(ele) && !colArr.includes(ele) &&!squareArr.includes(ele)){
            result.push(ele);
        }
    })
    return result;
    
}

const filterBoard = ()=>{

}

const sudoku = function (board) {
    // TODO: 여기에 코드를 작성합니다.
    
    while(1){
        let flag = true;
        for(let k=0;k<9;k++){
        for(let i=k*3;i<k*3+3;i++){
            for(let j=0;j<9;j++){
                if(board[i][j] === 0){
                    flag = false;
                    const arr = fillBoard(board,i,j);
                    if(arr.length === 1){
                        board[i][j] = arr[0];
                    }else{
                        board[i][j] = arr;
                    }
                }
            }
        }
    }
        if(flag){
            return board;
        }
    }
};

console.log(sudoku(board));


  