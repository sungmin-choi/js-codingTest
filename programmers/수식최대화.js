let op=[['*','+','-'],['*','-','+'],
        ['+','*','-'],['+','-','*'],
        ['-','*','+'],['-','+','*']];

let expression="100-200*300-500+20";
let num="";
let ex_array=[];

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

for(let i=0;i<7;i++){
    let arr=Object.assign([],ex_array);
    let total=0;
    for(let j=0;j<3;j++){
        for(let k=0;k<arr.length;k++){
            if(arr[k]===op[i][j]){
                total+=calculator(arr[k-1],arr[k+1],arr[k]);
                arr.splice(k+2,0,total);
                arr.splice(k-1,3);
                k=0;
            }
        }
    }
}