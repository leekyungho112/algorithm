function maxLength(input) {
  const num = input.map(Number);

  let max = 0;
  let index = 0;

  for (let i = 0; i < num.length; i++) {
    if (max < num[i]) {
      max = num[i];
      index = i + 1;
    }
  }
  return { max, index };
}

module.exports = maxLength;
