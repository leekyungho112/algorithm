function solution(input) {
  //   const str = input[0].toLowerCase().split("");
  //   const reverse = str.reverse();
  //   let answer = "";

  //   str.forEach((v, i) => {
  //     if (v === reverse[i]) {
  //       answer = "YES";
  //     } else {
  //       answer = "NO";
  //     }
  //   });

  let str = input[0].toLowerCase();
  let answer = "YES";
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    if (str[i] !== str[str.length - i - 1]) {
      answer = "NO";
    }
  }
  console.log(answer);
}
module.exports = solution;
