function solution(input) {
  const n = Number(input[0]);
  let km = input[1].split(" ").map(Number);
  let won = input[2].split(" ").map(Number);

  let first = won[0];

  for (let i = 0; i < n; i++) {
    first = Math.min(first, won[i]);
    won[i] = first;
  }

  let answer = BigInt(0);
  for (let i = 0; i < n - 1; i++) {
    answer += BigInt(km[i]) * BigInt(won[i]);
  }
  console.log(String(answer));
}

module.exports = solution;
