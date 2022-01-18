let n=5;
let words=["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", "establish", "hang", "gather", "refer", "reference", "estimate", "executive"];

function solution(n, words) {
    var answer = [];
    let check_word=[];// 이미나온 단어 삽입.
    let j=n; // j는 현재플레이어 표현
    let k=0;
    let tail; //단어의 마지막 알파벳 저장
    for(let i=0;i<words.length;i++){
        if(j===n) {
            j=1;
            k++;
         } //j가 n이랑 같을때 다시 첫번째플레이어로 돌아간다
        else j++;
        if(i===0){ //첫번째 플레이어는 비교할 대상이 없디
            tail=words[i][words[i].length-1]; // 첫번째 단어의 마지막 알파벳 저장
            check_word.push(words[i]); //체크한단어 삽입
            continue;
        }else{
            if(tail===words[i][0] && check_word.indexOf(words[i])===-1){ // 현재진행중인 단어와 알파벳이 맞고 ,check_word 배열에 검사중인 단어가 없다면 실행
                check_word.push(words[i]); 
                tail=words[i][words[i].length-1];
            }else{ 
                answer=[j,k];//아니면 반환
                return answer;
            }
        }

        
    }
    answer=[0,0];//끝까지 실행했는데 문제 없으면 [0,0]반환
    return answer;
}
console.log(solution(2, ["hello", "bbserve"]));