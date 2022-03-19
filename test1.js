function solution(goods) {
    const answer = [];
    goods.forEach((good)=>{
        const result =getGoodKeyword(good,goods);
        let str='';
        if(result.length===0){
            answer.push('None')
        }else{
            result.forEach((e,idx)=>{
                if(idx!==0){
                    str+=' ';
                }
                str+=e;
            });
            answer.push(str);
        }

    })
    return answer;
}

function getGoodKeyword(good,goods){
    const uniques =[];
    let minLength = 25;
    const goodSplit = good.split('');
    for(let i=0;i<goodSplit.length;i++){
        let curKeyword = goodSplit[i];
        if(isUnique(curKeyword,goods)&& !uniques.includes(curKeyword)){
            minLength = minLength>curKeyword.length?curKeyword.length:minLength;
            uniques.push(curKeyword);
            continue;
        }
        for(let j=i+1; j<goodSplit.length; j++){
            curKeyword+=goodSplit[j];
            if(isUnique(curKeyword,goods)){
                if(curKeyword.length<=minLength && !uniques.includes(curKeyword)){
                    uniques.push(curKeyword);
                    minLength = curKeyword.length;
                }
                break;
            }
        }
    }
    const result = uniques.filter((unique)=>minLength===unique.length);
    return result.sort();
}

function isUnique(keyword,goods){
    let count =0;
    for(let i=0;i<goods.length;i++){
        const curGood = goods[i];
        if(curGood.includes(keyword)){
            if(count===1) return false;
            else count++;
        }
    }
    return true;
}

console.log(solution(["abcdeabcd","cdabe","abce","bcdeab"]));