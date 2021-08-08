const numbers =[1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
const hand = "right";
let leftPos=[3,0];
let rightPos=[3,2];
function check_hand(key,lpos,rpos,hand){
    let target_pos;
    let kind_hand;
    if(!isNaN(key)){
        if(key===0) target_pos=[3,1];
        else{
            if(key<=3)target_pos=[0,key-1];
            else if(key<=6)target_pos=[1,key-4];
            else target_pos=[2,key-7];
        }
        
        if(key===1 || key===4 || key===7){
            kind_hand="L";
        }else if(key===3 || key===6 || key===9){
            kind_hand='R';
        }else{
            let ldis=Math.abs(target_pos[0]-lpos[0])+Math.abs(target_pos[1]-lpos[1]);
            let rdis=Math.abs(target_pos[0]-rpos[0])+Math.abs(target_pos[1]-rpos[1]);
            if(ldis===rdis){
                if(hand==="right") kind_hand="R";
                else kind_hand="L";
            }else if(ldis<rdis) kind_hand="L";
            else kind_hand="R";
        }
        
    }
    else{
        if(key==='*') target_pos=[0,3],kind_hand='L';
        else target_pos=[2,3],kind_hand='R';
    }
    return [kind_hand,target_pos];
}
function solution(numbers, hand) {
    var answer = '';
    let sample;
    for(let i=0;i<numbers.length;i++){
        sample=check_hand(numbers[i],leftPos,rightPos,hand);
        if(sample[0]==="R")rightPos=sample[1];
        else leftPos=sample[1];
        answer +=sample[0];
    }
    console.log(answer);
    return answer;
}

solution(numbers,hand);