function solution(input) {
  let [n, m] = input[0].split(" ").map(Number);
  let tmp = Array.from({ length: m }, () => 0);

  let answer = [];

  function DFS(L) {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  }

  DFS(0);
  console.log(answer);
}

module.exports = solution;
