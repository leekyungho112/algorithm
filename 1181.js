function solution(input) {
  const N = Number(input[0]);

  let arr = [];
  // 문자열을 줄바꿈 기준으로 잘라서 배열로 변환
  for (let i = 1; i <= N; i++) {
    arr.push(input[i]);
  }
  // 1.길이가 짧은거부터 2.길이가 같으면 사전순으로 *중복된 단어는 제거
  const sort = arr
    .filter((v, idx) => arr.indexOf(v) === idx)
    .sort((a, b) => {
      if (a.length !== b.length) {
        return a.length - b.length;
      } else {
        if (a < b) return -1;
        else if (a > b) return 1;
        else return 0;
      }
    });

  const answer = sort.join("\n");
  console.log(answer);
}

module.exports = solution;
