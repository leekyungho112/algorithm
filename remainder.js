function remainder(input) {
  const num = input.map(Number);

  const set = new Set();
  for (let i = 0; i < num.length; i++) {
    const num2 = num[i] % 42;
    set.add(num2);
  }
  return set.size;
}

module.exports = remainder;
