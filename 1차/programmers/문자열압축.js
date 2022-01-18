s='abcabcab';

function solution(s) {
        let l = s.length;
        let answer = l;

        for(let i=1;i<parseInt((l/2)+1);i++){
            let count=0;
            let new_s="";
            let pos=0;
            while(pos<l){
                let cmp1=s.slice(pos,pos+i);
                let cmp2=s.slice(pos+i,pos+i+i);
                if(cmp1==cmp2){
                    count ++;
                }else{
                    if(!count){
                        new_s=new_s+cmp1;
                    }else{
                        new_s=new_s+(count+1)+cmp1;
                        count=0;
                    }
                }
                pos=pos+i;
            }
        answer=answer>new_s.length? new_s.length:answer;
        }
    console.log(answer);
    return answer;
}

solution(s);