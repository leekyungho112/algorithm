function solution(input) {
  const [a, b, c] = input[0].split(" ").map(Number);
  let answer = "YES";
  let maxLength = "";
  let sum = a + b + c;
  if (a > b) {
    maxLength = a;
  } else {
    maxLength = b;
  }
  if (c > maxLength) {
    maxLength = c;
  }
  if (sum - maxLength <= maxLength) {
    answer = "NO";
  }

  console.log(answer);
}

module.exports = solution;
