function solution(input) {
  let [n, m] = input[0].split(" ").map(Number);
  let dy = Array.from(Array(n), () => Array(n).fill(0));
  let ch = Array.from({ length: n + 1 }, () => 0);
  let tmp = Array.from({ length: n }, () => 0);
  let b = Array.from({ length: n }, () => 0);
  let answer;
  let flag = false;

  function combi(v, r) {
    if (dy[v][r] > 0) return dy[v][r];
    if (v === r || r === 0) return 1;
    else return (dy[v][r] = combi(v - 1, r - 1) + combi(v - 1, r));
  }
  function DFS(L, sum) {
    if (flag) return;
    if (L === n && sum === m) {
      answer = tmp.slice();
      flag = true;
    } else {
      for (let i = 1; i <= n; i++) {
        if (ch[i]) continue;
        else {
          ch[i] = 1;
          tmp[L] = i;
          DFS(L + 1, sum + b[L] * tmp[L]);
          ch[i] = 0;
        }
      }
    }
  }

  for (let i = 0; i < n; i++) {
    b[i] = combi(n - 1, i);
  }
  DFS(0, 0);
  console.log(answer);
}

module.exports = solution;
