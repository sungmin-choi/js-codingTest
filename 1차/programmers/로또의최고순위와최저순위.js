function set_ranking(correct){
    switch(correct){
        case 6:
            return 1;
        case 5:
            return 2;
        case 4:
            return 3;
        case 3:
            return 4;
        case 2:
            return 5;
        default:
            return 6;
    }
    
}
function solution(lottos, win_nums) {
    let answer = [];
    let h_correct=0;
    let l_correct=0;
    for(let i=0;i<6;i++){
        if(lottos[i]===0) h_correct++;
        else{
            for(let j=0;j<6;j++){
                if(lottos[i]===win_nums[j]){
                    h_correct++;
                    l_correct++;
                    win_nums[j]=0;
                    break;
                }
            }
        }
        
    }
    answer.push(set_ranking(h_correct));
    answer.push(set_ranking(l_correct));
    return answer;
}