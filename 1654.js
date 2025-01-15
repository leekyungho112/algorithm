function solution(input) {
  const [n, k] = input[0].split(" ").map(Number);
  const arr = input.slice(1, n + 1).map(Number);

  let start = 0;
  let end = Math.max(...arr);
  let result = 0;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let total = 0;
    for (let x of arr) {
      total += parseInt(x / mid);
    }

    if (total < k) {
      end = mid - 1;
    } else {
      result = mid;
      start = mid + 1;
    }
  }
  console.log(result);
}

module.exports = solution;
