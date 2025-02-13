function solution(input) {
  const n = Number(input[0]);
  const arr1 = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const m = Number(input[2]);
  const arr2 = input[3]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  let answer = [];
  while (p1 < n && p2 < m) {
    console.log(arr1[p1], arr2[p2]);
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]); // 공통 원소 추가
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      p1++; // arr1이 더 작으면 p1을 증가시켜서 다음 값 비교
    } else {
      p2++; // arr2가 더 작으면 p2를 증가시켜서 다음 값 비교
    }
  }
  console.log(answer);
}

module.exports = solution;
