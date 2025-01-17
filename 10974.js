function solution(input) {
  const n = Number(input[0]);

  let arr = [];
  let visited = Array(n).fill(false);
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }

  let selected = [];

  let answer = "";

  function dfs(arr, depth) {
    if (depth === n) {
      let result = [];
      for (let i of selected) {
        result.push(arr[i]);
      }
      for (let x of result) {
        answer += x + " ";
      }
      answer += "\n";
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      if (visited[i]) {
        continue;
      } else {
        selected.push(i);
        visited[i] = true;
        dfs(arr, depth + 1);
        selected.pop();
        visited[i] = false;
      }
    }
  }

  dfs(arr, 0);
  console.log(answer);
  //   const n = Number(input[0]);
  //   const result = [];
  //   const visited = Array(n + 1).fill(false);

  //   function dfs(path) {
  //     // M개의 숫자를 모두 선택했을 경우 결과 저장
  //     if (path.length === n) {
  //       result.push(path.join(" "));
  //       return;
  //     }

  //     // 1부터 N까지의 숫자를 탐색
  //     for (let i = 1; i <= n; i++) {
  //       if (visited[i]) {
  //         continue;
  //       } else {
  //         visited[i] = true; // 숫자 선택
  //         dfs([...path, i]); // 선택한 숫자를 path에 추가하여 재귀 호출
  //         visited[i] = false; // 선택 해제 (백트래킹)
  //       }
  //     }
  //   }

  //   dfs([]); // 초기 path는 빈 배열
  //   console.log(result.join("\n")); // 결과 출력
}

module.exports = solution;
