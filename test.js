const func1=()=>{
  let x=5;
  const func2=()=>{
    console.log(x);
  }
  console.dir(func2);
  return func2; 
}

const cls = func1();

cls();