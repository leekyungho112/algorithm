function solution(input) {
  //   const arr = input[0].split("").map(Number);

  //   const sort = arr.sort((a, b) => b - a);
  //   console.log(arr);

  const arr = input[0];
  let cnt = Array(10).fill(0);

  for (let x of arr) {
    cnt[Number(x)]++;
  }

  let answer = "";
  for (let i = 9; i >= 0; i--) {
    for (let j = 0; j < cnt[i]; j++) {
      answer += i + "";
    }
  }
  console.log(answer);
}

module.exports = solution;
