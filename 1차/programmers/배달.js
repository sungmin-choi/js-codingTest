class QElement{
    constructor(element,priority){
        this.element = element;
        this.priority=priority;
    }
}

class PriorityQueue{
    constructor(){
        this.queue=[];
    }
    enqueue(element,priority){
        const qElement = new QElement(element,priority);
        this.queue.push(qElement);
        this.queue.sort((a,b)=>a.priority-b.priority);
    }
    dequeue(){
        return this.queue.shift();
    }
    isempty(){
        if(this.queue.length===0) return true;
        else return false;
    }
}
let N=6;
let road=[[1,2,1],[1,3,2],[2,3,2],[3,4,3],[3,5,2],[3,5,3],[5,6,1]];
let K=4;
const INF=9999999;
function dijkstra(start,distance,roadGraph){
    let q=new PriorityQueue;
    q.enqueue(start,0);
    distance[start]=0;
    while(!q.isempty()){
        let nodeInfo = q.dequeue();
        let node = nodeInfo.element;
        let dis = nodeInfo.priority;
        if(distance[node]<dis) continue;
        for(let item of roadGraph[node]){
            let cost = dis+item[1];
            if(cost<distance[item[0]]){
                distance[item[0]]=cost;
                q.enqueue(item[0],cost);
            }
        }

    }


}
function solution(N, road, K) {
    let answer = 0;
    let distance=Array.from({length:N+1},(ele)=>INF);
    let roadGraph=Array.from({length:N+1},(ele)=>[]);
    for(let i=0;i<road.length;i++){
        if(road[i][0]<road[i][1]) roadGraph[road[i][0]].push([road[i][1],road[i][2]]);
        else roadGraph[road[i][1]].push([road[i][0],road[i][2]]);
        
    }
    dijkstra(1,distance,roadGraph);
    console.log(distance)
    for(let i=0;i<distance.length;i++){
        if(distance[i]<=K) answer++;
    }
    return answer;
}

solution(N, road, K)