function solution(input) {
  let [n, m] = input[0].split(" ").map(Number);
  let arr = [];
  let answer = Number.MIN_SAFE_INTEGER;
  for (let i = 1; i <= n; i++) {
    const line = input[i].split(" ").map(Number);
    arr.push(line);
  }

  function DFS(L, sum, score) {
    if (sum > m) return;
    if (L === n) {
      answer = Math.max(answer, score);
    } else {
      DFS(L + 1, sum + arr[L][1], score + arr[L][0]);
      DFS(L + 1, sum, score);
    }
  }

  DFS(0, 0, 0);
  console.log(answer);
}

module.exports = solution;
