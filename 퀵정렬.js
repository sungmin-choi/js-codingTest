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

function quickSort(arr) {
    if (arr.length <= 1) return arr;
  
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) left.push(arr[i]);
      else right.push(arr[i]);
    }
  
    const lSorted = quickSort(left);
    const rSorted = quickSort(right);
    return [...lSorted, pivot, ...rSorted];
  }