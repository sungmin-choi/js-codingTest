function solution(n){
    let answer=1;
    while(n>1){
        if(n%2===0){
            n=n/2;
        }else{
            answer++;
            n=Math.floor(n/2);
        }
    }
    return answer;
}