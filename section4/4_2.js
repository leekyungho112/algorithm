function isPrime(num) {
  if (num === 1) return false; //1은 소수가 아니다.
  // 1과 자기자신을 제외하고 반복문을 수행하도록 한다.
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
    //num이 다른 수로 나눠떨어진다면 소수가 아니다.
  }
  return true; //반복문을 종료할때까지 if문이 실행되지 않았다면 소수이다.
}

function solution(input) {
  const n = Number(input[0]);
  let arr = input[1].split(" ");
  let answer = [];

  for (let x of arr) {
    // let reverse = parseInt(x.split("").reverse().join(""));

    let res = 0;

    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = Math.floor(x / 10);
    }

    if (isPrime(res)) {
      answer.push(res);
    }
  }
  console.log(answer.join(" "));
}
module.exports = solution;
