let record=["Enter uid1234 Muzi", "Enter uid4567 Prodo","Leave uid1234","Enter uid1234 Prodo","Change uid4567 Ryan"];


function solution(record) {
    let answer = [];
    let new_record=[];
    let last_record=new Map();
    for(let userInfo of record){
        userInfo=userInfo.split(" ");
        new_record.push(userInfo);
    }
    for(let info of new_record){
        if(info[0]!=='Leave'){
                last_record.set(info[1],info[2]);
        }   
    }
    for(let info of new_record){
        let status=info[0];
        let name = last_record.get(info[1]);
        if(status==='Enter'){
            answer.push(`${name}님이 들어왔습니다.`);
        }else if(status==='Leave'){
            answer.push(`${name}님이 나갔습니다.`);
        }
    }
    //console.log(answer);
    return answer;
}

solution(record);