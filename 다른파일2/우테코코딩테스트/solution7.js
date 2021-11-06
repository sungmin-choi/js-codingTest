
function solution(grid, clockwise) {
    let answer = [];
    const maxLen=grid[grid.length-1].length;
    if(clockwise===true){
        answer.push(grid[grid.length-1][0]);
        let x=grid.length-1;
        let y=2;
        while(y<maxLen){
            let num="";
            let flag=0;
            let ny=y;
            let nx=x;
            while(ny>=0){
                num+=grid[nx][ny];
                if(flag===0){
                    ny--;
                    flag=1;
                }else if(flag===1){
                    nx--;
                    ny--;
                    flag=0;
                }
                

            }
            answer.push(num);
            y+=2;
        }
    }
    else if(clockwise===false){
        answer.push(grid[grid.length-1][maxLen-1]);
        let y=maxLen-1;
        let x=grid.length-1;
        while(y>0){
            let num="";
            let flag=0;
            let ny=y-2;
            let nx=x-1;
            while(nx!==grid.length-1 || ny!==y-2){
                num+=grid[nx][ny];
                if(flag===0){
                    ny++;
                    nx++;
                    flag=1;
                }else if(flag===1){
                    ny--;
                    flag=0;
                }
            }
            num+=grid[nx][ny];
            answer.push(num);
            y-=2;
            x-=1;
        }
    }
    return answer;
}
let answer = [];
let grid=["1"];
console.log(solution(grid,false));

