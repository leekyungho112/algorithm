function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);
  const arr = input[1].split(" ").map(Number);

  let start = 0; // 톱의 최소 높이
  let end = Math.max(...arr); // 톱의 최대 높이 (가장 높은 나무)
  let result = 0; // 최적의 톱 높이 저장

  while (start <= end) {
    const mid = Math.floor((start + end) / 2); // 현재 톱 높이
    let total = 0; // 자른 나무 길이 합

    // 현재 톱 높이에서 자를 수 있는 나무 길이 계산
    for (let height of arr) {
      if (height > mid) {
        total += height - mid; // 자른 길이만 더함
      }
    }

    // 자른 길이 합이 충분한 경우
    if (total >= m) {
      result = mid; // 현재 톱 높이를 저장 (최적해 후보)
      start = mid + 1; // 더 높은 톱 높이 탐색
    } else {
      end = mid - 1; // 톱 높이를 낮춰야 함
    }
  }

  console.log(result);
}

module.exports = solution;
