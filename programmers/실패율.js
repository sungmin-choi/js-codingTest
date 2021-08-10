let N=4;
let stages=	[4,4,4,4,4];
function solution(N, stages) {
    var answer = [];
    let result=[];
    let total=stages.length;
    for(let i=1;i<=N;i++){
        let count=0;
        let s_count=0;
        for(let item of stages){
            if(item<i) count++;
            else if(item===i) s_count++;
        }
        result.push([i,s_count/(total-count)])
    }
    result.sort((a,b)=>b[1]-a[1]);
    for(let item of result){
        answer.push(item[0]);
    }
    //console.log(answer);
    return answer;
}
solution(N, stages)