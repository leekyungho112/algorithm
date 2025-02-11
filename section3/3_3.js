function solution(input) {
  const str = input[0].replace(/[^0-9]/g, "");
  console.log(parseInt(str));
}

module.exports = solution;
