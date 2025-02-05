function solution(input) {
  const n = Number(input[0]);
  let visited = Array(n + 1).fill(false);
  let finished = Array(n + 1).fill(false);
  let graph = [];
  let result = [];

  for (let i = 1; i <= n; i++) {
    graph[i] = [];
  }

  for (let i = 1; i <= n; i++) {
    graph[i] = Number(input[i]);
  }

  function dfs(x, graph, visited, finished, result) {
    visited[x] = true;

    let y = graph[x];

    if (!visited[y]) {
      dfs(y, graph, visited, finished, result);
    } else if (!finished[y]) {
      while (y !== x) {
        result.push(y);
        y = graph[y];
      }
      result.push(x);
    }

    finished[x] = true;
  }

  for (let i = 1; i <= n; i++) {
    if (!visited[i]) {
      dfs(i, graph, visited, finished, result);
    }
  }

  console.log(result.length);
  result.sort((a, b) => a - b);
  for (let x of result) {
    console.log(x);
  }
}

module.exports = solution;
