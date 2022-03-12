function performanceCoinSort(consts){
    const coin = [1,5,10,50,100,500];
    const combineCoin = consts.map((cost,idx)=>{
        return [coin[idx],cost];
    })
    return combineCoin.sort((a,b)=>{
        return (a[1]/a[0])-(b[1]/b[0])
    })
}

function solution(money, costs) {
    let answer = 0;
    const perforCoinSort = performanceCoinSort(costs);
    let i=0;
    while(money>0){
        const [curMoney,curCost] = perforCoinSort[i];
        const number = Math.floor(money/curMoney);
        money -= curMoney*number;
        answer+=curCost*number;
        i++;
    }
    return answer;
}