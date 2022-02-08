
const powerSet = function (str) {
    const arr=[];
    str.split('').forEach(ele=>{
        if(!arr.includes(ele)){
            arr.push(ele);
        }
    });
    arr.sort();

    let subSets = [];
    const pickOrNot = (idx, subset) => {
    // base case
    if (idx === arr.length) {
      // 마지막 문자까지 검토한 경우
      subSets.push(subset);
      return;
    }

    // recursive case
    // idx번째 문자가 포함되지 않는 경우
    pickOrNot(idx + 1, subset);

    // idx번째 문자가 포함되는 경우
    pickOrNot(idx + 1, subset + arr[idx]);
  };

  pickOrNot(0, '');

  return subSets.sort();
};


let output2 = powerSet('jjump');

console.log(output2);