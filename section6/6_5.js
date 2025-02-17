function solution(input) {
  const s = input[0];
  let answer = 0;
  let stack = [];

  //   for (let x of s) {
  //     if (x === "(") {
  //       stack.push(x);
  //     }
  //   }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else if (s[i] === ")") {
      if (stack.length === 0) {
        return false;
      }
      stack.pop();
      if (s[i - 1] === "(") {
        answer += stack.length;
      } else {
        answer += 1;
      }
    }
  }
  console.log(answer);
}

module.exports = solution;
