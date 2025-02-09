function solution(input) {
  const num = input[0].split(" ").map(Number);
  let answer = "";
  let min = 1e9;
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 !== 0) {
      sum += num[i];
      min = Math.min(min, num[i]);
    }
    answer = min;
  }
  console.log(sum);
  console.log(answer);
}

module.exports = solution;
