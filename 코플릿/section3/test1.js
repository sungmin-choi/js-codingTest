function test1(A, B) {
  // TODO: 여기에 코드를 작성하세요.
  let num = A > B ? B : A;
  for (let i = num; i >= 1; i--) {
    if (A % i === 0 && B % i === 0) {
      return i;
    }
  }
}
// 가로 20, 세로 8이 주어졌을 때, 최대 4의 길이를 가진 정사각형 타일을 가질 수 있습니다.
const output1 = test1(20, 8);
console.log(output1); // --> 4

// 가로 18, 세로 27이 주어졌을 때, 최대 9의 길이를 가진 정사각형 타일을 가질 수 있습니다.
const output2 = test1(18, 27);
console.log(output2); // --> 9
