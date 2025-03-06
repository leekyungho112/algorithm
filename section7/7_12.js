function count(horse, dist) {
  let cnt = 1;
  let ep = horse[0];

  for (let i = 1; i < horse.length; i++) {
    if (horse[i] - ep >= dist) {
      cnt++;
      ep = horse[i];
    }
  }
  return cnt;
}

function solution(input) {
  let [n, m] = input[0].split(" ").map(Number);
  let arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let answer = 0;
  let lt = 1;
  let rt = Math.max(...arr);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (count(arr, mid) >= m) {
      answer = mid;
      lt = mid + 1;
    } else rt = mid - 1;
  }
  console.log(answer);
}

module.exports = solution;
