const combination = (arr,num)=>{
    if(num === 1) return arr.map((ele)=>[ele]);
    const result=[];
    arr.forEach((ele,idx,arr)=>{
      const fixed = ele;
      const restArr = arr.slice(idx+1);
      const combinArr = combination(restArr, num-1);
      const fixedArr = combinArr.map((ele)=>[fixed,...ele]);
      result.push(...fixedArr);
    })
    return result;
  }
  const largestProductOfThree = function (arr) {
    // TODO: 여기에 코드를 작성합니다.
    
    const combinArr = combination(arr,3);
    let result =combinArr[0].reduce((prev,current)=>prev*current);
    combinArr.forEach((arr)=>{
      const temp = arr.reduce((prev,current)=>prev*current);
      if(temp>result)result = temp
    })
    return result;
  };

console.log(combination([2,1,3,7],3));