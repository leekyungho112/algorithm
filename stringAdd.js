function stringAdd(input) {
  const n = input[0];
  const data = input[1];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += Number(data[i]);
  }
  return sum;
}

module.exports = stringAdd;
