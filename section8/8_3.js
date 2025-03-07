function solution(input) {
  const n = Number(input[0]);

  let answer = "";

  function DFS(v) {
    if (v > 7) {
      return;
    } else {
      answer += String(v) + " ";
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }

  DFS(n);
  console.log(answer);
}

module.exports = solution;
