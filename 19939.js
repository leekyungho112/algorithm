function solution(input) {
  let [n, k] = input[0].split(" ").map(Number);

  let sum = (k * (k + 1)) / 2;

  if (sum > n) {
    return console.log(-1);
  }
  n = n - sum;
  if (n % k === 0) {
    return console.log(k - 1);
  } else {
    return console.log(k);
  }
}

module.exports = solution;
