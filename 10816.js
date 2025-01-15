function solution(input) {
  const n = Number(input[0]);
  const array = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const m = Number(input[2]);
  const targets = input[3].split(" ").map(Number);

  function lowerBound(arr, target, start, end) {
    while (start < end) {
      let mid = parseInt((start + end) / 2);
      if (arr[mid] >= target) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return end;
  }

  function upperBound(arr, target, start, end) {
    while (start < end) {
      let mid = parseInt((start + end) / 2);
      if (arr[mid] > target) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return end;
  }

  function countByRange(arr, leftValue, rightValue) {
    let rightIndex = upperBound(arr, rightValue, 0, arr.length);

    let leftIndex = lowerBound(arr, leftValue, 0, arr.length);

    return rightIndex - leftIndex;
  }

  const answer = targets
    .map((target) => countByRange(array, target, target))
    .join(" ");
  console.log(answer);
}

module.exports = solution;
