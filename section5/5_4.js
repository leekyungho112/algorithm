function solution(input) {
  let [n, m] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);

  let left = 0;
  let sum = 0;
  let answer = 0;
  for (let right = 0; right < n; right++) {
    sum += arr[right];

    while (sum > m) {
      sum = sum - arr[left];
      left++;
    }

    answer += right - left + 1;
    console.log(right, left);
  }
  console.log(answer);
}

module.exports = solution;
