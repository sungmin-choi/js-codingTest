function findZero(board){
    let zero=[];
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[i].length;j++){
            if(board[i][j]===0) zero.push([i,j]);
        }
    }
    return zero;
}

function solution(board)
{
    var answer = 1;
    let zero=findZero(board);
    for(let i=0;i<board.length;i++){
        for(let j=0;j<board[0].length;j++){
            if(board[i][j]===1){
                let area=1;
                let y=j;
                while(1){
                    if(y<board[0].length-1) y++;
                    else break;
                    let flag=1;
                    if(board[i][y]===1){
                        for(let ele of zero){
                            let zx=ele[0];
                            let zy=ele[1];
                            if((y-j+i)<board.length){
                            if((i<=zx && (i+y-j)>=zx) && (j<=zy && y>=zy)) {
                                flag=0;
                                break;
                            }
                            }else{
                                flag=0;
                                break;
                            }
                            
                        }
                        if(flag){
                            area=(y-j+1)*(y-j+1);
                        }
                        else{
                            break;
                        }
                        
                    }
                    else break;
                }
                answer=answer<area?area:answer;
            }
        }
    }
    console.log(answer);
    return answer;
}

solution([[0,0,1,1],[1,1,1,1]]);