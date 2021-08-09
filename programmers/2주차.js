let scores =[[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]];


function check_grade(num){
    if(num>=90) return 'A';
    else if(num>=80) return 'B';
    else if(num>=70) return 'C';
    else if(num>=50) return 'D';
    else return 'F';
}
function check_overlap(num,arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(num===arr[i]) count++;
    }
    if(count===1) return false;
    else return true;
    
}
function solution(scores) {
    let new_socres=[];

    for(let i=0;i<scores.length;i++){
        new_socres.push([]);
        for(let j=0;j<scores.length;j++){
        new_socres[i].push(scores[j][i]);
        }
    }
    scores=Object.assign([],new_socres);
    var answer = '';
    let max;
    let min;
    let self_score;
    let average;
    for(let i=0;i<scores.length;i++){
        max=Math.max(...scores[i]);
        min=Math.min(...scores[i]);
        self_score=scores[i][i];
        average=0;
        for(let j=0;j<scores[i].length;j++) average+=scores[i][j];
        if(max===self_score && !check_overlap(self_score,scores[i])){
             average-=max; 
            average=average/(scores[i].length-1);
        }else if(min===self_score && !check_overlap(self_score,scores[i])){
             average-=min; 
             average=average/(scores[i].length-1);
        }else{
            average=average/(scores[i].length);
        }
        answer=answer+check_grade(average);
        
    }
    console.log(answer);
    return answer;
}

solution(scores);