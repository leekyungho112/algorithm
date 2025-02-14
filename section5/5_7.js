function solution(input) {
  const str1 = input[0];
  const str2 = input[1];
  let sH1 = new Map();
  let sH2 = new Map();
  let answer = "YES";
  for (let x of str1) {
    if (sH1.has(x)) {
      sH1.set(x, sH1.get(x) + 1);
    } else {
      sH1.set(x, 1);
    }
  }
  for (let x of str2) {
    if (sH2.has(x)) {
      sH2.set(x, sH2.get(x) + 1);
    } else {
      sH2.set(x, 1);
    }
  }
  for (let [key, value] of sH1) {
    if (!sH2.has(key) || sH2.get(key) !== value) {
      answer = "NO";
    }
  }
  console.log(answer);
}
module.exports = solution;
