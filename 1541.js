function solution(input) {
  const minus = input[0].split("-");

  const answer = [];
  minus.map((v) => {
    if (v.includes("+")) {
      let sum = 0;
      const plus = v.split("+").map(Number);
      plus.map((v) => (sum += v));
      answer.push(sum);
    } else {
      answer.push(Number(v));
    }
  });
  const result = answer.reduce((acc, cur) => acc - cur);
  console.log(result);
  //   const result = input[0]
  //     .split("-") // "-" 기준으로 분리
  //     .map((v) =>
  //       v
  //         .split("+")
  //         .map(Number)
  //         .reduce((acc, cur) => acc + cur, 0)
  //     ) // "+" 처리 및 합 계산
  //     .reduce((acc, cur) => acc - cur); // 최종 값 계산

  //   console.log(result);
}

module.exports = solution;
