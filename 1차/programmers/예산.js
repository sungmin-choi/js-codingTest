let d=[1,3,2,5,4];
let budget=9;

function solution(d, budget) {
    var answer = 0;
    d=d.sort((a,b)=>a-b);
    for(let item of d){
        if(budget>=item){
            budget=budget-item;
            answer++;
        }
    }

    return answer;
}
//solution(d, budget);