function solution(input) {
  let [a, b] = input[0].split(" ").map(Number);
  let cnt = 1; // 초기 값도 연산에 포함

  while (a < b) {
    if (b % 10 === 1) {
      b = Math.floor(b / 10); // 끝자리 제거
    } else if (b % 2 === 0) {
      b = b / 2; // 짝수일 경우 나누기 2
    } else {
      cnt = -1; // 변환 불가능
      break;
    }
    cnt += 1; // 연산 횟수 증가
  }

  if (a !== b) cnt = -1; // 도달하지 못한 경우

  console.log(cnt);
}

module.exports = solution;
