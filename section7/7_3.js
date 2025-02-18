function solution(input) {
  const n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  let answer;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] < 0 && arr[j + 1] < 0) continue;

      if (arr[j] > 0 && arr[j + 1] > 0) continue;

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  answer = arr.join(" ");
  console.log(answer);
}

module.exports = solution;
