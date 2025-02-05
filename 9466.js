function solution(input) {
  let t = Number(input[0]);
  let line = 1;
  let visited = "";
  let graph = [];

  while (t--) {
    let n = Number(input[line]);

    visited = Array(n + 1).fill(false); // 방문 여부
    let finished = Array(n + 1).fill(false); // 사이클 판별 완료 여부
    let count = 0; // 팀을 이루지 못한 학생 수

    for (let i = 1; i <= n; i++) {
      graph[i] = [];
    }

    for (let i = 1; i <= n; i++) {
      let selections = input[line + 1].split(" ").map(Number);
      graph[i] = selections[i - 1];
    }

    // DFS 함수 정의
    function dfs(student) {
      visited[student] = true; // 현재 학생 방문 표시
      let next = graph[student]; // 다음 학생

      if (!visited[next]) {
        dfs(next); // 다음 학생 탐색
      } else if (!finished[next]) {
        // 사이클을 찾았을 경우
        let node = next;
        while (node !== student) {
          count++; // 사이클 내 학생 수 증가
          node = graph[node];
        }
        count++; // 마지막 학생도 포함
      }

      finished[student] = true; // 탐색 완료
    }

    // 모든 학생에 대해 DFS 실행
    for (let i = 1; i <= n; i++) {
      if (!visited[i]) {
        dfs(i);
      }
    }

    line += 2;
    console.log(n - count);
  }
}

module.exports = solution;
