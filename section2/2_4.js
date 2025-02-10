function solution(input) {
  const n = Number(input[0]);
  const score = input[1].split(" ").map(Number);

  let answer = 0;
  let x = 0;
  for (let i = 0; i < n; i++) {
    if (score[i] === 1) {
      x += 1; // 연속된 1의 개수를 증가
      answer += x; // 점수에 x를 더함
    } else {
      x = 0; // 0이 나오면 연속 카운트 초기화
    }
  }
  console.log(answer);
}

module.exports = solution;
