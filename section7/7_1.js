function solution(input) {
  const n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);

  let answer = [];

  for (let i = 0; i < n; i++) {
    let idx = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[idx]) {
        idx = j;
      }
      [arr[i], arr[idx]] = [arr[idx], arr[i]];
    }
  }
  answer = arr;
  console.log(answer);
}

module.exports = solution;
