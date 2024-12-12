function multi(input) {
  let n = Number(input[0]);
  let sum = 0;
  for (i = 1; i <= 9; i++) {
    sum = n * i;
    console.log(`${n} * ${i} = ${sum}`);
  }
}

module.exports = multi;
