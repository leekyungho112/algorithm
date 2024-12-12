function dice(input) {
  const [a, b, c] = input[0].split(' ').map(Number);

  if (a === b && b === c) {
    return 10000 + a * 1000;
  }
  if (a === b || b === c || a === c) {
    return 1000 + b * 100;
  }
  return Math.max(a, b, c) * 100;
}

module.exports = dice;
