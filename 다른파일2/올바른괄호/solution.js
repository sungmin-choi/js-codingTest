function solution(s){
    let answer = true;
    let array=[];
    for(let i=0;i<s.length;i++){
        if(s[i]==="(") array.push(s[i]);
        else if(s[i]===")"){
            if(array[array.length-1]==="(") array.pop();
            else answer=false;
        }
    }
    if(array.length>0)answer=false;
    return answer;
}