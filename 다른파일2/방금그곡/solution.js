let m="ABCDEFG";
let musicinfos=	["12:00,12:14,HELLO1,CDEFGAB", "12:00,12:16,HELLO2,CDEFGAB","12:00,12:14,HELLO3,CDEFGAB"];

function getMusicTime(start,end){
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
function getSheetMusic(musicTime,music){
    let sheetMusic="";
    let i=0;
    let count=0;
    while(i<musicTime){
        sheetMusic+=music[count];
        count++;
        if(count>=music.length)count=0;
        i++;
    }
    return sheetMusic;
}
function solution(m, musicinfos) {
    let answer = '(None)';
    let answerTime=0;
    musicinfos.forEach(musicinfo=>{
        const [start,end,title,music]=musicinfo.split(',');
        const musicTime=getMusicTime(start,end);
        const seetMusic=getSheetMusic(musicTime,music);
        if(seetMusic.includes(m) && !seetMusic.includes(m+"#")){
            if(answerTime<musicTime){
                answer=title;
                answerTime=musicTime;
            }     
        }
    })
    return answer;
}

console.log(solution(m,musicinfos))