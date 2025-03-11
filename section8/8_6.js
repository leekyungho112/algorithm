function solution(input) {
  let [n, m] = input[0].split(" ").map(Number);
  let w = [];
  let answer = Number.MIN_SAFE_INTEGER;

  for (let i = 1; i <= m; i++) {
    w.push(Number(input[i]));
  }

  function DFS(L, sum) {
    if (sum > n) return;
    if (L === m) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + w[L]);
      DFS(L + 1, sum);
    }
  }

  DFS(0, 0);
  console.log(answer);
}

module.exports = solution;
