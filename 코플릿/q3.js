const isSubsetOf = function (base, sample) {
    let baseObj ={};
    base.forEach((i)=>baseObj[i] = true);
    for(let i=0;i<sample.length;i++){
      if(baseObj[sample[i]] === undefined) return false;
    }
    return true;
  };
  