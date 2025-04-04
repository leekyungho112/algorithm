function solution(input) {
  let n = Number(input[0]);

  let arr = [];
  for (let i = 1; i <= n; i++) {
    let line = input[i].split(" ").map(Number);
    arr.push(line);
  }
  arr.sort((a, b) => {
    if (a[0] === b[0]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  arr.forEach((v) => {
    console.log(v.join(" "));
  });
}

module.exports = solution;
