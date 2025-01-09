function solution(input) {
  const n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);

  const heights = new Array(n + 1).fill(0);

  let count = 0;
  for (const x of arr) {
    if (heights[x] > 0) {
      heights[x] -= 1;
      heights[x - 1] += 1;
    } else {
      heights[x - 1] += 1;
      count++;
    }
  }
  console.log(count);
}

module.exports = solution;
