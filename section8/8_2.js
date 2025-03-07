function solution(input) {
  const n = Number(input[0]);
  let answer = "";

  function DFS(L) {
    if (L <= 0) {
      return;
    } else {
      DFS(parseInt(L / 2));
      answer += String(L % 2);
    }
  }

  DFS(n);
  console.log(answer);
}

module.exports = solution;
