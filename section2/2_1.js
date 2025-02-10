function solution(input) {
  const n = Number(input[0]);
  const numbers = input[1].split(" ").map(Number);

  let max = numbers[0];

  const answer = numbers.filter((v, i) => {
    return numbers[i - 1] < numbers[i];
  });
  console.log([max, ...answer].join(" "));
}

module.exports = solution;
