function solution(input) {
  const n = Number(input[0]);
  //   function isReverseSame(str) {
  //     return str.split("").reverse("").join("") === str;
  //   }
  //   for (let i = 1; i <= n; i++) {
  //     const str = input[i];

  //     if (isReverseSame(str)) {
  //       console.log(0);
  //     } else {
  //       let found = false;
  //       let len = str.length;
  //       for (let i = 0; i < parseInt(len / 2); i++) {
  //         if (str[i] !== str[len - i - 1]) {
  //           if (isReverseSame(str.slice(0, i) + str.slice(i + 1, len)))
  //             found = true;
  //           if (
  //             isReverseSame(str.slice(0, len - i - 1) + str.slice(len - i, len))
  //           )
  //             found = true;
  //           break;
  //         }
  //       }
  //       if (found) console.log(1);
  //       else console.log(2);
  //     }
  //   }
  const a = "abba";
  console.log(a.slice(3, 4));
}

module.exports = solution;
