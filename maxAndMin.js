function maxAndMin(input) {
  let a = Number(input[0]);
  let numbers = input[1].split(' ').map(Number);

  let maxNum = -1000001;
  let minNum = 1000001;
  for (let i = 0; i < a; i++) {
    if (maxNum < numbers[i]) {
      maxNum = numbers[i];
    }
    if (minNum > numbers[i]) {
      minNum = numbers[i];
    }
  }
  console.log(minNum, maxNum);
}

module.exports = maxAndMin;
