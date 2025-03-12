function solution(input) {
  const n = Number(input[0]);
  let coins = input[1].split(" ").map(Number);
  let money = Number(input[2]);
  let answer = Number.MAX_SAFE_INTEGER;

  function DFS(L, sum) {
    if (sum > money || L >= answer) return;
    if (sum === money) {
      console.log(L);
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < n; i++) {
        DFS(L + 1, sum + coins[i]);
      }
    }
  }

  DFS(0, 0);
  console.log(answer);
}

module.exports = solution;
