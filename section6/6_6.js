function solution(input) {
  let [n, k] = input[0].split(" ").map(Number);
  let queue = Array.from({ length: n }, (_, i) => i + 1);
  let answer;
  while (queue.length) {
    for (let i = 1; i < k; i++) {
      let shift = queue.shift();

      queue.push(shift);
    }
    queue.shift();
    if (queue.length === 1) {
      answer = queue.shift();
    }
  }

  console.log(answer);
}

module.exports = solution;
