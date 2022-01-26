
let arr = [0,1,2,3];

let tiling = function (n) {
    if(arr[n]===undefined){
    arr[n] = tiling(n-1) + tiling(n-2)
    }

    return arr[n];

   
};

tiling(5);

console.log(tiling(5));