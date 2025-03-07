function solution(input) {
  const n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);

  let answer = "";
  let total = arr.reduce((a, b) => a + b, 0);
  let flag = false;
  function DFS(v, sum) {
    if (v === n) {
      if (flag) {
        return;
      }
      if (total - sum === sum) {
        answer = "YES";

        flag = true;
      } else answer = "NO";
    } else {
      DFS(v + 1, sum + arr[v]);

      DFS(v + 1, sum);
    }
  }

  DFS(0, 0);
  console.log(answer);
}

module.exports = solution;
