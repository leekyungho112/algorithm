function solution(input) {
  const n = Number(input[0]);
  const array = input[1].split(" ").map(Number);

  array.reverse();

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
  let d = [0];

  for (let x of array) {
    if (d[d.length - 1] < x) {
      d.push(x);
    } else {
      let index = lowerBound(d, x, 0, d.length);
      d[index] = x;
    }
  }

  console.log(n - (d.length - 1));
}

module.exports = solution;