const rotatedArraySearch = function (rotated, target) {
    let result = -1;
    const binarySearch = (rotated,start,end,target)=>{
      if(start>end){
        return ;
      }
      const pivot = parseInt((start+end)/2);
      if(rotated[pivot] === target){
        result = pivot;
        return;
      }
      binarySearch(rotated,0,pivot-1,target);
      binarySearch(rotated,pivot+1,rotated.length,target);
    }
    binarySearch(rotated,0,rotated.length,target);
    return result;
};

console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 2))
console.log(rotatedArraySearch([4, 5, 6, 0, 1, 2, 3], 100))