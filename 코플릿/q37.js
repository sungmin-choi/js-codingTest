const coinChange = function (total, coins) {
    // memo[i][j]는 i만큼의 금액을 coins[j]부터 ~ coins[coins.length - 1]까지 사용하여 만들 수 있는 경우의 수를 저장
    const memo = [];
    for (let i = 0; i < total + 1; i++) memo.push(Array(coins.length).fill(-1));
    const makeChageFrom = (left, idx) => {
      // 0을 만드는 방법은 1가지이다. 아니면 목표 금액을 만들었다고 생각해도 된다.
      if (left === 0) return 1;
      // 금액이 마이너스가 되는 경우는 불가능하므로 0을 리턴
      if (left < 0) return 0;
      // 동전을 전부 검토해서, 남아있는 새로운 동전은 없는데 목표 금액을 만들지 못한 경우 (실패)
      if (idx >= coins.length && left > 0) return 0;
      // 이미 해결한 적이 있는 문제는 다시 풀지 않는다.
      if (memo[left][idx] !== -1) return memo[left][idx];
  
      // left만큼의 금액을 coins[idx]부터 사용하여 만들 수 있는 경우의 수는
      //  1) coins[idx]는 그만 사용하고, 다음 동전으로 넘어가거나 (목표 금액은 그대로이고, idx가 증가한다.)
      //  2)) coins[idx]를 한번 더 사용한다. coins[idx]를 또 사용할 수 있으므로, idx는 그대로이고, 목표 금액은 coins[i]만큼 줄어든다.
      memo[left][idx] =
        makeChageFrom(left, idx + 1) + makeChageFrom(left - coins[idx], idx);
      return memo[left][idx];
    };
  
    return makeChageFrom(total, 0);
  };