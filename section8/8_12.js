function solution(input) {
  let [n, m] = input[0].split(" ").map(Number);

  let answer;
  let dy = Array.from(Array(35), () => Array(35).fill(0));

  function DFS(v, r) {
    if (dy[v][r] > 0) return dy[v][r];
    if (v === r || r === 0) {
      return 1;
    } else {
      return (dy[v][r] = DFS(v - 1, r - 1) + DFS(v - 1, r));
    }
  }

  answer = DFS(n, m);
  console.log(answer);
}

module.exports = solution;
