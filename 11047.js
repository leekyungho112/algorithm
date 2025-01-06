function solution(input) {
  const [n, k] = input[0].split(" ").map(Number);
  const coins = input
    .slice(1, n + 1)
    .map(Number)
    .sort((a, b) => b - a);

  let remaining = k; // 남은 금액
  let count = 0; // 동전 개수 카운트

  for (let coin of coins) {
    if (remaining === 0) break; // 목표 금액이 0이면 종료
    if (coin <= remaining) {
      // 현재 동전으로 나눌 수 있는 경우
      const numCoins = Math.floor(remaining / coin); // 동전 개수 계산
      remaining -= numCoins * coin; // 남은 금액 갱신
      count += numCoins; // 사용한 동전 개수 누적
    }
  }
  console.log(count);
}

module.exports = solution;
