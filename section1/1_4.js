function solution(input) {
  const n = Number(input[0]);
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }

  console.log(answer);
}

module.exports = solution;
