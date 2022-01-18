participant=["leo", "kiki", "eden"];
completion=["eden", "kiki"];
function solution(participant, completion) {
    let result="";
    participant.sort();
    completion.sort();
    for(let i=0;i<completion.length;i++){
        if(participant[i]!==completion[i]) {
            result=participant[i];
            break;
        }
        if(i+1 === completion.length){
            result=participant[i+1];
            break;
        }
    }
    return result;
}
solution(participant, completion);