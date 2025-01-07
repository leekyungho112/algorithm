function solution(input) {
  const s = Number(input[0]);
  let sum = 0;
  let cur = 0;
  while (sum <= s) {
    cur += 1;

    sum += cur;
  }
  console.log(cur - 1);
}

module.exports = solution;
