function solution(input) {
  const n = Number(input[0]);
  const arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const m = Number(input[2]);
  const target = input[3].split(" ").map(Number);

  function binarySearch(ar, targeted, start, end) {
    if (start > end) return 0;
    let mid = parseInt((start + end) / 2);
    if (ar[mid] === targeted) return 1;
    else if (ar[mid] > targeted)
      return binarySearch(ar, targeted, start, mid - 1);
    else return binarySearch(ar, targeted, mid + 1, end);
  }

  target.forEach((v) => {
    let result = binarySearch(arr, v, 0, arr.length - 1);
    console.log(result);
  });
}

module.exports = solution;
