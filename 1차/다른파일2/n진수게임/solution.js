function solution(n, t, m, p) {
    let answer = '';
    let arr='';
    let count=0;
    let num=0;
    while(count<t){
        while(arr.length<=(count*m+p-1)){
            arr+=num.toString(n).toUpperCase();
            num++;
        }
        answer+=arr[count*m+p-1];
        count++;
    }
    return answer;
}


console.log(solution(16, 16, 2, 2));