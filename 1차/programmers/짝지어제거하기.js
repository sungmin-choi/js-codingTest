
let s="baabaa";

function peek(stack){
    if(stack.length===0) return undefined;
    else{
        let num=stack.pop();
        stack.push(num);
        return num;
    }
}

function solution(s){
    let answer=0;
    s=s.split("");
    let stack=[];
    for(let i=0;i<s.length;i++){
        if(peek(stack)===s[i]) stack.pop();
        else stack.push(s[i]);
    }
    answer=stack.length===0?1:0;
    console.log(answer);
    return answer;
}

solution(s);