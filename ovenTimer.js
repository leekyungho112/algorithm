function ovenTimer(input) {
  const [[currentHour, currentMinute], cookingTime] = input.map((str) =>
    str.includes(' ') ? str.split(' ').map(Number) : Number(str)
  );

  const totalMinutes = currentHour * 60 + currentMinute + cookingTime;

  const resultHour = Math.floor(totalMinutes / 60) % 24;
  const resultMinute = totalMinutes % 60;

  return `${resultHour} ${resultMinute}`;
}

module.exports = ovenTimer;
