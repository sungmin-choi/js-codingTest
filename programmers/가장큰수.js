let numbers=[3, 30, 34, 5, 9];

let answer='';
answer=numbers.map(c=> c + '').sort((a,b) => (b+a) - (a+b));

console.log(answer);