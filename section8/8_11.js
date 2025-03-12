function solution(input) {
  let n = Number(input[0]);
  let answer;

  function DFS(L) {
    if (L === 1) {
      return 1;
    } else {
      return L * DFS(L - 1);
    }
  }

  answer = DFS(n);
  console.log(answer);
}

module.exports = solution;
