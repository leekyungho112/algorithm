function solution(input) {
  let [s, n] = input[0].split(" ");
  let arr = input[1].split(" ").map(Number);
  let answer = Array.from({ length: s }, () => 0);

  for (let x of arr) {
    let pos = -1;

    for (let i = 0; i < n; i++) {
      if (x === answer[i]) pos = i;
    }
    console.log("pos:", pos, "x:", x);
    if (pos === -1) {
      for (let i = s - 1; i > 0; i--) {
        answer[i] = answer[i - 1];
      }
    } else {
      for (let i = pos; i > 0; i--) {
        answer[i] = answer[i - 1];
      }
    }
    answer[0] = x;
  }
  //   console.log(answer);
}

module.exports = solution;
