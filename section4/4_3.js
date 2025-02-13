function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);
  let test = [];
  let answer = 0;
  let rank = Array.from({ length: m }, () => Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    let line = input[i].split(" ").map(Number);
    test.push(line);
    for (let s = 0; s < n; s++) {
      rank[i - 1][line[s]] = s;
    }
  }

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          if (test[k][s] === i) {
            pi = s;
          }
          if (test[k][s] === j) {
            pj = s;
          }
        }
        if (pi < pj) {
          cnt++;
        }
      }
      if (cnt === m) {
        answer++;
      }
    }
  }
  console.log(rank);
  console.log(answer);
}

module.exports = solution;
