function solution(input) {
  const n = Number(input[0]);
  let newArr = [];
  for (let i = 1; i <= n; i++) {
    newArr.push(input[i]);
  }
  const sorted = newArr.sort((a, b) => a - b).join("\n");
  console.log(sorted);
}

module.exports = solution;
