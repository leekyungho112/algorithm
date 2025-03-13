function solution(input) {
  let [n, m] = input[0].split(" ").map(Number);
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  function DFS(L, s) {
    if (L === m) {
      answer.push(tmp.join(" "));
      return;
    } else {
      for (let i = s; i <= n; i++) {
        tmp[L] = i;

        DFS(L + 1, i + 1);
      }
    }
  }

  DFS(0, 1);
  console.log(answer.join("\n"));
}

module.exports = solution;
