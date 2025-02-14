function solution(input) {
  const n = Number(input[0]);
  let str = input[1];
  let hash = new Map();
  let answer = "";
  let maxValue = Number.MIN_SAFE_INTEGER;

  for (let x of str) {
    if (hash.has(x)) {
      hash.set(x, hash.get(x) + 1); // 기존 값 +1 증가
    } else {
      hash.set(x, 1); // 처음 등장하는 문자면 1로 초기화
    }
  }
  for (let [key, value] of hash) {
    if (value > maxValue) {
      maxValue = value;
      answer = key;
    }
  }
  console.log(answer);
}

module.exports = solution;
