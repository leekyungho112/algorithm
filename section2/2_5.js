function solution(input) {
  const n = Number(input[0]);
  const arr = input[1].split(" ").map(Number);
  //   let sortedScores = [...score].sort((a, b) => b - a); // 점수를 내림차순 정렬
  //   let rankMap = new Map(); // 점수별 등수를 저장할 맵

  //   let rank = 1;
  //   for (let i = 0; i < sortedScores.length; i++) {
  //     if (!rankMap.has(sortedScores[i])) {
  //       rankMap.set(sortedScores[i], rank); // 해당 점수가 처음 나오면 현재 등수를 저장
  //     }
  //     rank++; // 다음 등수로 증가
  //   }

  //   // 원본 배열의 각 점수에 대해 등수 매기기
  //   const answer = score.map((s) => rankMap.get(s));

  //   console.log(answer.join(" "));

  let answer = new Array(n).fill(1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) {
        answer[i]++;
      }
    }
  }
  console.log(answer.join(" "));
}

module.exports = solution;
