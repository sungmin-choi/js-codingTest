const bubbleSort = function (arr) {
    let end = arr.length;
    while(end){
      for(let i=0;i<end-1;i++){
        if(arr[i]>arr[i+1]){
          const temp = arr[i];
          arr[i] =arr[i+1];
          arr[i+1]=temp; 
        }
      }
      end--; 
    }
    return arr;
};

console.log(bubbleSort([20, -10, -11, 2, 4, 299]))