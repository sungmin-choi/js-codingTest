function solution(clothes) {
    let answer = 1;
    const obj = {};
    for(let arr of clothes) {
        obj[arr[1]] = (obj[arr[1]] || 0) + 1;
    }
    console.log(obj);
    for(let key in obj) {
        answer *= (obj[key]+1);
    }

    return answer - 1;
}


solution([["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]);