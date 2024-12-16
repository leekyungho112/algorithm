function solution(input) {
  //   const [num1, num2] = input[0].split(' ');
  //   const a = num1.split('').map(Number).reverse().join('');
  //   const b = num2.split('').map(Number).reverse().join('');
  //   if (Number(a) > Number(b)) {
  //     console.log(a);
  //   } else {
  //     console.log(b);
  //   }

  /* 
다른 풀이 주어진 문제에서 입력 조건에
 두 수는 같지 않은 세 자리 수이며, 0이 포함되어 있지 않다.
 */

  const input1 = input[0].split(' ')[0];
  const input2 = input[0].split(' ')[1];

  const num1 = input1[2] + input1[1] + input1[0];
  const num2 = input2[2] + input2[1] + input2[0];
  console.log(Math.max(Number(num1), Number(num2)));
}

module.exports = solution;
