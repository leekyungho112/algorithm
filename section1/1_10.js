function solution(input) {
  const str = input[0];
  const letter = input[1];
  let answer = 0;

  for (let x of str) {
    if (x === letter) {
      answer += 1;
    }
  }
  console.log(answer);
}
module.exports = solution;
