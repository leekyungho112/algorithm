function solution(input) {
  const day = Number(input[0]);
  const numbers = input[1].split(" ").map(Number);
  let answer = 0;
  for (let x of numbers) {
    // 두자리수의 숫자에서 끝자리만 나오게 10을 나눠서 일의 자리만 계산

    let divide = x % 10;
    if (divide === day) {
      answer += 1;
    }
  }

  console.log(answer);
}

module.exports = solution;
