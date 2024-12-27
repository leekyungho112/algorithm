function solution(input) {
  const N = Number(input[0]);

  let newArr = [];
  for (let i = 1; i <= N; i++) {
    const [x, y] = input[i].split(" ").map(Number);
    newArr.push([x, y]);
  }
  const sort = newArr
    .sort((a, b) => a[0] - b[0] || a[1] - b[1])
    .map((arr) => arr.join(" "))
    .join("\n");
  console.log(sort);
}

module.exports = solution;
