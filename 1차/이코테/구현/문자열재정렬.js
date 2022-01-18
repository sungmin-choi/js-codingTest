function solution(s){
    s=s.split('');
    let alpha = s.filter((ele)=>isNaN(ele));
    let numArr = s.filter((ele)=>!isNaN(ele));
    alpha=alpha.sort();
    let numSum = 0;
    numArr.map(ele=>numSum +=+ele);
    return alpha.join('')+numSum;
}
console.log(solution('AJKDLSI412K4JSJ9D'));