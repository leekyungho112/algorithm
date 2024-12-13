function averageOne(input) {
  const n = +input[0];
  const data = input[1].split(' ').map(Number);

  const max = data.reduce((acc, cur) => Math.max(acc, cur), data[0]);
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += (data[i] / max) * 100;
  }
  return sum / n;
}

module.exports = averageOne;
