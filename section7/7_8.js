function solution(input) {
  let n = Number(input[0]);

  let arr = [];

  for (let i = 1; i <= n; i++) {
    let line = input[i].split(" ").map(Number);
    arr.push(line);
  }
  arr.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  let count = 1;
  let currentEnd = 0;
  for (let i = 1; i < n; i++) {
    if (arr[currentEnd][1] <= arr[i][0]) {
      currentEnd = i;
      count += 1;
    }
  }
  console.log(count);
}

module.exports = solution;
