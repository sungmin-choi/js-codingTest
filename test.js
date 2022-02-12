const powerSet = function (str) {
  const newstr=[];
  const result =[];
  str.split('').forEach((ele)=>{
    if(!newstr.includes(ele)){
      newstr.push(ele);
    }
  })
  newstr.sort();
  console.log(newstr);
  const fixOrNot =(idx,arr)=>{
    if(idx>=newstr.length){
      result.push(arr);
      return;
    }
    fixOrNot(idx+1,arr);
    fixOrNot(idx+1,arr+newstr[idx]);
  }

  fixOrNot(0,'');
  
  return result.sort();

};

let output1 = powerSet('abc');
console.log(output1)