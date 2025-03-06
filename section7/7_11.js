function count(songs, capacity) {
  let cnt = 1;
  let sum = 0;

  for (let x of songs) {
    if (sum + x > capacity) {
      cnt++;
      sum = x;
    } else sum += x;
  }

  return cnt;
}

function solution(input) {
  let [n, m] = input[0].split(" ").map(Number);
  let arr = input[1].split(" ").map(Number);
  let answer = 0;
  let lt = Math.max(...arr);
  let rt = arr.reduce((acc, cur) => acc + cur, 0);

  while (lt <= rt) {
    let mid = parseInt((lt + rt) / 2);

    if (count(arr, mid) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }
  console.log(answer);
}

module.exports = solution;
