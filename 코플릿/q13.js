const insertionSort = function (arr) {
    let cb = (ele)=>ele;
    if(arguments['1']){
        cb = arguments['1'];
    };
    const newArr=arr.map(cb);
    for(let i=1; i<arr.length;i++){
        for(let j=i;j>0;j--){
            if(newArr[j]<newArr[j-1]){
                [newArr[j],newArr[j-1]] = [newArr[j-1],newArr[j]];
                [arr[j],arr[j-1]] = [arr[j-1],arr[j]];
            }else{
                break;
            }
        }
    }
    return arr;
    
};

insertionSort([1,3,2,7,5,8],(ele)=>-ele);