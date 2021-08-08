let s="2three45sixseven";
function alpha_change_num(s,i){
    let num;
    let add=0;
    switch(s[i]){
        case 'z' :
            add=3;
            num=0;
            break;
        case 'o':
            add=2;
            num =1;
            break;
        case 't':
            if(s[i+1] ==='w'){
                num=2;
                add=2;
            }
            else{
                num=3;
                add=4;
            }
            break;
        case 'f':
            if(s[i+1]==='o'){
                num=4;
                add=3;
            }
            else{
                num=5;
                add=3;
            }
            break;
        case 's':
            if(s[i+1]==='i'){
                num=6;
                add=2;
            }
            else{
                num=7;
                add=4;
            }
            break;
        case 'e':
            num =8;
            add=4;
            break;
        case 'n':
            num=9;
            add=3;
            break;
        default:
            break;
    }
    return [num,add];
}
function solution(s) {
    var answer = '';
    let temp;
    for(let i=0;i<s.length;i++){
        if(!isNaN(s[i])){
            answer +=s[i];
        }else{
            temp=alpha_change_num(s,i);
            answer +=temp[0];
            i +=temp[1];
        }
    }
    console.log(answer);
}

solution(s);