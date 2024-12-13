function average(input) {
  const testCase = Number(input[0]);

  for (let i = 1; i <= testCase; i++) {
    let data = input[i].split(' ').map(Number);
    let n = data[0];
    let sum = 0;

    for (let j = 1; j <= n; j++) {
      sum += data[j];
    }

    const aver = sum / n;

    let cnt = 0;
    for (let t = 1; t <= n; t++) {
      if (data[t] > aver) {
        cnt += 1;
      }
    }

    console.log(((cnt / n) * 100).toFixed(3));
  }
}

module.exports = average;
