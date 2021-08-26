

function solution(food_times,k){
    let index=-1;
    food_times = food_times.map((food)=>{
        index +=1;
        return {index:index,times:food};
    }).sort((a,b)=>a["times"]-b["times"]);
    let stacknum=0;
    while(1){
        if(food_times.length===0)return -1;
        
        if(food_times[0]["times"]===stacknum) {
            food_times.shift();
            continue;
        }
        let min_round_times = (food_times[0]["times"]-stacknum)*food_times.length;
        if(k>min_round_times){
            k -=min_round_times;
            stacknum += food_times[0]["times"]-stacknum;
            food_times.shift();
        }
        else if(k<min_round_times){
            food_times=food_times.sort((a,b)=>{
               return a["index"]-b["index"];
            });
            if(k%food_times.length===0) return food_times[0]["index"]+1;
            else return food_times[k%food_times.length]["index"]+1;
        }
        else{
            return food_times[1]["index"]+1;
        }
        }
}


console.log(solution([3,1,1,1,2,4,3],12));

