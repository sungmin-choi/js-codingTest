let operation=[['*','+','-'],['*','-','+'],
        ['+','*','-'],['+','-','*'],
        ['-','*','+'],['-','+','*']];

let expression="100-200*300-500+20";
let num="";
let ex_array=[];
let answer=0;
function calculator(a,b,operator){
    if(operator==='*') return parseInt(a)*parseInt(b);
    else if(operator==='+')return parseInt(a)+parseInt(b);
    else if(operator==='-')return parseInt(a)-parseInt(b);
    else return 0;
}

for(let i=0;i<expression.length;i++){
    if(i===expression.length-1){
        num +=expression[i];
        ex_array.push(num);
    }
    if(!isNaN(expression[i])){
        num +=expression[i];
    }else{
        ex_array.push(num);
        ex_array.push(expression[i]);
        num="";
    }
}

for(let op of operation){
    let s=JSON.parse(JSON.stringify(ex_array));
    for(let i=0;i<op.length;i++){
        for(let j=0;j<s.length;j++){
            if(s[j]===op[i]){
                let num1=s[j-1];
                let num2=s[j+1];
                let num=calculator(num1,num2,op[i]);
                s.splice(j-1,3,num);
                j--;
            }
        }
    }
    s=Math.abs(+s);
    answer=answer<s?s:answer;
}

console.log(answer);