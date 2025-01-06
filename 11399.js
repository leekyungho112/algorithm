function solution(input) {
  const n = Number(input[0]); // 사람 수
  const times = input[1].split(" ").map(Number); // 각 사람이 돈을 인출하는 데 걸리는 시간

  // 1. 인출 시간을 오름차순으로 정렬
  times.sort((a, b) => a - b);
  console.log(times);

  // 2. 누적 합 계산
  let totalTime = 0; // 총 대기 시간
  let currentSum = 0; // 현재까지의 대기 시간

  for (let time of times) {
    currentSum += time; // 현재 사람의 대기 시간
    totalTime += currentSum; // 총 대기 시간에 추가
  }

  console.log(totalTime);
}

module.exports = solution;
