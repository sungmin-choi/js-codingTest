# boj18111 마인크래프트
```
for(let i=높이 0 부터 256 까지 순회한다){
    for(세로 순으로 순회){
            for(가로 순으로 순회){
                if(현재 위치의 높이>i){
                    i높이만큼 빼내기 block에서 빼낸블록을 넣어준다
                    시간도 빼낸블록*2 만큼 더해준다
                }
                if(현재 위치의 높이<i){
                    i높이만큼 만들기 위해서 필요한 만큼 block에서 빼낸다
                    빼낸 블럭만큼 시간도 추가해준다 
                }

            }
    }
    if(남은 블록수<0) 최상위 for문 탈출 (더이상 테스트 할 필요가 없기때문이다)
    else{
        if(최단시간>시간){
            최단시간 = 시간;
            높이 = i;
        } else if(최단시간===시간){
            높이=높이 와 i 비교해서 큰걸로 채택
        }
    }

}

```