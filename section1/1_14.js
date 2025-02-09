function solution(input) {
  const n = Number(input[0]);
  let answer = "";
  for (let i = 1; i <= n; i++) {
    let s = input[i];
    if (answer.length < s.length) {
      answer = s;
    }
  }
  console.log(answer);
}
module.exports = solution;
