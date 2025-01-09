function solution(input) {
  const t = Number(input[0]);
  const n = input.slice(1).map(Number);

  let sum = 0;
  let prev1 = 1; // i = 1일 때 값
  let prev2 = 0; // i = 0일 때 값
  const arr = [0, 1];
  for (let i = 0; i < 1000000000; i++) {
    sum = prev1 + prev2; // 현재 값은 이전 두 값의 합

    if (sum > 1_000_000_000) {
      break;
    }

    arr.push(sum);
    prev2 = prev1;
    prev1 = sum;
  }
  const sort = arr.sort((a, b) => b - a);

  const usedNumbers = []; // 사용된 숫자를 저장할 배열

  for (const x of n) {
    let remian = x;
    const seleted = [];

    sort.forEach((v) => {
      if (v <= remian && v !== 0) {
        remian -= v; // 숫자를 뺌
        seleted.push(v); // 사용된 숫자를 저장
      }
    });
    usedNumbers.push(seleted.reverse().join(" "));
  }

  //   // 큰 수부터 200에서 빼기
  //   sort.forEach((v) => {
  //     if (b - v >= 0) {
  //       b -= v; // 숫자를 뺌
  //       usedNumbers.push(v); // 사용된 숫자를 저장
  //     }
  //   });
  //   console.log(usedNumbers);
  // 1. 피보나치 수열 생성 (1,000,000,000 이하)
  //   const fib = [0, 1];
  //   while (true) {
  //     const next = fib[fib.length - 1] + fib[fib.length - 2];
  //     if (next > 1_000_000_000) break;
  //     fib.push(next);
  //   }
  console.log(usedNumbers.join("\n"));
}

module.exports = solution;
