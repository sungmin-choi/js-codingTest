const balancedBrackets = function (str) {
    if(str==='')return true;
    const brackets = str.split('');
    const restBrackets=[];
    while(brackets.length>0){
      const currentBracket = brackets.shift();
      if(currentBracket === '[' || currentBracket === '{' || currentBracket==='('){
        restBrackets.push(currentBracket);
      }else if(currentBracket === ']' || currentBracket === '}'|| currentBracket === ')'){
        if(restBrackets.length>0){
          const popBracket = restBrackets.pop();
          if(currentBracket === ')'){
            if(popBracket !== '(')return false;
          }
          if(currentBracket === ']'){
            if(popBracket !== '[')return false;
          }
          if(currentBracket === '}'){
            if(popBracket !== '{')return false;
          }
        }else{
          return false;
        }
      }
    }
    if(restBrackets.length===0 && brackets.length===0) return true;
    else return false;
};


let output = balancedBrackets('[](){}');
console.log(output); // --> true