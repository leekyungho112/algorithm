function solution(input) {
  const num = input[0].split(" ").map(Number);
  //   let minValue = 1e9;
  let answer = "";
  //   for (let i = 0; i < num.length; i++) {
  //     if (minValue > num[i]) {
  //       minValue = num[i];
  //     }
  //   }

  if (num[0] < num[1]) {
    answer = num[0];
  } else {
    answer = num[1];
  }
  if (num[2] < answer) {
    answer = num[2];
  }

  console.log(answer);
}

module.exports = solution;
