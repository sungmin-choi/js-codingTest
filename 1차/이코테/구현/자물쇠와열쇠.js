

function get90RotationKey(key){
    let rota_key=[];
    let M=key.length;
    for(let i=0;i<4;i++){
        let one_key=[];
        for(let j=0;j<M;j++){
            let arr=[];
            for(let k=M-1;k>=0;k--) arr.push(key[k][j]);
            one_key.push(arr);
        }
        rota_key.push(one_key);
        key=one_key;
    }
    return rota_key;
}

function getNewLock(key,lock){
    let newLock=[];
    let N=lock.length;
    let M=key.length;
    for(let i=0;i<M;i++){
        let arr1=Array.from({length:M},()=> 0);
        let arr2=Array.from({length:N},()=> 0);
        newLock.push([...arr1,...arr2,...arr1]);
    }
    for(let i=0;i<N;i++){
        let arr1=Array.from({length:M},()=> 0);
        newLock.push([...arr1,...lock[i],...arr1]);
    }
    for(let i=0;i<M;i++){
        let arr1=Array.from({length:M},()=> 0);
        let arr2=Array.from({length:N},()=> 0);
        newLock.push([...arr1,...arr2,...arr1]);
    }
    return newLock;
}
function check(copyLock,N,M){
    for(let i=N;i<N+M;i++){
        for(let j=N;j<N+M;j++){
            if(copyLock[i][j]!==1) return false;
        }
    }
    return true;
}
function solution(key,lock){
    const newLock = getNewLock(key,lock);
    const N=key.length;
    const M=lock.length;
    const keys=get90RotationKey(key);
    let answer=false;
    keys.forEach((key)=>{
        for(let i=0;i<=(N+M);i++){
            for(let j=0;j<=(N+M);j++){
                let copyLock=JSON.parse(JSON.stringify(newLock));
                for(let k=0;k<N;k++){
                    for(let t=0;t<N;t++){
                        copyLock[i+k][j+t] +=key[k][t];
                    }
                }
                if(check(copyLock,N,M)) answer=true;
            }
        }
    });
    return answer;
}


solution([[1,1,1],[1,1,1],[1,1,1]],[[1,1,1],[1,1,0],[1,0,1]]);