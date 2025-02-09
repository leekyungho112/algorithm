function solution(input) {
  const letter = input[0];
  let answer = "";
  for (let x of letter) {
    if (x === x.toUpperCase()) {
      answer += x.toLowerCase();
    } else {
      answer += x.toUpperCase();
    }
  }
  console.log(answer);
}

module.exports = solution;
