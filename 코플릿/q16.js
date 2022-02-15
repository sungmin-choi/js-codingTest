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

const quickSort = function (arr) {
    qs(arr,0,arr.length-1);
    console.log(arr);
};


quickSort([5,7,9,0,3,1,6,2,4,8])
quickSort([5,4,3,2,1])