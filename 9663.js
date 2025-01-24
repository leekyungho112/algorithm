function solution(input) {
  const n = Number(input[0]);

  let cnt = 0;
  let result = [];

  function possible(x, y) {
    for (let [a, b] of result) {
      if (a === x || b === y) {
        return false;
      }
      if (Math.abs(a - x) === Math.abs(b - y)) {
        return false;
      }
    }

    return true;
  }

  function dfs(row) {
    // 종료 조건
    if (row === n) {
      cnt += 1;
      return;
    }

    // 반복 재귀
    for (let i = 0; i < n; i++) {
      if (!possible(row, i)) {
        continue;
      } else {
        result.push([row, i]);
        dfs(row + 1);
        result.pop();
      }
    }
  }

  dfs(0);
  console.log(cnt);
}

module.exports = solution;
