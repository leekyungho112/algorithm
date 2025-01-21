function solution(input) {
  const [n, m] = input[0].split(" ").map(Number);

  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  let selected = [];
  let answer = "";

  function dfs(start, depth) {
    if (depth === m) {
      let result = [];
      for (let i of selected) {
        result.push(arr[i]);
      }

      //   console.log(result);
      for (let x of result) {
        answer += x + " ";
      }
      answer += "\n";
      return;
    }
    for (let i = start; i < arr.length; i++) {
      // i는 start부터 시작
      selected.push(i); // 인덱스 추가

      dfs(i + 1, depth + 1); // 다음 숫자로 진행 (i + 1부터 시작)

      selected.pop(); // 상태 복구 (백트래킹)
    }
  }

  dfs(0, 0);
  console.log(answer);
}

module.exports = solution;
