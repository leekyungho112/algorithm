function solution(input) {
  const [num1, num2] = input[0].split(' ');
  const a = num1.split('').map(Number).reverse().join('');
  const b = num2.split('').map(Number).reverse().join('');
  if (Number(a) > Number(b)) {
    console.log(a);
  } else {
    console.log(b);
  }
}

module.exports = solution;
