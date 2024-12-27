function solution(input) {
  // 문자열을 공백 기준으로 잘라서 배열로 변환 데이터의 타입은 number로
  const num = input[0].split(" ").map((v) => Number(v));

  // 배열 내장 메서드의 정렬 sort를 활용하여 오름차순 정렬 후 공백을 기준으로 문자열로 변환
  const sorted = num.sort((a, b) => a - b).join(" ");
  console.log(sorted);
}

module.exports = solution;
