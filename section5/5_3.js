function solution(input) {
  let [n, m] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  let answer = 0;
  let start = 0;
  let sum = 0;

  for (let end = 0; end < n; end++) {
    sum += arr[end];

    while (sum > m) {
      sum = sum - arr[start];
      start++;
    }
    if (sum === m) {
      answer++;
      console.log(start, end);
    }
  }

  //   console.log(answer);
}

module.exports = solution;
