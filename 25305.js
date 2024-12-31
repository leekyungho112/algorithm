function solution(input) {
  const [n, k] = input[0].split(" ").map(Number);

  const arr = input[1].split(" ").map(Number);

  const sort = arr.sort((a, b) => b - a);
  console.log(sort[k - 1]);
}

module.exports = solution;
