function solution(s){
    let answer=0;
    s=s.split("").map(ele=>+ele);
    for(let i=0;i<s.length;i++){
        if(answer<=1) answer+=s[i];
        else{
            if(s[i]<=1) answer +=s[i];
            else answer *=s[i];
        }
    }
    return answer;
}
console.log(solution('111111'));
