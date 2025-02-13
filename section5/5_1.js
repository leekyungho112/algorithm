function solution(input) {
  const n = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  const m = input[2].split(" ").map(Number);
  let arr1 = input[3].split(" ").map(Number);
  let p1 = 0;
  let p2 = 0;
  let answer = [];
  while (p1 < n && p2 < m) {
    if (arr[p1] <= arr1[p2]) {
      answer.push(arr[p1]);
      p1++;
    } else {
      answer.push(arr1[p2]);
      p2++;
    }
  }
  while (p1 < n) {
    answer.push(arr[p1]);
    p1++;
  }
  while (p2 < m) {
    answer.push(arr1[p2]);
    p2++;
  }
  console.log(answer);
}
module.exports = solution;
