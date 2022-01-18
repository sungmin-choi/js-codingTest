let s="{{2},{2,1},{2,1,3},{2,1,3,4}}";
function solution(s) {
    var answer = [];
    let strList = s.replace("{{", "").replace("}}", "").split("},{");
    let setList = [];
    for (let i = 0; i < strList.length; i++) {
        setList.push(strList[i].split(","));
    }
    setList.sort((a, b) => {
        if (a.length > b.length) {
          return 1;
        } else {
          return -1;
        }
      });
    answer.push(+setList[0][0]);
    for(let i=1;i<setList.length;i++){
        for(let j=0;j<answer.length;j++){
            let index=setList[i].indexOf(answer[j]+'');
            setList[i].splice(index,1);
        }
        answer.push(+setList[i][0]);
    }
    console.log(answer);
    return answer;
}

solution(s);