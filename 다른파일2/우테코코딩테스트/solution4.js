 
function solution(s) {
    let answer = [];
    let visited=Array.from({length:s.length},()=>0);
    for(let i=0;i<s.length;i++){
        if(visited[i]===0){
            let count=0;
            let key=s[i];
            let posr=i;
            while(visited[posr]===0 && s[posr]===key){
                visited[posr]=1;
                count++;
                posr++;
            }
            let posl=i-1;
            if(posl<0)posl=s.length-1;
            while(visited[posl]===0 && s[posl]===key){
                visited[posl]=1;
                count++;
                posl--;
            }
            answer.push(count);
        }
    }
    
    answer=answer.sort();
    return answer;
}

console.log(solution("baaab"));