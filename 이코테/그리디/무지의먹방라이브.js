

function solution(food_times,k){
    let answer=0;
    let index=-1;
    food_times = food_times.map((ele)=>{
        index=index+1;
        return {index:index,times:ele}
    });
    food_times=food_times.sort((a,b)=>b.times-a.times);
    console.log(food_times);
}

solution([3,1,2],5)