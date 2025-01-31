function solution(input) {
  const n = Number(input[0]);
  const m = Number(input[1]);
  let graph = Array.from({ length: n + 1 }, () => []);
  let visited = Array(n + 1).fill(false);
  // 감염된 컴퓨터 수를 세는 변수
  let count = 0;
  // 간선 정보 입력
  for (let i = 2; i < 2 + m; i++) {
    let [a, b] = input[i].split(" ").map(Number);
    graph[a].push(b);
    graph[b].push(a);
    console.log(graph);
  }

  function dfs(graph, v, visited) {
    visited[v] = true;

    for (let i of graph[v]) {
      if (!visited[i]) {
        count++;
        dfs(graph, i, visited);
      }
    }
  }
  dfs(graph, 1, visited);
  console.log(count);
}

module.exports = solution;
