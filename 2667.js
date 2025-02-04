function solution(input) {
  const n = Number(input[0]);

  let graph = [];

  for (let i = 1; i <= n; i++) {
    let line = input[i].split("").map(Number);
    graph.push(line);
  }

  let answer = [];
  function dfs(x, y) {
    // console.log(x, y);
    if (x <= -1 || x >= n || y <= -1 || y >= n) return 0;
    // 아직 방문하지 않았다면
    if (graph[x][y] >= 1) {
      graph[x][y] = -1;
      let result = 1;
      result += dfs(x - 1, y);
      result += dfs(x, y - 1);
      result += dfs(x + 1, y);
      result += dfs(x, y + 1);
      return result;
    }
    return 0;
  }
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let current = dfs(i, j);

      if (current > 0) {
        answer.push(current);
      }
    }
  }

  answer.sort((a, b) => a - b);
  console.log(answer.length + "\n" + answer.join("\n"));
}

module.exports = solution;
