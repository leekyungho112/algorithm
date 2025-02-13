function solution(input) {
  let [n, m] = input[0].split(" ").map(Number);
  let arr = [];
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let line = input[i].split(" ").map(Number);
    arr.push(line);
  }
  arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    let money = m - (arr[i][0] / 2 + arr[i][1]);
    let cnt = 1;
    for (let j = 0; j < n; j++) {
      if (j !== i && arr[j][0] + arr[j][1] > money) break;
      if (j !== i && arr[j][0] + arr[j][1] <= money) {
        money = money - (arr[j][0] + arr[j][1]);
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  console.log(answer);
}

module.exports = solution;
