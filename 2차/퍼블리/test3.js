function sum(array) {
  let result = 0;
  for (let i = 0; i < array.length; i++) result += array[i];

  return result;
}

function solution(estimates, k) {
  let answer = 0;
  let preSum = 0;

  const sliceArr = estimates.slice(0, k);
  const sumResult = sum(sliceArr);
  preSum = sumResult;
  answer = preSum;
  preSum -= estimates[0];

  for (let i = 1; i <= estimates.length - k; i++) {
    preSum += estimates[i + k - 1];
    answer = answer < preSum ? preSum : answer;
    preSum -= estimates[i];
  }
  return answer;
}

const estimates = [10, 1, 10, 1, 1, 4, 3, 10];
const k = 6;

console.log(solution(estimates, k));

// function sum(array) {
//     let result = 0;
//     for (let i = 0; i < array.length; i++) result += array[i];

//     return result;
//   }

//   function solution(estimates, k) {
//     let answer = 0;
//     for (let i = 0; i <= estimates.length - k; i++) {
//       let result = sum(estimates.slice(i, i + k));
//       answer = answer < result ? result : answer;
//     }
//     return answer;
//   }
