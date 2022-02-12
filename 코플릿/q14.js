const rotatedArraySearch = function (rotated, target) {
  let start = 0;
  let end = rotated.length-1;
  while(start<=end){
    const middle = parseInt((start+end)/2);
    if(rotated[middle] === target) return middle;
    if(rotated[middle]<rotated[start]){
      if(rotated[middle]<target && rotated[end]>=target){
        start=middle+1
      }else{
        end=middle-1;
      }
    } else{
      if(rotated[start]<=target && rotated[middle]>target){
        end=middle-1;
      }else{
        start=middle+1;
      }

    }
  }
  return -1;
};
