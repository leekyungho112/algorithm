function solution(input) {
  let str = input[0].split("");
  const answer = str.filter((v, i) => {
    if (i === str.indexOf(str[i])) {
      return v;
    }
  });
  console.log(answer.join(""));
}

module.exports = solution;
