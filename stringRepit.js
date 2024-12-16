function stringRepit(input) {
  const testCase = input[0];

  for (let t = 1; t <= testCase; t++) {
    const string = input[t].split(' ');
    let answer = '';

    for (let x of string[1]) {
      for (let i = 0; i < string[0]; i++) {
        answer += x;
      }
    }
    console.log(answer);
  }
}

module.exports = stringRepit;
