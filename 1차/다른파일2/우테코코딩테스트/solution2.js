function getStudyTime(start,end){
    let result=0;
    let [shour,smin]=start.split(":");
    let [ehour,emin]=end.split(":");
    if(smin>emin){
        result=(ehour-shour-1)*60+emin-smin+60;
    }else{
        result=(ehour-shour)*60+emin-smin;
    }
    return result;
}
function getRealStudyTime(studyTime){
    if(studyTime<5) return 0;
    else if(studyTime>105){
        return 105;
    }
    else return studyTime;
}
function changeToTime(time){
    if(time<10) return `0${time}`;
    else return `${time}`

}
function solution(log) {
    let answer = '';
    let totalTime=0;
    for(let i=0;i<log.length;){
        const studyTime= getStudyTime(log[i],log[i+1]);
        totalTime+=getRealStudyTime(studyTime);
        i++;
        i++;
    }
    const hour=changeToTime(Math.floor(totalTime/60));
    const min=changeToTime(totalTime%60);
    answer=hour+":"+min;

    return answer;
}
console.log(solution(["08:30","08:36","14:00","14:03"]));