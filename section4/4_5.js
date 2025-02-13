function solution(input) {
  let [n, k] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  let set = new Set();
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let x = j + 1; x < n; x++) {
        set.add(arr[i] + arr[j] + arr[x]);
      }
    }
  }
  let answer = [...set].sort((a, b) => b - a);
  console.log(answer[k - 1]);
}

module.exports = solution;
