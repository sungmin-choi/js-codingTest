let numbers=[1, 1, 1,1,1];
let target=3;

class Queue {
    constructor() {
      this.items = [];
    }
    enqueue(elem) {
      return this.items.push(elem);
    }
    dequeue() {
      return this.items.shift();
    }
    isEmpty() {
      return this.items.length === 0;
    }
  }

 function bfs(startIndex, numbers, target) {
    const queue = new Queue();
    queue.enqueue([numbers[startIndex], -numbers[startIndex]]);
    let index = startIndex + 1;
    let answer = 0;
  
    while (!queue.isEmpty()) {
      let list = queue.dequeue();
  
      if (index !== numbers.length) {
        let newList = [];
  
        for (let num of list) {
          newList.push(num + numbers[index]);
          newList.push(num - numbers[index]);
        }
  
        index++;
        queue.enqueue(newList);
      } else {
        //console.log(list, queue);
        for (let num of list) {
          if (num === target) {
            answer++;
          }
        }
      }
    }
  
    return answer;
  }
function solution(numbers, target) {
    let answer = bfs(0, numbers, target);

    return answer;
}


solution(numbers, target)