function dice(input) {
  const [a, b, c] = input[0].split(' ').map(Number);

  if (a === b && b === c) {
    return 10000 + a * 1000;
  }
  // 두 개의 주사위만 같은 경우
  if (a === b) {
    return 1000 + a * 100;
  }
  if (b === c) {
    return 1000 + b * 100;
  }
  if (a === c) {
    return 1000 + a * 100;
  }

  return Math.max(a, b, c) * 100;
}

module.exports = dice;
