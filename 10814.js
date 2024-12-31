function solution(input) {
  const n = Number(input[0]);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(" "));
  }

  // node.js의 정렬 즉 sort 내장함수는 stable을 보장 한다.
  const sort = arr
    .sort((a, b) => a[0] - b[0])
    .map((v) => v.join(" "))
    .join("\n");
  console.log(sort);
}

module.exports = solution;
