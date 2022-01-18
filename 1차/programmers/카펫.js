

function solution(brown, yellow) {
    var answer = [];
    brown = (brown/2)-2;

    for(let i=1;i<brown;i++){
        brown--;
        if((i*brown)===yellow){
            console.log(brown+2,i+2);
        }
    }
}
solution(24,24);