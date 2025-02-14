function solution(input) {
  const s = input[0];
  let answer = "YES";

  let stack = [];

  for (let x of s) {
    if (x === "(") {
      stack.push(x);
    } else if (x === ")") {
      if (stack.length === 0) {
        return false;
      } else {
        stack.pop();
      }
    }
    answer = stack.length > 0 ? "NO" : "YES";
  }
  console.log(answer);
}

module.exports = solution;
