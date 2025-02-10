function solution(input) {
  const n = Number(input[0]);

  let arr = [];
  let answer = Number.MIN_SAFE_INTEGER;
  let row = 0;
  let col = 0;
  for (let i = 1; i <= n; i++) {
    let line = input[i].split(" ").map(Number);
    arr.push(line);
  }

  for (let i = 0; i < arr.length; i++) {
    row = 0;
    col = 0;
    for (let j = 0; j < arr.length; j++) {
      row += arr[i][j];
      col += arr[j][i];
    }
    answer = Math.max(answer, row, col);
  }
  row = 0;
  col = 0;
  for (let i = 0; i < arr.length; i++) {
    row += arr[i][i];
    col += arr[i][n - i - 1];
  }
  answer = Math.max(answer, row, col);
  console.log(answer);
}

module.exports = solution;
