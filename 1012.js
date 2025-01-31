function solution(input) {
  function dfs(graph, h, w, x, y) {
    if (x <= -1 || x >= h || y <= -1 || y >= w) {
      return false;
    }

    if (graph[x][y] == 1) {
      graph[x][y] = -1;

      dfs(graph, h, w, x - 1, y);
      dfs(graph, h, w, x, y - 1);
      dfs(graph, h, w, x + 1, y);
      dfs(graph, h, w, x, y + 1);
      return true;
    }

    return false;
  }
  let t = Number(input[0]);
  let line = 1;
  while (t--) {
    let [w, h, n] = input[line].split(" ").map(Number);

    let graph = [];
    // 배추 심어진 위치 표시
    for (let i = 0; i < h; i++) {
      graph[i] = new Array(w);
    }
    for (let i = 1; i <= n; i++) {
      let [y, x] = input[line + i].split(" ").map(Number);
      graph[x][y] = 1;
    }

    let answer = 0;
    for (let i = 0; i < h; i++) {
      for (let j = 0; j < w; j++) {
        if (dfs(graph, h, w, i, j)) {
          answer++;
        }
      }
    }
    line += n + 1;
    console.log(answer);
  }
}

module.exports = solution;
