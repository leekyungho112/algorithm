function solution(input) {
  const n = Number(input[0]);
  let answer = [];
  for (let i = 1; i <= n; i++) {
    answer.push(input[i]);
  }

  const a = answer.filter((v, i) => {
    if (i === answer.indexOf(v)) {
      return v;
    }
  });
  console.log(a);
}

module.exports = solution;
