function solution(input) {
  let [n, m] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  let sum = 0;
  let answer = 0;

  for (let i = 0; i < m; i++) {
    sum += arr[i];
    answer = sum;
  }
  for (let i = m; i < n; i++) {
    sum = sum + (arr[i] - arr[i - m]);

    answer = Math.max(answer, sum);
  }
  console.log(answer);
}

module.exports = solution;
