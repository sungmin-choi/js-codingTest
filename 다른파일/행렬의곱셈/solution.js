function solution(arr1, arr2) {
    let answer = [];
    arr1.forEach(ele=>{
        let column=[];    
        for(let i=0;i<arr2[0].length;i++){
            let value=0;
            ele.forEach((e,index)=>{
                value+=e*arr2[index][i];
            })
            column.push(value);
        }
        answer.push(column);
    })
    return answer;
}