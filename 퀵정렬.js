const quickSort =(start,end)=>{
    if(start>=end-1) return;
    let left = start+1;
    const pivot = arr[start];
    let right = end;
    while(left<right){
      while(arr[left]<pivot){
        left++;
      }
      while(arr[right]>pivot){
        right--;
      }
      if(left>right){
        [arr[right],arr[start]] = [arr[start],arr[right]];
        //[result[right],result[start]] = [result[start],result[right]];
      }else{
        [arr[left],arr[right]] = [arr[right],arr[left]];
        //[result[left],result[right]] = [result[right],result[left]];
      }
    }
    quickSort(0,right);
    quickSort(left,end);
  
}

const arr = [0,3,4,10,8,2,6,1];
quickSort(0,arr.length-1);
console.log(arr);