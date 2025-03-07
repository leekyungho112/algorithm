function solution(input) {
  const n = Number(input[0]);
  let answer = "";
  function DFS(L) {
    if (L === 0) return;
    else {
      DFS(L - 1);
      answer += L + " ";
    }
  }

  DFS(n);
  console.log(answer);
}

module.exports = solution;
