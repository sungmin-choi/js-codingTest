let cb_arr=[];
const nums=[1,2,3,4];
function combination(nums,target,n,r,count){
    if(r===0) cb_arr.push(target);
    else if(n===0 || n<r) return;
    else{
        target.push(nums[count]);
        combination(nums,Object.assign([],target),n-1,r-1,count+1);
        target.pop();
        combination(nums,Object.assign([],target),n-1,r,count+1);
    }
}
function check_num(number){
    for(let i=2;i<number ;i++){
        if(number%i === 0) return false;
    }
    return true;
}
function solution(nums){
    let answer=0;
    let temp=0;
    combination(nums,[],nums.length,3,0);
    for(let i=0;i<cb_arr.length;i++){
        for( let j=0;j<3;j++){
            temp +=cb_arr[i][j];
        }
        if(check_num(temp)) answer++;
        temp =0;
    }
    return answer;
}
solution(nums);

