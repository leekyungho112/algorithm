function maxLength(input) {
  const num = input.map(Number);

  //   let max = 0;
  //   let index = 0;

  //   for (let i = 0; i < num.length; i++) {
  //     if (max < num[i]) {
  //       max = num[i];
  //       index = i + 1;
  //     }
  //   }
  //   return { max, index };

  const max = num.reduce((acc, cur) => Math.max(acc, cur), num[0]);
  const index = num.indexOf(max) + 1;

  return { max, index };
}

module.exports = maxLength;
