function solution(arr) {
    let answer = arr[0];
    for(let i=1;i<arr.length;i++){
        let number=answer*arr[i];
        let tap=number
        for(let j=number-1;j>=1;j--){
            if(j%answer===0 && j%arr[i]===0) tap=j;
        }
        answer=tap;
    }
    return answer;
}

console.log(solution([2,6,8,14]));