function solution(input) {
  const n = Number(input[0]);
  const signs = input[1].split(" ");

  let selected = [];
  let visited = Array(10).fill(false);

  let maxValue = "";
  let minValue = "";
  function isValid(prev, next, sign) {
    // 부등호 조건 검사
    if (sign === "<") return prev < next;
    if (sign === ">") return prev > next;
    return false;
  }

  function dfs(depth) {
    if (depth === n + 1) {
      const join = selected.join("");

      if (join > maxValue) {
        maxValue = join;
      }
      if (!minValue || join < minValue) {
        minValue = join;
      }
      return;
    }

    for (let i = 0; i <= 9; i++) {
      if (visited[i]) {
        continue;
      }
      if (depth > 0 && !isValid(selected[depth - 1], i, signs[depth - 1])) {
        continue;
      }

      selected.push(i);

      visited[i] = true;
      dfs(depth + 1);
      selected.pop();
      visited[i] = false;
    }
  }

  dfs(0);
  console.log(maxValue);
  console.log(minValue);
}
module.exports = solution;
