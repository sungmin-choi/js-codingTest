nums = [3,1,2,3];

function solution(nums) {
    var answer = 0;
    let nums_copy = Object.assign([],nums);
    let re_nums=[];
    n = parseInt(nums.length/2);
    while(nums_copy.length){
        let num = nums_copy.pop();
        re_nums.push(num);
        nums_copy=nums_copy.filter((Element)=>Element !== num);
    }
    
    n<re_nums.length ? answer=n:answer=re_nums.length;
    console.log(answer);
    return answer;
}

solution(nums);