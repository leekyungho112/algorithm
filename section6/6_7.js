function solution(input) {
  const queue = input[0].split("");
  let plan = input[1];

  let answer = "";
  for (let x of plan) {
    if (queue.includes(x)) {
      if (queue[0] === x) {
        queue.shift();
      } else {
        break;
      }
    }
  }
  if (queue.length === 0) {
    answer = "YES";
  } else {
    answer = "NO";
  }

  console.log(answer);
}

module.exports = solution;
