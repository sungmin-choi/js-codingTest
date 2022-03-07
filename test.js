function combination(arr,selectNum){
    let result =[];
    if(selectNum===1) return arr.map((ele)=>[ele]);
    arr.forEach((ele,index,arr)=>{
        const fixer = ele;
        const restArr = arr.slice(index+1);
        const combinationArr = combination(restArr,selectNum-1);
        const combinFixer = combinationArr.map((ele)=>{
            const r =[fixer,...ele];
            return r.sort();    
        });

        result.push(...combinFixer); 
    });
    return result;
}  


function missHouseMeal(sideDishes) {
  // TODO: 여기에 코드를 작성합니다.
  let result=[];
  for(let i=1;i<=sideDishes.length;i++){
    result.push(...combination(sideDishes,i));
  }
  return result.sort();
}


let output = missHouseMeal(['pasta', 'oysterSoup', 'beefRibs', 'tteokbokki']);
console.log(output);

