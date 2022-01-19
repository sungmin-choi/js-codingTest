//1. 일반 재귀사용
function recursionFibo(n){
    if(n===0) return 0;
    if(n===1) return 1;
    return recursionFibo(n-2)+recursionFibo(n-1);
}
//2. 메모제이션 방법 재귀
let fibo_memo =[0,1];
function memoRecursionFibo(n){
    if(fibo_memo[n]=== undefined){
        fibo_memo[n] = memoRecursionFibo(n-2) + memoRecursionFibo(n-1);
    }
    return fibo_memo[n];
}
//3. for문 사용

let fibo_memo2=[0,1];

function forFibo(n){
    for(let i=2; i<=n; i++){
        fibo_memo2[n] = fibo_memo2[n-2]+ fibo_memo2[n-1];
    }
    return fibo_memo2[n];
}

