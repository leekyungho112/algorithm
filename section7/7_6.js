function solution(input) {
  const n = Number(input[0]);
  const student = input[1].split(" ").map(Number);

  //   let arr = student.slice().sort((a, b) => a - b);
  let arr = [...student].sort((a, b) => a - b);

  let answer = [];
  for (let i = 0; i < n; i++) {
    if (student[i] !== arr[i]) {
      answer.push(i + 1);
    }
  }
  console.log(answer.join(" "));
}
module.exports = solution;
