function solution(input) {
  const n = Number(input[0]);
  const student = input[1].split(" ").map(Number);
  let answer = 0;
  let max = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < student.length; i++) {
    if (max < student[i]) {
      max = student[i];
      answer += 1;
    }
  }
  console.log(answer);
}

module.exports = solution;
