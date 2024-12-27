function solution(input) {
  const n = Number(input[0]);

  let newArr = [];
  for (let i = 1; i <= n; i++) {
    newArr.push(input[i]);
  }

  // 오름차순 정렬 후 줄바꿈 후 문자열로 변환
  const sorted = newArr.sort((a, b) => a - b).join("\n");
  console.log(sorted);
}

module.exports = solution;
