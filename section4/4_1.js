function solution(input) {
  const n = Number(input[0]);
  const arr = input[1].split(" ").map(Number);

  let max = -1;
  let answer = -1;
  for (let i = 0; i < n; i++) {
    const ones = arr[i] % 10;
    const tens = Math.floor((arr[i] % 100) / 10);
    const hundreds = Math.floor(arr[i] / 100);

    let sum = hundreds + tens + ones;

    if (sum > max) {
      max = sum;
      answer = arr[i];
    } else if (sum === max && arr[i] > answer) {
      answer = arr[i];
    }
  }
  console.log(answer);
}

module.exports = solution;
