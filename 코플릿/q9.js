const MAX_NUM = 94906249;
const powNum =[]
function power(base, exponent) {
  if(exponent ===0) return 1;
  let temp = power(base, parseInt(exponent/2));
  if(exponent%2 === 1) return temp*temp*base%MAX_NUM;
  else return temp*temp%MAX_NUM;
  
}

console.log(power(5,22));