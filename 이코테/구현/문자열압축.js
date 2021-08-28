

function combine(s,num){
    let new_s=[];
    let word='';
    let i=1;
    while(i<=s.length){
        word +=s[i-1];
        if(i%num===0){
            new_s.push(word);
            word='';
        }
        i++;
    }
    if(word.length>0) new_s.push(word);
    return new_s;
}


function solution(s){
    let answer=9999;
    s=s.split('');
    let n=parseInt(s.length/2);
    for(let i=1;i<=n;i++){
        let new_s=combine(s,i);
        let cp_word='';
        let count=1;
        let result=''
        new_s.forEach((ele)=>{
            if(cp_word.length===0)cp_word=ele;
            else if(cp_word===ele) count++;
            else{
                if(count>1)result+=String(count)+cp_word;
                else result+=cp_word;
                cp_word=ele;
                count =1;
            }
        })
        if(count>1) result+=String(count)+cp_word;
        else result+=cp_word;
        answer=answer>result.length?result.length:answer;
        result='';
    }
    return answer;
}

solution("aabbaccc");
solution("ababcdcdababcdcd");
solution("abcabcabcabcdededededede");