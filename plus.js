function plus(input) {
  let n = Number(input[0]);
  //   let sum = 0;
  //   for (i = 1; i <= n; i++) {
  //     sum += i;
  //   }
  //   return sum;
  return (n * (n + 1)) / 2;
}

module.exports = plus;
