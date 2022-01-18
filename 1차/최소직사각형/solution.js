let sizes=[[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]];
function solution(sizes) {
    let answer = 0;
    sizes=sizes.map(size=>size.sort((a,b)=>b-a));
    let groupA = sizes.map(size=>size[0]);
    let groupB = sizes.map(size=>size[1]);
    answer = Math.max(...groupA)*Math.max(...groupB);
    return answer;
}
solution(sizes)