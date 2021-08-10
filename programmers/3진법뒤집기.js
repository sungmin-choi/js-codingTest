let n=45;

function solution(n) {
    let reversed_N = n.toString(3).split('').reverse().join('');
    return parseInt(reversed_N, 3);
    
}

solution(n);