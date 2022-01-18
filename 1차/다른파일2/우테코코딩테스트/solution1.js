function countNum(arr,num){
    let result=0;
    arr.forEach(ele=>{
        if(ele===num)result++;
    })
    return result;
}

function solution(arr) {
    let num1=countNum(arr,1);
    let num2=countNum(arr,2);
    let num3=countNum(arr,3);
    let countMax=Math.max(num1,num2,num3);
    let answer=[countMax-num1,countMax-num2,countMax-num3];
    return answer;
}
console.log(solution([1]));