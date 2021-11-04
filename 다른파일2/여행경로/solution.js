let tickets=[["ICN", "AOO"], ["AOO", "BOO"], ["BOO", "COO"], ["COO", "DOO"], ["DOO", "EOO"], ["EOO", "DOO"], ["DOO", "COO"], ["COO", "BOO"], ["BOO", "AOO"]];
function BFS(tickets){
    let visited=[];
    let result=["ICN"];
    let temp="ICN";
    while(visited.length<tickets.length){
        let distance=[];
        tickets.forEach((ticket,index)=>{ 
            if(visited.indexOf(index)===-1){
                if(ticket[0]===temp){
                    distance.push([ticket[1],index]);
                }
            }
        })
        distance=distance.sort();
        console.log(distance);
        visited.push(distance[0][1]);
        temp=distance[0][0];
        result.push(distance[0][0]);
    }
    return result;

}
function solution(tickets) {
    let answer = [];
    answer=BFS(tickets);
    return answer;
}

console.log(solution(tickets));

