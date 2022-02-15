const isPrime = (num) =>{
    for(let i=2; i<num; i++){
      if(num % i === 0) return false;
    }
    return true;
}
const isOneDiffernt = (curNum,targetNum) =>{
    const curStr = String(curNum);
    const targetStr = String(targetNum);
    let count =0;
    for(let i=0;i<4;i++){
        if(curStr[i]!==targetStr[i]){
            count++;
        }
    }
    if(count===1)return true;
    return false
}
const bfs = (curPwd,primeNums) =>{
    const q = [curPwd];
    primeNums[curPwd] =0;
    const visited = {};
    while(q.length>0){
        const current = q.shift();
        const count = primeNums[current];
        visited[current] = true;
        Object.keys(primeNums).forEach((ele)=>{
            if(isOneDiffernt(current,ele)){
                if(visited[ele] !== true){
                    q.push(ele);

                }
                if(primeNums[ele]>count+1){
                    primeNums[ele] = count+1;
                }
            }
        })
        

    }
}   
const primePassword = (curPwd, newPwd) => {
    const primeNums = {};
    for(let i=1000;i<=9999;i++){
        if(isPrime(i)){
            primeNums[i]=9999;
        }
    }
    bfs(curPwd,primeNums);
    console.log(primeNums)
    return primeNums[newPwd];
}

console.log(primePassword(9787, 9923));