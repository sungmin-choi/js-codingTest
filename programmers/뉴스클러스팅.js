let str1="FRANCE";
let str2="french";
const pattern_eng = /[a-zA-Z]/;

let set_m=[];
let set_z=[];
function get_set(str){
    let set=[];
    for(let i=0;i<str.length-1;i++){
        if(pattern_eng.test(str[i])&&pattern_eng.test(str[i+1])){
            let word=str[i]+str[i+1]+'';
            set.push(word);
        }
    }
    return set;
}
function make_set(str1,str2,set_m,set_z){
    let check_set=[];
    for(let i=0;i<str1.length;i++){
        let word=str1[i];
        
        let count1 = str1.filter(element => word === element).length;
        let count2= str2.filter(element => word === element).length;
        if(count1>0 && count2>0){
            if(check_set.indexOf(word)===-1){
            for(let j=0;j<Math.min(count1,count2);j++) set_z.push(word);
            for(let j=0;j<Math.max(count1,count2);j++) set_m.push(word);
            }

        }else{
            set_m.push(word);
        }
        check_set.push(word);

    }
    for(let j=0;j<str2.length;j++){
        if(check_set.indexOf(str2[j])===-1) set_m.push(str2[j]);
    }
    let answer=0;
    if(set_z.length===0 && set_m.length===0 ) answer = 65536;
    else answer = parseInt((set_z.length/set_m.length)*65536);
    return answer;
}



function solution(str1, str2) {
    var answer = 0;
    str1=str1.toUpperCase();
    str2=str2.toUpperCase(); 
    str1=get_set(str1);
    str2=get_set(str2);
    answer=make_set(str1,str2,set_m,set_z);
    console.log(answer);
    return answer;
}

solution(str1,str2);