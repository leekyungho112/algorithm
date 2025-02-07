function solution(input) {
  const num = input[0].split(" ").map(Number);
  let answer = 1e9;
  for (let i = 0; i < num.length; i++) {
    answer = Math.min(answer, num[i]);
  }

  console.log(answer);
}

module.exports = solution;
