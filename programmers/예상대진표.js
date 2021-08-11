let n=8;
let a=1;
let b=4;
function solution(n,a,b)
{
    var answer = 0;
    while(1){
        if(a%2===0){
            if((a-1)===b){
                answer++;
                break;
            }
        }else{
            if((a+1)===b){
                answer++;
                break;
            }
        }
        if(a%2===0) a=a/2;
        else a=(a+1)/2;
        if(b%2===0) b=b/2;
        else b=(b+1)/2;
        answer++;
    }
    console.log(answer);
    return answer;
}

solution(n,a,b);