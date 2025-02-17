function solution(input) {
  const s = input[0];
  let answer = 0;
  let stack = [];
  for (let x of s) {
    if (x === "+" || x === "/" || x === "*" || x === "-") {
      let one = stack.pop();
      let two = stack.pop();
      let result;
      if (x === "+") result = two + one;
      else if (x === "-") result = two - one;
      else if (x === "*") result = two * one;
      else if (x === "/") result = Math.floor(two / one);

      stack.push(result);
    } else {
      stack.push(Number(x));
    }
    answer = stack[0];
  }
  console.log(answer);
}
module.exports = solution;
