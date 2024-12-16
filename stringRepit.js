function stringRepit(input) {
  //   const testCase = input[0];

  //   for (let t = 1; t <= testCase; t++) {
  //     const string = input[t].split(' ');
  //     let answer = '';

  //     for (let x of string[1]) {
  //       for (let i = 0; i < string[0]; i++) {
  //         answer += x;
  //       }
  //     }
  //     console.log(answer);
  //   }

  // 다른 풀이

  const testCase = Number(input[0]);

  for (let i = 1; i <= testCase; i++) {
    const [r, s] = input[i].split(' ');
    let answer = '';
    for (let j = 0; j <= s.length; j++) {
      answer += s.charAt(j).repeat(r);
    }
    console.log(answer);
  }
}

module.exports = stringRepit;
