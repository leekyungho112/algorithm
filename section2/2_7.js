function solution(input) {
  const n = Number(input[0]);
  let arr = [];
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let line = input[i].split(" ").map(Number);
    arr.push(line);
  }

  let dx = [-1, 0, 1, 0];
  let dy = [0, 1, 0, -1];

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let falg = 1;
      for (let k = 0; k < 4; k++) {
        let nx = i + dx[k];
        let ny = j + dy[k];
        if (
          nx >= 0 &&
          nx < n &&
          ny >= 0 &&
          ny < n &&
          arr[nx][ny] >= arr[i][j]
        ) {
          falg = 0;
          break;
        }
      }
      if (falg) answer++;
    }
  }
  console.log(answer);
}

module.exports = solution;
