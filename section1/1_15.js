function solution(input) {
  const str = input[0];
  let answer = "";

  let n = str.length % 2;
  let a = Math.floor(str.length / 2);
  if (n === 0) {
    answer = str[a - 1] + str[a];
  } else {
    answer = str[a];
  }

  console.log(answer);
}

module.exports = solution;
