class Queue{
    constructor(){
        this.Array=[];
    }
    enqueue(data){
        this.Array.push(data);
    }
    dequeue(){
        return this.Array.shift();
    }
    length(){
        return this.Array.length;
    }
}

function BFS(begin,words){
    let visited=Array.from({length:words.length},()=>0);
    let q=new Queue();
    q.enqueue([begin,0]);
    while(q.length()>0){
        let [temp,count]=q.dequeue();
        words.forEach((word,idx)=>{
            if(visited[idx]===0){
                let differnt=0;
                for(let i=0;i<word.length;i++){
                    if(word[i]!==temp[i])differnt++;
                }
                if(differnt===1){
                    visited[idx]=count+1;
                    q.enqueue([word,count+1]);
                }
            }
        })
    }
    return visited;


}
function solution(begin, target, words) {
    let answer = 0;
    let visited=BFS(begin,words);
    if(words.indexOf(target)>-1){
        answer=visited[words.indexOf(target)];
    }else{
        answer=0;
    }
    return answer;
}


console.log(solution(begin, target, words));