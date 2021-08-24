function solution(N,input){
    let answer = 0;
    input = input.sort((a,b)=>b-a);
    let i=0;
    while(1){
        if(N<0) return answer-1;
        if(N==0) return answer;
        N -=input[i];
        i +=input[i];
        answer++;
    }
}

console.log(solution(5,[2,3,1,2,2]));