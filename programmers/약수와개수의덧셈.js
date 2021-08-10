let left=24;
let right=27;
function count_measure(num){
    let count=1;
    for(let i=1;i<=parseInt(num/2);i++){
        if(num%i===0) count++;
    }
    if(count%2===0) return true;
    else return false;
    
}
function solution(left, right) {
    var answer = 0;
    for(let i=left;i<=right;i++){
        if(count_measure(i)){
            answer +=i;
        }
        else answer -=i;
    }
    return answer;
}