function solution(input) {
  const s = input[0];
  let answer = "";
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === ")") {
      while (stack.pop() !== "(");
    } else {
      stack.push(s[i]);
    }

    answer = stack.join("");
  }
  console.log(answer);
}

module.exports = solution;
