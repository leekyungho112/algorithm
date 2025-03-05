function solution(input) {
  let [n, m] = input[0].split(" ").map(Number);
  let arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  const binarySearch = (array, target) => {
    let start = 0;
    let end = array.length - 1;
    let mid;

    while (start <= end) {
      mid = Math.floor((end + start) / 2);

      if (target === arr[mid]) {
        return mid + 1;
      } else {
        if (target < arr[mid]) {
          end = mid - 1;
        } else {
          start = mid + 1;
        }
      }
    }
    return -1;
  };
  console.log(binarySearch(arr, m));
}

module.exports = solution;
