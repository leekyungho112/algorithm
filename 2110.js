function solution(input) {
  const [n, c] = input[0].split(" ").map(Number);
  const arr = input
    .slice(1, n + 1)
    .map(Number)
    .sort((a, b) => a - b);

  let start = 1;
  let end = Math.max(...arr) - arr[0];
  let result = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let count = 1;
    let prev = arr[0];

    for (let x of arr) {
      if (x - prev >= mid) {
        count++;
        prev = x;
      }
    }

    if (count < c) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }

  console.log(result);
}

module.exports = solution;
