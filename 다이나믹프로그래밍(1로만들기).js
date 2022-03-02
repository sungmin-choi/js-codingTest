const solution=(num)=>{
    const visited = Array(30000).fill(0);
    visited[5] = 1;
    visited[1] = 0;
    visited[2] = 1;
    visited[3] = 1;

    for(let i=4;i<=num;i++){
        if(visited[i]){
            continue;
        }
        let count =visited[i-1];
        if(i%5 === 0){
            count = visited[i/5]<count ? visited[i/5]:count;
        }
        if(i%3 === 0){
            count = visited[i/3]<count ? visited[i/3]:count;
        }
        if(i%2 === 0){
            count = visited[i/2]<count ? visited[i/2]:count;
        }
        visited[i] = count+1;
    }

    return visited[num];
}

console.log(solution(26));