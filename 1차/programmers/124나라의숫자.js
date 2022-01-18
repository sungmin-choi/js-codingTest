function count_measure(num){
    let count=2;
    for(let i=2;i<=parseInt(num/2);i++){
        if(num%i===0) count++;
    }
    if(count%2===0) return true;
    else return false;
    
}

console.log(count_measure(16));