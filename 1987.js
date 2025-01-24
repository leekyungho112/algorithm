function solution(input) {
  const [r, c] = input[0].split(" ").map(Number);

  let arr = [];
  let visited = new Set(); // 방문한 알파벳 추적

  let maxCount = 0;
  // 상하좌우로 이동
  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  for (let i = 1; i <= r; i++) {
    let letter = input[i].split("");
    arr.push(letter);
  }

  function possible(x, y) {
    // 현재 위치가 범위를 벗어나면 불가능
    if (x < 0 || x >= r || y < 0 || y >= c) return false;

    // 현재 위치의 알파벳이 이미 방문된 경우 불가능
    if (visited.has(arr[x][y])) return false;

    return true;
  }

  function dfs(x, y, count) {
    maxCount = Math.max(maxCount, count);
    visited.add(arr[x][y]);
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];

      if (!possible(nx, ny)) {
        continue;
      } else {
        dfs(nx, ny, count + 1); // 다음 위치로 이동
        // 탐색 종료 후 알파벳 제거 (백트래킹)
      }
    }
    visited.delete(arr[x][y]);
  }

  // 탐색 시작 (0, 0)부터
  dfs(0, 0, 1);
  console.log(maxCount);
}

module.exports = solution;
