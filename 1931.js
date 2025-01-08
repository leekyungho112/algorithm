function solution(input) {
  const n = Number(input[0]);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(" ").map(Number));
  }
  // 종료 시간을 기준으로 오름차순 정렬
  arr.sort((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });

  let count = 1; // 카운트 변수
  let currentEnd = 0; // 현재 비교 기준 (초기값은 0)

  // 일반 for 반복문
  for (let i = 1; i < n; i++) {
    if (arr[currentEnd][1] <= arr[i][0]) {
      currentEnd = i; // 기준을 현재 종료 시간으로 갱신
      count += 1; // 카운트 증가
    }
  }
  console.log(count);
}

module.exports = solution;
