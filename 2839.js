function solution(input) {
  let n = Number(input[0]);
  let count = 0;

  while (true) {
    if (n % 5 === 0) {
      count += Math.floor(n / 5);
      break;
    }

    n -= 3;
    count += 1;

    if (n < 0) {
      count = -1;
      break;
    }
  }
  console.log(count);
}

module.exports = solution;
