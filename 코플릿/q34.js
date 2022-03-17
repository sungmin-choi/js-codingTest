const LCS = function (str1, str2) {
    function getArr(arr,idx,str,result){
        if(idx>=arr.length){
            result[str]=true;
            return;
        }
    
        getArr(arr,idx+1,str,result);
        getArr(arr,idx+1,str+arr[idx],result);
        return result;
    }
    
    let result='';
    const result1=getArr(str1,0,'',{});
    const result2=getArr(str2,0,'',{});
    
    
    Object.keys(result1).forEach((key)=>{
        if(result2[key]){
            if(key.length>result.length){
                result=key;
            }
        }
    })
    return result.length;
};

console.log(LCS('codestates', 'c1o1d1e1s1t1a1t1e1s'))