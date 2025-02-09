function solution(input) {
  const num = input.map(Number);

  let sum = num.reduce((acc, cur) => acc + cur, 0);
  let answer = [];
  let flag = 0;
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (sum - (num[i] + num[j]) === 100) {
        answer = num.filter((_, index) => index !== i && index !== j);
        flag = 1;
        break;
      }
    }
    if (flag === 1) {
      break;
    }
  }
  console.log(answer.sort((a, b) => a - b).join("\n"));
}

module.exports = solution;
