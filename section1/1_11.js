function solution(input) {
  const letter = input[0];

  let answer = 0;
  for (let x of letter) {
    if (x === x.toUpperCase()) {
      answer++;
    }
  }
  console.log(answer);
}

module.exports = solution;
