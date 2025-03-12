function solution(input) {
  let [n, m] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  let tmp = Array.from({ length: m }, () => 0);
  let visited = Array.from({ length: n }, () => false);
  let answer = [];
  function DFS(L) {
    if (L === m) {
      answer.push(tmp.join(" "));

      return;
    } else {
      for (let i = 0; i < n; i++) {
        if (visited[i]) continue;
        else {
          visited[i] = true;
          tmp[L] = arr[i];
          DFS(L + 1);
          visited[i] = false;
        }
      }
    }
  }

  DFS(0);
  console.log(answer.join("\n"));
}
module.exports = solution;
