// 버블정렬
function bubbleSort (array) {
    for(let i=0 ; i<array.length ;i++){
      let temp = array[0];
      let swap = 0; // 정렬할때 정렬 한 횟수 카운트하기
      for(let j=1; j<array.length-i ; j++){
        if(temp > array[j]){
          swap++; // 위치가 바뀌면 카운트 +1
          array[j-1] = array[j];
          array[j] = temp;
        }else{
          temp = array[j];
        }
      }
      if(swap ===0) break; // 만약에 한번도 위치가 안바뀌면 정렬이 다된 상태이므로 굳이 뒤에 또 정렬 할 필요가 없다.s 
    }
    return array;
  }

console.log(bubbleSort([9,8,10,11,2,4]));