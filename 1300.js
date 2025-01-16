function solution(input) {
  const n = Number(input[0]);
  const k = Number(input[1]);

  function countLessEqual(x) {
    let count = 0;
    for (let i = 1; i <= n; i++) {
      count += Math.min(Math.floor(x / i), n);
    }
    return count;
  }

  let start = 1;
  let end = n * n;
  let answer = 0;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (countLessEqual(mid) >= k) {
      answer = mid;
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  console.log(answer);
}

module.exports = solution;
