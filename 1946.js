function solution(input) {
  const t = Number(input[0]); // 테스트 케이스 개수
  let index = 1; // 입력 처리용 인덱스

  const results = []; // 각 테스트 케이스 결과를 저장

  for (let test = 0; test < t; test++) {
    const n = Number(input[index]); // 현재 테스트 케이스의 사람 수
    index += 1;

    // 현재 테스트 케이스의 순위 정보 배열
    const arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(input[index].split(" ").map(Number));
      index += 1;
    }

    // 서류 순위 기준으로 정렬
    arr.sort((a, b) => a[0] - b[0]);

    let cnt = 1; // 첫 번째 사람은 항상 선발
    let minInterviewRank = arr[0][1]; // 현재까지 가장 좋은 면접 순위

    for (let i = 1; i < arr.length; i++) {
      if (arr[i][1] < minInterviewRank) {
        cnt += 1; // 새로운 사람 선발
        minInterviewRank = arr[i][1]; // 면접 순위 갱신
      }
    }

    results.push(cnt); // 결과 저장
  }

  // 테스트 케이스별 결과 출력
  results.forEach((res) => console.log(res));
}

module.exports = solution;
