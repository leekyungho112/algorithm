function solution(input) {
  const [N, K] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);
  const sorted = arr.sort((a, b) => a - b);
  console.log(sorted[K - 1]);
}

module.exports = solution;
