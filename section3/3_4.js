function solution(input) {
  const [str, target] = input[0].split(" ");
  let len = str.length;
  let answer = new Array(len).fill(0);
  let x = 1000;

  for (let i = 0; i < len; i++) {
    if (str[i] === target) {
      x = 0;
      answer[i] = 0;
    } else {
      x++;
      answer[i] = x;
    }
  }
  x = 1000;

  for (let i = len - 1; i >= 0; i--) {
    if (str[i] === target) {
      x = 0;
      answer[i] = 0;
    } else {
      x++;
      answer[i] = Math.min(x, answer[i]);
    }
  }
  console.log(answer);
}

module.exports = solution;
