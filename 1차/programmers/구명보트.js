function solution(people, limit) {
    var answer = people.length;
    people=people.sort((a,b)=>b-a);
    let minIndex=people.length-1;
    for(let i=0;i<people.length-1;i++){
        if(people[i]===0 || minIndex===i)break;
        let weight = people[i]+people[minIndex];
        if(weight<=limit){
            people[minIndex]=0;
            minIndex--;
            answer--;
        }
    }
    return answer;
}

solution([40,40,40],100);