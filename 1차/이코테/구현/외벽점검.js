let n=12;
let weak=[1,5,6,10];
let dist=[1,2,3,4]; 

function combination(arr,num){
    let result=[];
    if(num===1) return arr.map((ele)=>[ele]);
    arr.forEach((ele,idx,arr) => {
        const fixed = ele;
        const restArr = arr.filter((_,index)=>index!==idx);
        const combinationArr = combination(restArr,num-1);
        const combinFixer = combinationArr.map((ele)=>[fixed,...ele]);
        result.push(...combinFixer);
    });
    return result;
}
function solution(n,weak,dist){
    let count=0;
    dist.sort((a,b)=>a-b);
    let newWeak=[];
    weak.map((ele)=>newWeak.push(ele+n));
    weak = [...weak,...newWeak]; 
    let distArr=[];
    for(let i=0;i<dist.length;i++){
        distArr.push(dist[i]);
        count++;
        let combinArr = combination(weak,count);
        for(let j=0;j<combinArr.length;j++){
            let cWeak=JSON.parse(JSON.stringify(weak));
            let tempPos=combinArr[j];
            for(let k=0;k<tempPos.length;k++){
                
            }
        }
    }

}
