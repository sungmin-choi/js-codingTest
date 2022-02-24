function solution(id_list, report, k) {
    const answer = [];
    const reportList = {};
    const suspendId = [];
    
    id_list.forEach((id)=>{
        reportList[id] = [[],0];
    })
    
    report.forEach((ele)=>{
        const [rp1,rp2] = ele.split(' ');
        if(!reportList[rp1][0].includes(rp2)){
            reportList[rp1][0].push(rp2);
            if(!suspendId.includes(rp2)){
            ++reportList[rp2][1];
            if(reportList[rp2][1]===k){
                suspendId.push(rp2)
            }
            }
        }
    });
    
    Object.keys(reportList).forEach((id)=>{
        let a=0;
        suspendId.forEach((suspend)=>{
            if(reportList[id][0].includes(suspend)){
                a++;
            }
        })
        answer.push(a);
    })
    
    return answer;
}


//console.log(solution(["muzi", "frodo", "apeach", "neo"],["muzi frodo","apeach frodo","frodo neo","muzi neo","apeach muzi"]))
//console.log(solution(["con", "ryan"],["ryan con", "ryan con", "ryan con", "ryan con"]));