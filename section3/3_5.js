function solution(input) {
  const str = input[0] + " ";

  let answer = "";

  let x = 1;

  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      x++;
    } else {
      answer += str[i] + (x > 1 ? x : "");

      x = 1;
    }
  }

  console.log(answer);
}

module.exports = solution;
