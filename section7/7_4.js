function solution(input) {
  let n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  let answer = [];
  for (let i = 1; i < n; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      else break;
    }
  }
  answer = arr;
  console.log(answer);
}

module.exports = solution;
