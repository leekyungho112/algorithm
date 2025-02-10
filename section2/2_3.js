function solution(input) {
  const n = Number(input[0]);
  const a = input[1].split(" ").map(Number);
  const b = input[2].split(" ").map(Number);

  for (let i = 0; i < n; i++) {
    if (
      (a[i] === 1 && b[i] === 3) || // 가위(1) > 보(3)
      (a[i] === 2 && b[i] === 1) || // 바위(2) > 가위(1)
      (a[i] === 3 && b[i] === 2) // 보(3) > 바위(2)
    ) {
      console.log("A");
    } else if (a[i] === b[i]) {
      console.log("D");
    } else {
      console.log("B");
    }
  }
}

module.exports = solution;
