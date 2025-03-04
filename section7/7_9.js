function solution(input) {
  let n = Number(input[0]);
  let answer = Number.MIN_SAFE_INTEGER;
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let line = input[i].split(" ").map(Number);
    arr.push([line[0], "s"], [line[1], "e"]);
  }

  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1].localeCompare(b[1]);
    } else {
      return a[0] - b[0];
    }
  });

  let cnt = 0;
  for (let x of arr) {
    if (x[1] === "s") {
      cnt++;
    } else {
      cnt--;
    }
    answer = Math.max(answer, cnt);
  }

  console.log(answer);
}

module.exports = solution;
