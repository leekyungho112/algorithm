function solution(input) {
  const n = Number(input[0]);

  let graph = [];

  for (let i = 1; i <= n; i++) {
    let line = input[i].split("");
    graph.push(line);
  }

  // 방문 여부 체크 배열 (2차원)
  function createVisited() {
    return Array.from({ length: n }, () => Array(n).fill(false));
  }

  // DFS 함수 (연결된 같은 색을 하나의 그룹으로 탐색)
  function dfs(x, y, color, visited, graph) {
    if (x < 0 || x >= n || y < 0 || y >= n) return;
    if (visited[x][y] || graph[x][y] !== color) return;

    visited[x][y] = true; // 방문 표시

    // 상하좌우 탐색
    dfs(x - 1, y, color, visited, graph); // 위
    dfs(x + 1, y, color, visited, graph); // 아래
    dfs(x, y - 1, color, visited, graph); // 왼쪽
    dfs(x, y + 1, color, visited, graph); // 오른쪽
  }

  // **1. 적록색약이 아닌 사람이 보는 그룹 개수**
  let normalVisited = createVisited();
  let normalCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!normalVisited[i][j]) {
        dfs(i, j, graph[i][j], normalVisited, graph);
        normalCount++;
      }
    }
  }

  // **2. 적록색약이 보는 그룹 개수**
  let colorBlindGraph = graph.map((row) =>
    row.map((cell) => (cell === "R" ? "G" : cell))
  ); // R을 G로 변경
  let colorBlindVisited = createVisited();
  let colorBlindCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (!colorBlindVisited[i][j]) {
        dfs(i, j, colorBlindGraph[i][j], colorBlindVisited, colorBlindGraph);
        colorBlindCount++;
      }
    }
  }

  // 결과 출력
  console.log(normalCount, colorBlindCount);
}

module.exports = solution;
