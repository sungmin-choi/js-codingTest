const qs = (arr,start,end) =>{
  if(start>=end){
      return
  }
  const pivot = arr[start];
  let left = start+1;
  let right = end;
  while(left<=right){
      while(arr[left]<=pivot && left<=end){
          left++;
      }
      while(arr[right]>=pivot && right>=start){
          right--;
      }
      if(left>right){
          [arr[start],arr[right]]=[arr[right],arr[start]];
      }else{
          [arr[left],arr[right]]=[arr[right],arr[left]];
      }
  }
  qs(arr,start,right-1);
  qs(arr,right+1,end);
}