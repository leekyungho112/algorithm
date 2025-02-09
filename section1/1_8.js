function solution(input) {
  const num = input[0].split(" ").map(Number);
  let sum = num.reduce((acc, cur) => acc + cur, 0);
  let answer = [];
  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      //   console.log(num[i], num[j]);
      if (sum - (num[i] + num[j]) === 100) {
        answer = [...num.slice(0, 5), ...num.slice(7)];
      }
    }
  }
  console.log(answer);
}

module.exports = solution;
