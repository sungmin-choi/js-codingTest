function flattenArr(arr) {
    if(arr.length === 0) return [];
    let result =[];
    for(let el of arr){
      if(Array.isArray(el)){
        result.push(...flattenArr(el));
      }else{
        result.push(el);
      }
    }
    return result;
}

console.log(flattenArr([[1], 2, [3, 4], 5]));